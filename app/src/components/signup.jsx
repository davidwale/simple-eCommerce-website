import React, { useState } from 'react'

export default function SignUp() {
  
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

function handleSubmit(e) {

  if (userType === "Admin"  && secretKey!="davmin") {
    e.preventDefault();
  
    alert("invalid Admin secret")
   } else {
    e.preventDefault();
    
    console.log(fname, lname, email, password);
    fetch("http://localhost:4000/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        userType: userType
    }),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data, "User Registered");
        window.location.href = "/";
    })
}

}
    return (
      <form onSubmit={handleSubmit} className='form'>
        <h1>Sign Up</h1>
        <input type="radio" name="usertype" value="User" onChange={(e) => setUserType(e.target.value)} />User
            <input type="radio" name="usertype" value="Admin" onChange={(e) => setUserType(e.target.value)} />Admin
       <div>
       {userType=="Admin"? <input
              type="text"
              className="login-secret"
              placeholder="secret key"
              onChange={(e) => setSecretKey(e.target.value)}
            />: null} 
       </div>
       
        <div>
        
          
          <input
            type="text"
            className="sign-f"
            placeholder="First name"
            onChange={(e) => setfName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          
          <input type="text" className="sign-l" placeholder="Last name"
             onChange={(e) => setlName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          
          <input
            type="email"
            className="login-user"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}         />
        </div>

        <div className="mb-3">
          
          <input
            type="password"
            className="login-pass"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn">
            <p>Sign Up</p>
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form>
    )

}