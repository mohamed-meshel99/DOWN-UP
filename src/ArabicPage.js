import React, { useState } from "react";
import './styles.css'; // استدعاء ملف CSS

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const AudioChecker = () => {
  const [isListening, setIsListening] = useState(null);
  const [results, setResults] = useState({});
  const [rotatedLetter, setRotatedLetter] = useState(null);
  const [spokenWords, setSpokenWords] = useState({});

  // قائمة الحروف مع مكان روابط الفيديوهات
  const arabicLetters = [
    { letter: "ا", video: "/arbic/ااااااااا.mp4" },
    { letter: "ب", video: "/arbic/ببببببب.mp4" },
    { letter: "ت", video: "/arbic/ت ت ت ت.mp4" },
    { letter: "ث", video: "/arbic/ثثثثثثث.mp4" },
    { letter: "ج", video: "/arbic/ججججججججججج.mp4" },
    { letter: "ح", video: "/arbic/حححححح.mp4" },
    { letter: "خ", video: "/arbic/خخخخخخ.mp4" },
    { letter: "د", video: "/arbic/ددددددددددد.mp4" },
    { letter: "ذ", video: "/arbic/ذذذذذذذذذ.mp4" },
    { letter: "ر", video: "/arbic/رررررررر.mp4" },
    { letter: "ز", video: "/arbic/ززززززززز.mp4" },
    { letter: "س", video: "/arbic/سسسسسس.mp4" },
    { letter: "ش", video: "/arbic/شششششش.mp4" },
    { letter: "ص", video: "/arbic/صصصصص.mp4" },
    { letter: "ض", video: "/arbic/ضضضضض.mp4" },
    { letter: "ط", video: "/arbic/طططط.mp4" },
    { letter: "ظ", video: "/arbic/ظظظظظ.mp4" },
    { letter: "ع", video: "/arbic/عععععع.mp4" },
    { letter: "غ", video: "/arbic/غغغغغغغغ.mp4" },
    { letter: "ف", video: "/arbic/ففففففف.mp4" },
    { letter: "ق", video: "/arbic/ققققققققق.mp4" },
    { letter: "ك", video: "/arbic/ككككككككك.mp4" },
    { letter: "ل", video: "/arbic/للللللل.mp4" },
    { letter: "م", video: "/arbic/مممممممم.mp4" },
    { letter: "ن", video: "/arbic/نننننننننن.mp4" },
    { letter: "ه", video: "/arbic/هههههههه.mp4" },
    { letter: "و", video: "/arbic/ووووووووو.mp4" },
    { letter: "ي", video: "/arbic/ييييييييييي.mp4" },
  ];

  const startListening = (letter) => {
    if (!SpeechRecognition) {
      alert("متصفحك لا يدعم التعرف على الصوت");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ar-EG";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(letter);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.trim();
      const isCorrect = speechResult.includes(letter);

      setResults((prev) => ({
        ...prev,
        [letter]: isCorrect,
      }));

      setSpokenWords((prev) => ({
        ...prev,
        [letter]: speechResult,
      }));

      setIsListening(null);
    };

    recognition.onerror = (event) => {
      console.error("حدث خطأ أثناء التعرف على الصوت:", event.error);
      setIsListening(null);
    };

    recognition.onend = () => {
      setIsListening(null);
    };

    recognition.start();
  };

  const handleRotate = (letter) => {
    setRotatedLetter(letter);
    setTimeout(() => {
      setRotatedLetter(null);
    }, 2500);
  };

  return (
    <div className="body">
      <h1>تعلم نطق الحروف</h1>

      <div className="container">
        {arabicLetters.map((item, index) => (
          <div key={index} className="letter-container">
            {/* عرض الحرف مع aria-label */}
            <div
              onClick={() => handleRotate(item.letter)}
              className={`letter ${rotatedLetter === item.letter ? 'rotated' : ''}`}
              aria-label={`حرف ${item.letter}`} // إضافة aria-label
            >
              {item.letter}
            </div>

            {/* عرض الفيديو */}
            <div className="video-container">
              <video src={item.video} controls />
            </div>

            {/* زر التسجيل */}
            <button
              className="button-50"
              onClick={() => startListening(item.letter)}
              disabled={isListening !== null}
            >
              {isListening === item.letter ? "جاري التسجيل..." : "ابدأ التسجيل"}
            </button>

            {/* نتيجة التحقق */}
            {results[item.letter] !== undefined && (
              <p className={`result-message ${results[item.letter] ? 'correct' : 'incorrect'}`}>
                {results[item.letter] ? "✅ صحيح" : "❌ غير صحيح"}
              </p>
            )}

            {/* الكلمة المنطوقة */}
            {spokenWords[item.letter] && (
              <p className="spoken-words">
                {`نطقت: "${spokenWords[item.letter]}"`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioChecker;
