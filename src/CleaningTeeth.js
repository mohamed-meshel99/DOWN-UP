import React from 'react';

const CleaningTeeth = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>كيفية تنظيف الأسنان</h1>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>1- امسك بمعجون الأسنان</h2>
        <video controls style={videoStyle}>
          <source src="/teath/وامسك بمعجون.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>2- افتح الغطاء بالإبهام والسبابة</h2>
        <video controls style={videoStyle}>
          <source src="/teath/افتح الغطاء.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>3- ضع الغطاء بجانب حنفية الماء ثم امسك فرشاة الأسنان وضع المعجون على الفرشاة</h2>
        <video controls style={videoStyle}>
          <source src="/teath/اضع الغطاء.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>4- أرجع المعجون بجانب حنفية الماء</h2>
        <video controls style={videoStyle}>
          <source src="/teath/اضع المعجون.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>5- ابدأ بتفريش الأسنان بشكل دائري</h2>
        <video controls style={videoStyle}>
          <source src="/teath/ابدا بالتفريش.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>6- أرجع الفرشاة والمعجون إلى أماكنهم</h2>
        <video controls style={videoStyle}>
          <source src="/teath/اغلاق المعجون.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={stepContainerStyle}>
        <h2 style={stepHeadingStyle}>7- نشف يداك وفمك</h2>
        <video controls style={videoStyle}>
          <source src="/teath/انشف يداي وفهمي.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

// التنسيق للصفحة
const containerStyle = {
  fontFamily: 'Inter, sans-serif',
  backgroundColor: 'rgb(226, 233, 238)',
  lineHeight: '1.6',
  padding: '20px',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
  margin: '30px 0',
};

const stepContainerStyle = {
  margin: '30px auto',
  maxWidth: '800px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const stepHeadingStyle = {
  fontSize: '1.8rem',
  color: '#555',
  marginBottom: '15px',
};

const videoStyle = {
  display: 'block',
  margin: '0 auto',
  width: '100%',
  maxWidth: '700px',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default CleaningTeeth;
