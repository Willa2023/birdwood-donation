import React from "react";
import home1 from "../assets/img/DSC07161.JPG";

const Home = () => {
  return (
    <div>
      This is the Home page
    <section className="home" id="home">
      <img src={home1} alt="" className="home__img" />

      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Discover Karori</span>
          <h1 className="home__data-title">
          An Exciting New Track<br />
            <b>--- Birdwood Reserve</b><br />
          </h1>
          <h2 className="home__data-title-2" style={{ color: "white" }}> <b>for Karori{" "}</b>
            And <br /><b> New Access to Zealandia!</b> <br />
          </h2>
          <br />
          <a href="#" className="button">
            Explore
          </a>
        </div>

        <div className="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="home__social-link"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </div>

        <div className="home__info">
          <div>
            <span className="home__info-title">Let's make a difference together!</span>
            <a
              href=""
              className="button button--flex button--link home__info-button"
            >
              Donate Now <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img src={home1} alt="" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
