import React, { useState } from "react";
import './styles.css';

// تعريف SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const EnglishLettersPage = () => {
  const [isListening, setIsListening] = useState(null);
  const [results, setResults] = useState({});
  const [rotatedLetter, setRotatedLetter] = useState(null);
  const [spokenWords, setSpokenWords] = useState({});

  // قائمة الحروف الإنجليزية
  const englishLetters = [
    { letter: "A", video: "/eng/aaaa.mp4" },
    { letter: "B", video: "/eng/bbbb.mp4" },
    { letter: "C", video: "/eng/cccccc.mp4" },
    { letter: "D", video: "/eng/ddddddd.mp4" },
    { letter: "E", video: "/eng/eeeeeee.mp4" },
    { letter: "F", video: "/eng/ffffff.mp4" },
    { letter: "G", video: "/eng/gggggggg.mp4" },
    { letter: "H", video: "/eng/hhhhhhh.mp4" },
    { letter: "I", video: "/eng/iiiiiiiiii.mp4" },
    { letter: "J", video: "/eng/jjjjjjjjjjjj.mp4" },
    { letter: "K", video: "/eng/kkkkkkkkkkk.mp4" },
    { letter: "L", video: "/eng/llllllllllll.mp4" },
    { letter: "M", video: "/eng/mmmmm.mp4" },
    { letter: "N", video: "/eng/nnnnnnnn.mp4" },
    { letter: "O", video: "/eng/oooooo.mp4" },
    { letter: "P", video: "/eng/pppppppp.mp4" },
    { letter: "Q", video: "/eng/qqqqqqq.mp4" },
    { letter: "R", video: "/eng/rrrrrrr.mp4" },
    { letter: "S", video: "/eng/ssssss.mp4" },
    { letter: "T", video: "/eng/ttttttt.mp4" },
    { letter: "U", video: "/eng/uuuuuu.mp4" },
    { letter: "V", video: "/eng/vvvvvvv.mp4" },
    { letter: "W", video: "/eng/wwwww.mp4" },
    { letter: "X", video: "/eng/xxxxxxxxx.mp4" },
    { letter: "Y", video: "/eng/yyyyyyy.mp4" },
    { letter: "Z", video: "/eng/zzzzzz.mp4" },
  ];

  const startListening = (letter) => {
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(letter);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.trim().toUpperCase();
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
      console.error("Error during speech recognition:", event.error);
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Check Your Pronunciation of English Letters</h1>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {englishLetters.map((item, index) => (
          <div
            key={index}
            className="letter-container"
          >
            <div
              onClick={() => handleRotate(item.letter)}
              className={`letter ${rotatedLetter === item.letter ? "rotated" : ""}`}
            >
              {item.letter}
            </div>

            <div className="video-container">
              <video
                src={item.video}
                controls
              ></video>
            </div>

            <button
              className="button-50"
              onClick={() => startListening(item.letter)}
              disabled={isListening !== null}
              style={{
                backgroundColor: isListening === item.letter ? "#999" : undefined,
                cursor: isListening !== null ? "not-allowed" : "pointer",
              }}
            >
              {isListening === item.letter ? "Recording..." : "Start Recording"}
            </button>

            {results[item.letter] !== undefined && (
              <p className={`result-message ${results[item.letter] ? "correct" : "incorrect"}`}>
                {results[item.letter] ? "✅ Correct" : "❌ Incorrect"}
              </p>
            )}

            {spokenWords[item.letter] && (
              <p className="spoken-words">
                {`You said: "${spokenWords[item.letter]}"`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishLettersPage;
