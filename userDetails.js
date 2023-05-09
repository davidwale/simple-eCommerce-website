const mongoose = require('mongoose');
const { ObjectId } = require("mongoose").Types;


const UserDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type: String,
        unique: true },
        password: String,
        userType: String,
        cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
    },
    {
        collection: "UserInfo",
    }
);  

mongoose.model('UserInfo', UserDetailsSchema);

const cartItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
  });
  
  mongoose.model("CartItem", cartItemSchema);