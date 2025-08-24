import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div id="profile-card">
      <img src={user?.avatar} alt="" />
      <div id="profile-details">
        <span id="user-name">{user?.name}</span>
      </div>
      <button id="operation"
        onClick={async () => {
          navigate(`/edit-profile`);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default ProfileCard;
