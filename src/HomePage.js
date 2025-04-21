import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="home-page">
        {/* <video className="side-video" disablePictureInPicture autoPlay muted loop>
          <source src="homesvg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="text-content">
          <h1>DOWN UP</h1>
          <h3>World of Entertainment and Fun Learning 
            <br />داون اب هو عالم متخصص في التعليم لاصحاب القدرات الخاصة ومتلازمة داون
            عن طريق التعليم بالحواس والعلاج من العند عن طريق وسائل متطورة في العلاج والتعليم لتوفير بيئة مناسبة اكثر لاصحاب القدرات الخاصة </h3>
        </div>
      </header> 

      {/* Shamshoon Section */}
      <section className="section">
        <h2 className="text-left">
          Entertaining <br /> Learning <br />
          <p>Very exciting experience</p>
        </h2>
        <video className="responsive-video sham" disablePictureInPicture autoPlay muted loop>
          <source src="shamshoon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Owl Section */}
      <section className="section">
        <video className="responsive-video owl" disablePictureInPicture autoPlay muted loop>
          <source src="owl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-left">
          Interactive Animations<br />Funny Learning <br />
          <p>Enjoy playing while learning <br />Never get bored</p>
        </h2>
      </section>

      {/* Snail Section */}
      <section className="section">
        <h2 className="text-left">
          Reward in Every Step<br />
          <p>Don't be lazy <br />And get lots of badges</p>
        </h2>
        <video className="responsive-video snail" disablePictureInPicture autoPlay muted loop>
          <source src="snail.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Final Section */}
      <center>
        <h3>Have fun and learn with Down Up</h3>
        <video className="final-video" disablePictureInPicture autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </center>
    </div>
  );
}

export default HomePage;
