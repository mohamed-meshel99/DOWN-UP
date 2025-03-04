import React from 'react';

const FriedEggs = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>كيفية طهي البيض المقلي</h1>

      {/* الفيديو الأول */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/cook/اشعال النار.mp4"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>اشعال النار</p>
      </div>

      {/* الفيديو الثاني */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/cook/ومن ثم نضع المقلاه.mp4"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>ومن ثم نضع المقلاه</p>
      </div>

      {/* الفيديو الثالث */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/cook/ومن ثم نضع بعض الزيت.mp4"
          title="Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>ومن ثم نضع بعض الزيت</p>
      </div>

      {/* الفيديو الرابع */}
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src="/cook/ثم نكسر البيض ونضع قليل من الملح.mp4"
          title="Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={descriptionStyle}>ثم نكسر البيض ونضع قليل من الملح</p>
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

export default FriedEggs;
