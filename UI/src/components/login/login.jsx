import { useState, Component} from "react";
import React from "react";
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../shared/validator';
import BookPage from '../books/bookmain';

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  validateLoginForm = (e) => {

    let errors = {};
    const { formData } = this.state;

    if (isEmpty(formData.email)) {
        errors.email = "Email can't be blank";
    } else if (!isEmail(formData.email)) {
        errors.email = "Please enter a valid email";
    }

    if (isEmpty(formData.password)) {
        errors.password = "Password can't be blank";
    }  else if (isContainWhiteSpace(formData.password)) {
        errors.password = "Password should not contain white spaces";
    } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
        errors.password = "Password's length must between 6 to 16";
    }

    if (isEmpty(errors)) {
        return true;
    } else {
        return errors;
    }
}

login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState(''); 
  let response = fetch("http://localhost:3000/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify([email, password])
  }).then(res => {
    let refreshToken = null;
    response.headers.forEach((value, header) => {
        if (header === 'refresh_token') {
            refreshToken = value;
        }
    });
    console.log("Logged in")
    localStorage.setItem("token", refreshToken);
    this.setState({isLoggedIn :true})
    
  });
}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="text" name="email" placeholder="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick="login">
            Login
          </button>
        </div>
      </div>
    );
  }
}
