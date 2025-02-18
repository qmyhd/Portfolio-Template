/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/profile.jpg";

const imageAltText = "Qais Headshot";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height has-background-image">
      <img className="background" src={image} alt="" style={{ width: "52%", marginTop: "4rem" }} />
      <div
        style={{ position: "absolute", top: "4rem", left: "1rem", width: "15rem" }}
        className="name-title name-title-text"
      >
        <h1 style={{ fontSize: "4rem" }}>{name}</h1>
        <h2 style={{ fontSize: "1.9rem" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "4rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
