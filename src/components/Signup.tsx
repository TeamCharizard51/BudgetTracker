import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  return (
    <div id='wrapper'>
    <hr/>
    <div id='outerBox'>
      <div id='signupBox'>
      <p><strong>New Account</strong></p>
        <form method='POST' action='/api/createAccount'>
          <input type="text" placeholder="Enter a username" name="username" required></input> 
          <input type="password" placeholder="Enter a password" name="password"required></input>
          <button type="submit" id='loginlink'>Create Account</button>
        </form>
        {/* <Link to='/app'>
            <button>Login</button>
        </Link> */}
      </div>
      <div id='signupBox'>
          <Link to='/' id='signuplink'>
              <p>Go Back</p>
          </Link>
      </div>
    </div>
    <hr/>
  </div>
  )
}

export default Signup;