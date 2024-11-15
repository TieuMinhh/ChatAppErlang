import { useState } from "react";
import Message from "./Message";
import "../styles/ChatBox.css";

const ChatBox = ({ messages, onSendMessage, username }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);  // Gửi tin nhắn
      setText("");  // Xóa ô nhập
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message
            key={index}
            user={msg.user}
            text={msg.text}
            isOwnMessage={msg.user === username}  // Kiểm tra tin nhắn của người dùng
          />
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
