import React from "react";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-header">
        <h1>Livy Login</h1>
      </div>
      <div className="group">
        <div class="input-container">
          <input placeholder="Username" class="input-field" type="text" />
          <label for="input-field" class="input-label">
            Username
          </label>
          <span class="input-highlight"></span>
        </div>

        <div class="input-container">
          <input placeholder="Password" class="input-field" type="password" />
          <label for="input-field" class="input-label">
            Password
          </label>
          <span class="input-highlight"></span>
        </div>
      </div>
      <div className="login-footer pt-5">
        <button>Kirim</button>
      </div>
    </div>
  );
};

export default LoginPage;
