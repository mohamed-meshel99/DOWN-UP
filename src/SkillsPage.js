import React, { useState } from 'react';
import CleaningTeeth from './CleaningTeeth';  // صفحة تنظيف الأسنان
import Shoelace from './Shoelace';            // صفحة ربط الحذاء
import Cooking from './Cooking';              // صفحة الطهي البسيط

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // حالة لتحديد المهارة المختارة

  const handleSkillSelection = (skill) => {
    setSelectedSkill(skill); // تعيين المهارة المختارة
  };

  return (
    <div>
      {/* عرض الكروت فقط إذا لم يتم اختيار أي مهارة */}
      {!selectedSkill && (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', padding: '40px' }}>
          {/* كارد تنظيف الأسنان */}
          <div className="skill-card" style={cardStyle}>
            <div style={imgPlaceholderStyle}>
              <img src="/غسيل الاسنان.jpg" alt="تنظيف الأسنان" style={imgStyle} />
            </div>
            <h3 style={{ textAlign: 'center', fontSize: '20px' }}>تنظيف الأسنان</h3>
            <button className="button-50" onClick={() => handleSkillSelection('cleaning-teeth')}>تعلم كيفية تنظيف الأسنان</button>
          </div>

          {/* كارد ربط الحذاء */}
          <div className="skill-card" style={cardStyle}>
            <div style={imgPlaceholderStyle}>
              <img src="/ربط الذاء.jpg" alt="ربط الحذاء" style={imgStyle} />
            </div>
            <h3 style={{ textAlign: 'center', fontSize: '20px' }}>ربط الحذاء</h3>
            <button className="button-50" onClick={() => handleSkillSelection('shoelace')}>تعلم كيفية ربط الحذاء</button>
          </div>

          {/* كارد الطهي البسيط */}
          <div className="skill-card" style={cardStyle}>
            <div style={imgPlaceholderStyle}>
              <img src="/الطهي.jpeg" alt="الطهي البسيط" style={imgStyle} />
            </div>
            <h3 style={{ textAlign: 'center', fontSize: '20px' }}>الطهي البسيط</h3>
            <button className="button-50" onClick={() => handleSkillSelection('cooking')}>تعلم أساسيات الطهي</button>
          </div>

        </div>
      )}

      {/* عرض صفحة المهارة بناءً على الاختيار */}
      {selectedSkill === 'cleaning-teeth' && <CleaningTeeth />}
      {selectedSkill === 'shoelace' && <Shoelace />}
      {selectedSkill === 'cooking' && <Cooking />}
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '15px',
  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  padding: '30px',
  textAlign: 'center',
  transition: 'transform 0.3s',
  cursor: 'pointer',
  width: '300px',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const imgPlaceholderStyle = {
  height: '200px',  
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  marginBottom: '15px',
  overflow: 'hidden',
};

export default SkillsPage;
