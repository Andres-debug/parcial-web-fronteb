import React, { useState, useEffect } from "react";
import andres from '../../assets/image1.png'
import './Home.css';


import UserService from "../../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
    <div class="card" >
  <img src="https://i.morioh.com/2020/01/15/6640aca6fdbd.jpg" class="image" />
  <div class="card-body text-card">
    <p class="card-text">{content}</p>
  </div>
  <p className="text-card">  Este es el parcial presentado por Andres Felipe Diaz Monsalve de un Login y Registro usando NodeJS con Express y ReactJS con axios y JWT</p>
  <img src={andres} class="image" />
</div>
</>

  );
};

export default Home;