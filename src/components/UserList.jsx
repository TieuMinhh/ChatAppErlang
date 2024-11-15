import "../styles/UserList.css";

// Dữ liệu giả cho người dùng
const mockUsers = [
  { username: "Alice", status: "Online", avatar: "https://i.pravatar.cc/150?img=1" },
  { username: "Bob", status: "Offline", avatar: "https://i.pravatar.cc/150?img=2" },
  { username: "Charlie", status: "Online", avatar: "https://i.pravatar.cc/150?img=3" },
  { username: "David", status: "Busy", avatar: "https://i.pravatar.cc/150?img=4" },
  { username: "Eve", status: "Online", avatar: "https://i.pravatar.cc/150?img=5" }
];

const UserList = () => {
  return (
    <div className="user-list">
      <h3>Recent Chat</h3>
      <ul>
        {mockUsers.map((user, index) => (
          <li key={index} className="user-item">
            <div className="avatar">
              <img src={user.avatar} alt={user.username} />
            </div>
            <div className="user-info">
              <span className="username">{user.username}</span>
              <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

