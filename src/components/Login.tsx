import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
  <div id='wrapper'>
    <hr/>
    <div id='outerBox'>
      <div id='loginBox'>
      <p><strong>Log In</strong></p>
        <form method='POST' action='/api/login'>
          <input type="text" placeholder="Username" name="username" required></input> 
          <input type="password" placeholder="Password" name="password"required></input>
          <button type="submit" id='loginlink'>Login</button>
        </form>
        {/* <Link to='/app'>
            <button>Login</button>
        </Link> */}
      </div>
      <div id='signupBox'>
          <Link to='/createAccount' id='signuplink'>
              <p>Sign up?</p>
          </Link>
      </div>
    </div>
    <hr/>
  </div>
  );
}

export default Login;