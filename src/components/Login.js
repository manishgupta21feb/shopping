import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  render() {
    return (
      <div className="mid-box">
        <div className="login-tabs">
          <a className="active" href="#">Login</a>
          <a href="#">Create Account</a>
        </div>
        <div className="mid-box-body">
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <div className="input-with-text">
                <Form.Control type="text" />
                <span className="password-show-hide">Show</span>
              </div>
            </Form.Group>
            <Button variant="primary" block>Sign In</Button>{' '}
            <div className="login-link">
              <a href="#">Forgot your password?</a>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login;
