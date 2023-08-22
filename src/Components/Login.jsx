import React, { useState } from "react";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Dashbord from "./Dashbord";
import { FetchUser } from "../features/user";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage+" : "+errorCode);
        // ..
      });
  };
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("dashboard");
    // console.log("Success:", values);
    // <FetchUser value={values} />;
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <div className="Container">
      <div className="heading-con">
        <div />

        <div className="form-container">
          <h2>Login Here</h2>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="form"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },

                { type: "email" },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Divider />

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                { whitespace: true },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Divider />

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className="checkbox">Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" onClick={handleSignIn}>
                Login
              </Button>
              
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
