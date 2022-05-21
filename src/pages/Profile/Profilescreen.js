import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../util/firebase";
import { signOut } from "firebase/auth";
import Navbar from "../../components/Navbar/Navbar";
import "./Profilescreen.css";

const Profilescreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="profile"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <button
                onClick={() => signOut(auth)}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
