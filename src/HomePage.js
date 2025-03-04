import React from 'react';

function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <header className="home-page">
        <video className="side-video" disablePictureInPicture autoPlay muted loop>
          <source src="homesvg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-content">
          <h1>DOWN UP</h1>
          <h3>World of Entertainment and Fun Learning</h3>
        </div>
      </header>

      <br /><br /><br /><br /><br />
      {/* Shamshoon Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h2 style={{ marginLeft: '50px', textAlign: 'left' }}>
            Entertaining <br /> Learning <br />
            <p>Very exciting experience</p>
          </h2>
          <video
            disablePictureInPicture
            autoPlay
            muted
            loop
            style={{ width: '500px', height: '350px' }}
          >
            <source src="shamshoon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <br /><br /><br /><br />

      {/* Owl Section */}
      <section>
        <div style={{ display: 'flex' }}>
          <video disablePictureInPicture autoPlay muted loop
            style={{ width: '700px', height: '300px'}}>
            <source src="owl.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 style={{ marginLeft: '100px' }}>
            Interactive Animations<br />Funny Learning <br />
            <p>Enjoy playing while learning <br />Never get bored</p>
          </h2>
        </div>
      </section >

      <br /><br /><br /><br />

{/* Snail Section */}
<section>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <h2 style={{ marginLeft: '50px', textAlign: 'left' }}>
      Reward in Every Step<br />
      <p>Don't be lazy <br />And get lots of badges</p>
    </h2>
    <video
      disablePictureInPicture
      autoPlay
      muted
      loop
      style={{ width: '400px', height: '300px'}}
    >
      <source src="snail.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>
      <br /><br /><br /><br />

      {/* Final Section */}
      <center>
        <h3>
          Have fun and learn with Down Up <br /> <br />
        </h3>
        <video disablePictureInPicture autoPlay muted loop
          style={{ width: '700px', height: '500px'}}>
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </center>
    </div >
  );
}

export default HomePage;
