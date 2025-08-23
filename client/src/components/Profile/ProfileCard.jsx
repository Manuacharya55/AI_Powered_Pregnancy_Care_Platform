import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const {user} = useAuth();
  const navigate = useNavigate()
  return (
    <div id="profile-card">
      <img src={user?.avatar} alt="" />
      <div id="profile-details">
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </div>
      <div id="operation">
        <button
          onClick={async() => {
            navigate(`/edit-profile`)
          }}
        >
          edit
        </button>
      </div>
    </div>
  )
};

export default ProfileCard;
