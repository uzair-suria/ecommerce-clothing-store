import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { auth, loginWithGoogle } from "../../Utils/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="login-email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label={"Email"}
          />
          <FormInput
            type="password"
            name="password"
            id="login-password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label={"Password"}
          />
          <div className="buttons">
            <Button onClick={this.handleSubmit}>Login</Button>
            <Button isGoogleSignIn onClick={loginWithGoogle}>
              Login with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
