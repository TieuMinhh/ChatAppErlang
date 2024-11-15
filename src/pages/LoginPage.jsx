import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password); // Có thể dùng cho logic xác thực sau này
      navigate("/chat");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Join Chat</button>
    </div>
  );
};

export default LoginPage;
