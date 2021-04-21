import React from "react";
import AuthService from "../../services/auth.service";
import './Profile.css';

const Profile = () => {

  //Esto es data del usuario que se trae del localStorage
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="card" className="card-box">
      <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" className="image"></img>
      <p class="card-text" >
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p className="card-text">
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p className="card-text">
        <strong>Usuario:</strong> {currentUser.username}
      </p>
     <p>
       Bienvenido a tu plataforma de usuario
     </p>
      
    </div>
  );
};

export default Profile;