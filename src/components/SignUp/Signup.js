import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Signup() {
  return (
    <div className="mid-box">
      <div className="login-tabs">
        <a href="#">Login</a>
        <a className="active" href="#">
          Create Account
        </a>
      </div>
      <div className="mid-box-body">
        <Form>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </div>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <div className="input-with-text">
              <Form.Control type="text" />
              <span className="password-show-hide">Show</span>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" block>
            Create an account
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
}
