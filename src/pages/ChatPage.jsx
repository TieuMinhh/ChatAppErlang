import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import UserList from "../components/UserList";
import "../styles/ChatPage.css"

const App = () => {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hello World!" },
    { user: "Bob", text: "Hello!" },
  ]);
  const [users, setUsers] = useState([
    { username: "Alice", lastMessage: "Hi there!" },
    { username: "Bob", lastMessage: "Hello!" },
    { username: "Charlie", lastMessage: "Good morning!" },
  ]);
  const [username] = useState("Minh");  // Giả sử Bob là người dùng hiện tại

  const handleSendMessage = (text) => {
    const newMessage = { user: username, text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Cập nhật tin nhắn gần nhất cho người gửi
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === username
          ? { ...user, lastMessage: text }
          : user
      )
    );
  };

  return (
    <div className="chat_pages">
      <h1>Chat Application</h1>
      <div className="chat-container">
        <UserList users={users} />  {/* Hiển thị danh sách người dùng */}
        <ChatBox
          messages={messages}
          onSendMessage={handleSendMessage}
          username={username}  // Truyền tên người dùng
        />
      </div>
    </div>
  );
};

export default App;
