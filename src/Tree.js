import React, { useState } from 'react';
import './styles.css';

function Tree() {
  const [showFirstAnimation, setShowFirstAnimation] = useState(true);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [questionStage, setQuestionStage] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);
  const [showUploadWarning, setShowUploadWarning] = useState(false);
  const [waitingMessage, setWaitingMessage] = useState(false);
  const [waitingDisabled, setWaitingDisabled] = useState(false); // لتعطيل الزر عند الضغط عليه

  const tasks = [
    { 
      name: 'غسل الصحون', 
      questions: [
        { question: 'هل ترغب في غسل الصحون بمفردك؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل غسل الصحون باستخدام الماء البارد أو الدافئ؟', options: ['بارد', 'دافئ'] },
        { question: 'هل تفضل غسل الصحون بعد العشاء مباشرة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل غسل الصحون باستخدام الإسفنجة أو القماش؟', options: ['إسفنجة', 'قماش'] },
        { question: 'هل تفضل غسل الصحون في المطبخ أم في الخارج؟', options: ['المطبخ', 'الخارج'] },
        { question: 'هل تحب أن تستخدم المنظفات أم الماء فقط؟', options: ['منظفات', 'ماء فقط'] },
      ]
    },
    { 
      name: 'تنظيف الغرفة', 
      questions: [
        { question: 'هل تفضل أن تبدأ بتنظيم سريرك أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل أن تنظف أرضية الغرفة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تحب أن تبدأ التنظيف من الجوانب أو الوسط؟', options: ['جوانب', 'وسط'] },
        { question: 'هل تحب الاستماع إلى الموسيقى أثناء تنظيف الغرفة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل استخدام المنظف الكيميائي أو الطبيعي؟', options: ['كيميائي', 'طبيعي'] },
        { question: 'هل تفضل ترتيب الأدوات أولاً؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'تنظيم الألعاب', 
      questions: [
        { question: 'هل تفضل ترتيب الألعاب في العلب أم على الرفوف؟', options: ['علب', 'رفوف'] },
        { question: 'هل تحب أن تبدأ بتنظيم الألعاب الكبيرة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل ترتيب الألعاب حسب النوع أو الحجم؟', options: ['نوع', 'حجم'] },
        { question: 'هل تحب وضع كل لعبة في مكان معين؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل ترتيب الألعاب من الأعلى إلى الأسفل أم العكس؟', options: ['من الأعلى للأسفل', 'العكس'] },
        { question: 'هل تفضل أن تبدأ بتنظيم الألعاب الجديدة أولاً؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'ترتيب الكتب', 
      questions: [
        { question: 'هل تفضل ترتيب الكتب حسب الحجم أم اللون؟', options: ['حجم', 'لون'] },
        { question: 'هل تحب ترتيب الكتب الأبجدية؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل وضع الكتب في رفوف أو خزانة مغلقة؟', options: ['رفوف', 'خزانة مغلقة'] },
        { question: 'هل تفضل ترتيب الكتب اليومية أو الأسبوعية أولاً؟', options: ['يومية', 'أسبوعية'] },
        { question: 'هل تفضل وضع الكتب على مستوى النظر أم في الأسفل؟', options: ['مستوى النظر', 'في الأسفل'] },
        { question: 'هل تحب أن يكون هناك فواصل بين الكتب أم لا؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'سقاية النباتات', 
      questions: [
        { question: 'هل تفضل سقاية النباتات في الصباح أم في المساء؟', options: ['صباحاً', 'مساءً'] },
        { question: 'هل تحب أن تسقي النباتات الكبيرة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل استخدام المياه المعدنية أو مياه الصنبور؟', options: ['معدنية', 'صنبور'] },
        { question: 'هل تفضل استخدام الري بالتنقيط أم الرش؟', options: ['تنقيط', 'رش'] },
        { question: 'هل تفضل سقاية النباتات في فصل الصيف أكثر من الشتاء؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل سقاية النباتات في الأوقات المبكرة أم المتأخرة؟', options: ['مبكرة', 'متأخرة'] },
      ]
    },
    { 
      name: 'تنظيف السيارة', 
      questions: [
        { question: 'هل تفضل تنظيف السيارة من الداخل أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تستخدم ملمع للأثاث داخل السيارة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل استخدام الماء البارد أو الدافئ لتنظيف السيارة؟', options: ['بارد', 'دافئ'] },
        { question: 'هل تحب أن تبدأ بتنظيف الزجاج أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف السيارة في الصباح أم في المساء؟', options: ['صباحاً', 'مساءً'] },
        { question: 'هل تفضل استخدام معدات خاصة لتنظيف السيارة؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'ترتيب المطبخ', 
      questions: [
        { question: 'هل تفضل ترتيب الأطباق قبل تنظيف الأسطح؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل أن تنظف الحوض أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل استخدام الممسحة أو الإسفنجة في تنظيف الأسطح؟', options: ['ممسحة', 'إسفنجة'] },
        { question: 'هل تحب أن ترتب الثلاجة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف أسطح المطبخ أولاً أم الأرضية؟', options: ['أسطح', 'أرضية'] },
        { question: 'هل تفضل تنظيف المطبخ يومياً أم أسبوعياً؟', options: ['يومياً', 'أسبوعياً'] },
      ]
    },
    { 
      name: 'مساعدة في تحضير الطعام', 
      questions: [
        { question: 'هل تحب تحضير الطعام بنفسك؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل الطهي باستخدام الزيت أو الزبدة؟', options: ['زيت', 'زبدة'] },
        { question: 'هل تحب أن تستخدم أدوات خاصة للطهي؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل الطهي باستخدام الخضار أو اللحوم؟', options: ['خضار', 'لحوم'] },
        { question: 'هل تفضل تحضير الأطباق السريعة أم الوجبات المطهوة ببطء؟', options: ['سريعة', 'ببطء'] },
        { question: 'هل تحب أن تضيف التوابل إلى طعامك؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'تنظيف النوافذ', 
      questions: [
        { question: 'هل تفضل تنظيف النوافذ من الداخل أم الخارج أولاً؟', options: ['داخل', 'خارج'] },
        { question: 'هل تفضل استخدام المكنسة أم المسح باليد؟', options: ['مكنسة', 'يد'] },
        { question: 'هل تحب استخدام منتج تنظيف معين؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف النوافذ في الصباح أم المساء؟', options: ['صباحاً', 'مساءً'] },
        { question: 'هل تحب تنظيف النوافذ باستخدام أداة خاصة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف النوافذ على دفعات أم دفعة واحدة؟', options: ['دفعات', 'واحدة'] },
      ]
    },
    { 
      name: 'غسل الملابس', 
      questions: [
        { question: 'هل تفضل غسل الملابس باليد أم بالغسالة؟', options: ['يد', 'غسالة'] },
        { question: 'هل تفضل غسل الملابس البيضاء أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل استخدام مسحوق غسيل سائل أم مسحوق؟', options: ['سائل', 'مسحوق'] },
        { question: 'هل تفضل تنظيف الملابس باستخدام ماء بارد أو دافئ؟', options: ['بارد', 'دافئ'] },
        { question: 'هل تفضل غسل الملابس الجديدة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل غسل الملابس معاً أم فصلاً حسب اللون؟', options: ['معاً', 'فصلاً'] },
      ]
    },
    { 
      name: 'ترتيب الملابس في الخزانة', 
      questions: [
        { question: 'هل تفضل ترتيب الملابس حسب اللون أم النوع؟', options: ['لون', 'نوع'] },
        { question: 'هل تفضل ترتيب الملابس داخل أكياس أم على الأرفف؟', options: ['أكياس', 'أرفف'] },
        { question: 'هل تفضل ترتيب الملابس الصيفية أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل الطي أو تعليق الملابس؟', options: ['طي', 'تعليق'] },
        { question: 'هل تحب أن يكون هناك مساحة بين الملابس أم لا؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل ترتيب الملابس حسب الاستخدام أم حسب الفصول؟', options: ['استخدام', 'فصول'] },
      ]
    },
    { 
      name: 'ترتيب الأدوات المكتبية', 
      questions: [
        { question: 'هل تفضل ترتيب الأقلام أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل ترتيب الأوراق حسب الموضوع أم التاريخ؟', options: ['موضوع', 'تاريخ'] },
        { question: 'هل تحب استخدام صناديق أو علب للأدوات؟', options: ['صناديق', 'علب'] },
        { question: 'هل تفضل ترتيب الأدوات المكتبية في الجوارير أم على المكتب؟', options: ['جوارير', 'مكتب'] },
        { question: 'هل تحب أن تكون الأدوات المكتبية مرتبة بطريقة محددة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل ترتيب الأدوات المكتبية يومياً أم أسبوعياً؟', options: ['يومياً', 'أسبوعياً'] },
      ]
    },
    { 
      name: 'التنظيف باستخدام المكنسة الكهربائية', 
      questions: [
        { question: 'هل تفضل استخدام المكنسة الكهربائية يومياً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف الأرضيات أولاً أم السجاد؟', options: ['أرضيات', 'سجاد'] },
        { question: 'هل تحب تنظيف الأماكن الصغيرة مثل الزوايا؟', options: ['نعم', 'لا'] },
        { question: 'هل تحب أن تستخدم المكنسة ذات الفوهة المتعددة؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف الأماكن المتسخة أولاً؟', options: ['نعم', 'لا'] },
        { question: 'هل تفضل تنظيف الأماكن الكبرى أولاً؟', options: ['نعم', 'لا'] },
      ]
    },
    { 
      name: 'التسوق لشراء البقالة', 
      questions: [
        { question: 'هل تفضل التسوق بنفسك أم مع أحد؟', options: ['بنفسك', 'مع أحد'] },
        { question: 'هل تحب التسوق باستخدام القوائم أم بطريقة عشوائية؟', options: ['قوائم', 'عشوائي'] },
        { question: 'هل تفضل دفع الفاتورة نقداً أم باستخدام البطاقة؟', options: ['نقداً', 'بطاقة'] },
        { question: 'هل تفضل شراء البقالة من المتاجر الكبيرة أم الصغيرة؟', options: ['كبيرة', 'صغيرة'] },
        { question: 'هل تفضل التسوق في الصباح أم المساء؟', options: ['صباحاً', 'مساءً'] },
        { question: 'هل تفضل التسوق في الأيام العادية أم في العطلات؟', options: ['عادية', 'عطلات'] },
      ]
    },
    { 
      name: 'إعداد الغداء أو العشاء', 
      questions: [
        { question: 'هل تفضل إعداد وجبة واحدة أم وجبتين؟', options: ['واحدة', 'اثنين'] },
        { question: 'هل تفضل الطهي باستخدام اللحم أو الخضار؟', options: ['لحم', 'خضار'] },
        { question: 'هل تحب إضافة التوابل إلى طعامك؟', options: ['نعم', 'لا'] },
        { question: 'هل تحب استخدام وصفات جديدة أم تقليدية؟', options: ['جديدة', 'تقليدية'] },
        { question: 'هل تفضل تناول الطعام بسرعة أم ببطء؟', options: ['بسرعة', 'ببطء'] },
        { question: 'هل تفضل الطهي لأشخاص كثر أم لأفراد قليلين؟', options: ['كثيرون', 'قليلون'] },
      ]
    },
    { 
      name: 'الذهاب للتسوق لشراء الملابس', 
      questions: [
        { question: 'هل تفضل التسوق في المحلات الكبيرة أم الصغيرة؟', options: ['كبيرة', 'صغيرة'] },
        { question: 'هل تفضل شراء الملابس بالألوان الزاهية أم الداكنة؟', options: ['زاهية', 'داكنة'] },
        { question: 'هل تفضل التسوق باستخدام القوائم أم بطريقة عشوائية؟', options: ['قوائم', 'عشوائي'] },
        { question: 'هل تحب شراء الملابس الجديدة أم المستعملة؟', options: ['جديدة', 'مستعملة'] },
        { question: 'هل تفضل التسوق بمفردك أم مع الأصدقاء؟', options: ['مفردك', 'مع الأصدقاء'] },
        { question: 'هل تفضل ملابس الكاجوال أم الرسمية؟', options: ['كاجوال', 'رسمية'] },
      ]
    }
  ];
  
  const handleStartClick = () => {
    setShowFirstAnimation(false);
    setShowSecondAnimation(true);
    setShowTasks(true);
    setWaitingMessage(false); // إخفاء رسالة الانتظار عند الضغط على "هيا ننطلق"
  };

  const handleTaskClick = (task) => {
    setCurrentTask(task);
    setShowQuestions(true);
    setQuestionStage(0);
  };

  const handleQuestionAnswer = (answer) => {
    if (questionStage < currentTask.questions.length - 1) {
      setQuestionStage(questionStage + 1);
    } else {
      setTaskCompleted(true);
    }
  };

  const handleUploadVideo = (event) => {
    setVideoUploaded(true);
    setShowUploadWarning(false);
    event.preventDefault();
  };

  const handleNextTask = () => {
    setTaskCompleted(false);
    setShowQuestions(false);
    setCurrentTask(null);
    setQuestionStage(0);
    setVideoUploaded(false);
  };

  const handleCompleteTree = () => {
    if (!videoUploaded) {
      setShowUploadWarning(true);
    } else {
      setShowThirdAnimation(true);
    }
  };

  const handleWaitClick = () => {
    setWaitingMessage(true);
    setWaitingDisabled(true); // تعطيل زر الانتظار بعد الضغط عليه
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    padding: '20px',
  };

  const gifStyle = {
    width: '300px',
    marginBottom: '20px',
  };

  const speechBubbleStyle = {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px 25px',
    color: '#333',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const triangleStyle = {
    position: 'absolute',
    top: '50%',
    left: '-15px',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderRight: '15px solid #fff',
  };

  return (
    <div style={containerStyle}>
      {/* الأنميشن الأول */}
      {showFirstAnimation && (
        <div>
          <img src="animation1.gif" alt="Cartoon GIF" style={gifStyle} />
          <div style={speechBubbleStyle}>
            مرحبا هل أنت مستعد لبناء شجرتك الأولى؟
            <div style={triangleStyle}></div>
            <button className="button-50" onClick={handleStartClick}>
              🏋 نعم هيا ننطلق
            </button>
            <button 
              className="button-50" 
              onClick={handleWaitClick}
              disabled={waitingDisabled} // تعطيل الزر بعد الضغط عليه
            >
              😔 أفضل الانتظار قليلاً
            </button> 

           <a href="https://docs.google.com/forms/d/e/1FAIpQLSezf_Hk7ce8NLo876j2p7K61DUNyDeCp4sedh2qbtC-pqtYqQ/viewform?usp=header"> <button className="button-50">
              اكتشف خدمة شجرتنا
            </button> </a>
          </div>
        </div>
      )}

      {/* رسالة الانتظار */}
      {waitingMessage && (
        <div style={speechBubbleStyle}>
          حسناً، نحن في انتظارك! 🕒
        </div>
      )}

      {/* الأنميشن الثاني */}
      {showSecondAnimation && !showThirdAnimation && (
        <div>
          <img src="animation2.gif" alt="Building Tree Animation" style={gifStyle} />
          <div style={speechBubbleStyle}>
            هيا نبدأ في بناء شجرتك!
            <div style={triangleStyle}></div>
          </div>
        </div>
      )}

      {/* الأنميشن الثالث بعد رفع الفيديو */}
      {showThirdAnimation && videoUploaded && (
        <div>
          <img src="animation3.gif" alt="Tree Completion Animation" style={gifStyle} />
          <div style={speechBubbleStyle}>
            تم اكتمال المهمه! 🏡
            <div style={triangleStyle}></div>
          </div>
        </div>
      )}

      {/* عرض المهام المنزلية */}
      {showTasks && !currentTask && (
        <div>
          <h2>ما هي المهمة المنزلية التي تريد القيام بها؟</h2>
          {tasks.map((task) => (
            <button key={task.name} className="button-50" onClick={() => handleTaskClick(task)}>
              {task.name}
            </button>
          ))}
        </div>
      )}

      {/* عرض الأسئلة للمهمة الحالية */}
      {showQuestions && currentTask && !taskCompleted && (
        <div>
          <h2>{currentTask.questions[questionStage].question}</h2>
          {currentTask.questions[questionStage].options.map((option, index) => (
            <button key={index} className="button-50" onClick={() => handleQuestionAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}

      {/* رفع الفيديو بعد إتمام المهمة */}
      {taskCompleted && !videoUploaded && (
        <div>
          <h2>تم إتمام المهمة بنجاح! الآن قم برفع الفيديو واكمل بناء الشجرة:</h2>
          <form onSubmit={handleUploadVideo}>
            <input type="file" accept="video/*" />
            <button type="submit" className="button-50">رفع الفيديو</button>
          </form>
          {showUploadWarning && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              <strong>لا يمكنك إكمال الشجرة دون رفع الفيديو!</strong>
            </div>
          )}
        </div>
      )}

      {/* إظهار أنميشن بعد رفع الفيديو */}
      {videoUploaded && !showThirdAnimation && (
        <div>
          <h2>تم رفع الفيديو بنجاح! الشجرة تكتمل الآن...</h2>
          <button className="button-50" onClick={handleCompleteTree}>
             الانهاء
          </button>
        </div>
      )}

      {/* رسالة عند إتمام جميع المهام */}
      {videoUploaded && showThirdAnimation && (
        <div>
          <h2>مبروك! الشجرة تكتمل 🎉</h2>
          <button className="button-50" onClick={handleNextTask}>
            انتقل إلى المهمة التالية
          </button>
        </div>
      )}
    </div>
  );
  
}

export default Tree;
