const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = "fkgfdkfogd{}234jgkmmmmmkdjgfgfncddjsasqw87";
const TOKEN_EXPIRATION_TIME = "1h";

// mongoose connection here
mongoose.connect("mongodb+srv://davidwale2003:davido2003@cluster0.cbk7mhj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/signup", async (req, res) => {
  const data = Object.values(req.body);
  const [fname, lname, email, password, userType ] = data;
  const encryptedPassword = await bcrypt.hash(password, 10);

    try {
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(400).send({ message: "User already exists" });
      }
       await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType

       });
       res.send({ message: "User created successfully" }); 
    } catch (error) {
        res.send({ message: "error" });
    }
});

app.post("/", async (req, res) => {
  const data = Object.values(req.body);
  const [email, password] = data;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION_TIME,
    });
    return res.json({ status: "ok", data: token });
  } else {
    return res.status(401).send({ message: "Incorrect password" });
  }
});

app.post("/dashboard", async (req, res) => {
  // const data = Object.values(req.body);
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    
    const useremail = user.email;
    User.findOne({ email: useremail })
    .then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.send ({ status: "error", data: error });
    console.log(error.message);
  }
})

app.get("/getAllUser", async (req, res) => {
  try {
    const allUsers = await User.find({}).populate("cart");
    res.send({ status: "ok", data: allUsers });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", message: "Failed to fetch users" });
  }
});



app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    await User.deleteOne({ _id: userid });
    res.send({ status: "ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/paginateUser", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page) 
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {}
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if(endIndex < allUser.length) {
    results.next = {
      page: page +1,
      limit: limit
    }
  }
if (startIndex > 0) {
  results.prev = {
    page: page -1,
    limit: limit
  }
}
  results.result =  allUser.slice(startIndex, endIndex);
  res.json(results);
});


app.listen(4000, () => {
    console.log(`Server started on port 4000`);
  });