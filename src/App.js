import React, { useState, useEffect } from 'react';
import ArabicPage from './ArabicPage';
import EnglishPage from './EnglishPage';
import SkillsPage from './SkillsPage';
import ParentZone from './ParentZone';
import Tree from './Tree';
// import ChatPage from './ChatPage';
import HomePage from './HomePage'; 
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // الصفحة الافتراضية

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page);
  };

  return (
    <div>
      <nav className="nav-bar">
        <img
          src="downup.png"
          alt="Down Up Home"
          className="logo"
          onClick={() => handlePageChange('home')}
        />

        <div className="nav-buttons-container">
          <button
            className="nav-button"
            onClick={() => handlePageChange('arabic')}
          >
            الحروف العربية
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange('english')}
          >
            English letters
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange('skills')}
          >
            المهارات الحياتية
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange('another-page')}
          >
            مجتمع الاباء
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange('tree')}
          >
            هيا نبني شجرة
          </button>
          {/* <button
            className="nav-button"
            onClick={() => handlePageChange('chat')}
          >
            دردشة
          </button> */}
        </div>
      </nav>

      {/* Pages */}
      <div>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'arabic' && <ArabicPage />}
        {currentPage === 'english' && <EnglishPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'another-page' && <ParentZone />}
        {currentPage === 'tree' && <Tree />}
        {/* {currentPage === 'chat' && <ChatPage />} */}
      </div>
    </div>
  );
}

export default App;
