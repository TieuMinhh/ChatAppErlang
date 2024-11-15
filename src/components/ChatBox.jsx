// import { useState, useRef, useEffect } from "react";
// import Message from "./Message";
// import "../styles/ChatBox.css";

// const ChatBox = ({ messages, onSendMessage, username }) => {
//   const [text, setText] = useState("");
//   const messagesEndRef = useRef(null);  // Tham chiếu đến phần tử cuối cùng trong danh sách tin nhắn

//   const handleSend = () => {
//     if (text.trim()) {
//       onSendMessage(text);  // Gửi tin nhắn
//       setText("");  // Xóa ô nhập
//     }
//   };

//   // Cuộn đến tin nhắn cuối khi messages thay đổi
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="chat-box">
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <Message
//             key={index}
//             user={msg.user}
//             text={msg.text}
//             isOwnMessage={msg.user === username}  // Kiểm tra tin nhắn của người dùng
//           />
//         ))}
//         {/* Thêm phần tử "trống" ở cuối để làm mốc cho việc cuộn */}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="input">
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Type a message"
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;


import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import "../styles/ChatBox.css";

const ChatBox = ({ messages, onSendMessage, username }) => {
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);  // Tham chiếu đến phần tử cuối cùng trong danh sách tin nhắn

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);  // Gửi tin nhắn
      setText("");  // Xóa ô nhập
    }
  };

  // Cuộn đến tin nhắn cuối khi messages thay đổi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-item">
            <div className="message-avatar">
              {/* <img src={msg.avatar} alt={msg.user} /> */}
              <img src="https://lienquan.garena.vn/wp-content/uploads/2024/05/b1a3864a554067fd8581d50a6cbd20755d5545baeb2b01.jpg" alt="User Avatar" />
            </div>
            <Message
              user={msg.user}
              text={msg.text}
              isOwnMessage={msg.user === username}  // Kiểm tra tin nhắn của người dùng
            />
          </div>
        ))}
        {/* Thêm phần tử "trống" ở cuối để làm mốc cho việc cuộn */}
        <div ref={messagesEndRef} />
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
