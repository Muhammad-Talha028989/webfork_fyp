import React from "react";
import "../styles/About.css"

const About = () => {
  return (
    <div className="container-about" id="About">
      <div className="left">
        <img
          src={
            "https://png.pngtree.com/png-vector/20200428/ourlarge/pngtree-illustration-of-a-man-working-on-a-laptop-png-image_2195561.jpg"
          }
          alt=""
        />
      </div>

      <div className="right">
        <h3>
          WebFork has started its journey with the promise to be the hub of the
          best templates in early 2022. Our creative designers and dedicated
          developers work with the soul to develop high-quality themes and
          templates to take your website to a new height. You can easily pick
          any free responsive bootstrap themes and templates with a fresh design
          and excellent UI/UX from the extensive collection. The team also
          offers premium templates with exclusive support. We love to deliver
          website templates with top-notch design, responsive layout, clean and
          minimal outlook. Along with that, we have taken all the vows to work
          for the betterment and time-efficiency of human beings. The team of
          WebFork cordially invites templates from all around the world from
          which we only choose the best ones. Cause We strongly believe in
          diversity and new ideas. That is why we keep publishing new themes and
          templates per week. Besides, our exotic products made its place even
          in the Bootstrap market. So come and join our venture toward
          efficiency through subscription or merely visiting the site to see
          what offers it has.
        </h3>
        <a href="/#" className="btn"><span>Projects</span></a>
        <a href="/#" className="btn" id="button-margin"><span>Team</span></a>

      </div>
    </div>
  );
};

export default About;
