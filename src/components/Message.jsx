import "../styles/Message.css";

const Message = ({ user, text, isOwnMessage }) => {
  return (
    <div className={`message ${isOwnMessage ? "own" : ""}`}>
      <div className="message-content">
        <p className="user">{user}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
