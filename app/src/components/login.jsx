import React, { Component } from 'react';



export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:4000/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registered");
        if (data.status === "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("LoggedIn", true);
          window.location.href = "/dashboard";
        } else {
          alert("incorrect username or password");
        }
      });
  }

  render() {
    return (
      <center>
        <form onSubmit={this.handleSubmit} className="form">
        <h1>Sign In</h1>

        <div className="form-group">
          
          <input
            type="email"
            className="login-user"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-group">
          
          <input
            type="password"
            className="login-pass"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>



        <div className="d-grid">
          <button type="submit" className="btn">
            <p>Submit</p>
          </button>
        </div>

        <p className="forgot-password text-right">
          New User? <a href="/signup">Register</a>
        </p>
      </form>
      </center>
    );
  }
}
