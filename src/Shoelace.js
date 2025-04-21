import React from 'react';

const Shoelace = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>كيفية ربط الحذاء</h1>

      {/* الفيديو الأول */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/sho/التقاطع.mp4"
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>اولا التقاطع</p>
      </div>

      {/* الفيديو الثاني */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/sho/قلب.mp4"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>قلب</p>
      </div>

      {/* الفيديو الثالث */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/sho/اذن.mp4"
          title="Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>اذن ارنب</p>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '20px auto',
  maxWidth: '800px',
};

const headerStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};

const videoContainerStyle = {
  marginBottom: '30px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const descriptionStyle = {
  marginTop: '10px',
  fontSize: '16px',
  color: '#555',
};

export default Shoelace;
