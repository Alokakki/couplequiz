class QuizSystem {
  constructor() {
    this.questions = [
      {
        "question": "जब तुमने मुझे पहली बार देखा, तो क्या सोचा?",
        "answer": ""
      },
      {
        "question": "अगर हमें किसी मूवी कपल की तरह एक्ट करना पड़े, तो कौन से होंगे?",
        "answer": ""
      },
      {
        "question": "हमारी पहली मुलाकात पर तुम्हारा दिल कितनी तेज़ धड़क रहा था? (1 से 10 तक)",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हें अभी 30 सेकंड में एक्साइट कर सकती/सकता, तो क्या करोगे?",
        "answer": ""
      },
      {
        "question": "मुझे खुश करने का सबसे आसान तरीका क्या है?",
        "answer": ""
      },
      {
        "question": "हमारे रिश्ते को तीन शब्दों में कैसे बयां करोगे?",
        "answer": ""
      },
      {
        "question": "अगर हमें किसी सीक्रेट जगह पर जाना हो, तो वो कौन सी होगी?",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हें अभी सिर्फ एक जगह किस कर सकती/सकता, तो तुम कौन सी चुनोगे?",
        "answer": ""
      },
      {
        "question": "हमारी अब तक की सबसे हॉट मेमोरी कौन सी है?",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हारे कान में कुछ सेक्सी फुसफुसाऊं, तो तुम क्या चाहोगे कि मैं कहूँ?",
        "answer": ""
      },
      {
        "question": "हमारी सबसे यादगार डेट कौन सी थी और क्यों?",
        "answer": ""
      },
      {
        "question": "कौन सा गाना तुम्हें हमारी याद दिलाता है?",
        "answer": ""
      },
      {
        "question": "अगर हम 10 साल पहले मिले होते, तो क्या तब भी साथ होते?",
        "answer": ""
      },
      {
        "question": "हमारे रिश्ते की सबसे खास बात क्या है?",
        "answer": ""
      },
      {
        "question": "तुम्हें मेरे साथ बिताया हुआ कौन सा लम्हा सबसे ज्यादा प्यारा लगता है?",
        "answer": ""
      },
      {
        "question": "अगर मैं उदास रहूँ, तो तुम मुझे कैसे हंसाओगे?",
        "answer": ""
      },
      {
        "question": "हमारी सबसे पहली फोटोग्राफ देखकर तुम्हें क्या महसूस होता है?",
        "answer": ""
      },
      {
        "question": "अगर हमें सिर्फ एक-दूसरे के साथ कहीं भाग जाना हो, तो तुम कहाँ जाना चाहोगे?",
        "answer": ""
      },
      {
        "question": "हमें साथ में कौन सा नया एडवेंचर ट्राय करना चाहिए?",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हें एक सीक्रेट मैसेज भेजूं, तो तुम चाहोगे कि उसमें क्या लिखा हो?",
        "answer": ""
      },
      {
        "question": "तुम्हें मेरे किस पार्ट को छूना सबसे ज्यादा पसंद है?",
        "answer": ""
      },
      {
        "question": "मुझे धीरे-धीरे टीज़ करना ज्यादा अच्छा लगेगा या एकदम पैशनेट बन जाना?",
        "answer": ""
      },
      {
        "question": "अगर हमें एक नई जगह ट्राय करनी हो, तो वो कौन सी होगी?",
        "answer": ""
      },
      {
        "question": "तुम्हें बेडरूम में ज्यादा कंट्रोल पसंद है या सरप्राइज़?",
        "answer": ""
      },
      {
        "question": "तुम्हें किस चीज़ से सबसे ज्यादा टर्न-ऑन होता है?",
        "answer": ""
      },
      {
        "question": "हमारी सबसे इंटेंस और हॉट नाइट कौन सी थी?",
        "answer": ""
      },
      {
        "question": "बेडरूम में तुम्हारा फेवरेट मूड – रोमांटिक, फन, या वाइल्ड?",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हें सिर्फ अपनी सांसों से टीज़ करूँ, तो तुम क्या करोगे?",
        "answer": ""
      },
      {
        "question": "मुझे तुम्हें एक मिनट के लिए हाथ नहीं लगाने देना चाहिए, लेकिन तुम्हें मुझे छूना है – तुम क्या करोगे?",
        "answer": ""
      },
      {
        "question": "अगर हम रोल-प्ले करें, तो तुम कौन सा कैरेक्टर बनना चाहोगे?",
        "answer": ""
      },
      {
        "question": "अगर हम किसी पब्लिक प्लेस में होते और तुम्हें रोमांटिक मूड आ जाए, तो तुम क्या करोगे?",
        "answer": ""
      },
      {
        "question": "सबसे सेक्सी चीज़ जो मैंने कभी की है?",
        "answer": ""
      },
      {
        "question": "सबसे वाइल्ड फैंटेसी जो तुम मेरे साथ पूरा करना चाहते हो?",
        "answer": ""
      },
      {
        "question": "तुम्हें ज्यादा पसंद है – लाइट्स ऑन या लाइट्स ऑफ?",
        "answer": ""
      },
      {
        "question": "स्लो और सेंसुअल या फास्ट और पैशनेट – तुम्हारी चॉइस?",
        "answer": ""
      },
      {
        "question": "अगर मैं तुम्हें अभी धीरे-धीरे अपने करीब बुलाऊं, तो तुम्हारी पहली रिएक्शन क्या होगी?",
        "answer": ""
      },
      {
        "question": "अगर हमें बिना बोले कम्युनिकेट करना हो, तो तुम कैसे करोगे?",
        "answer": ""
      },
      {
        "question": "अगर हमें एक पूरा दिन सिर्फ एक-दूसरे को टीज़ करने के लिए मिले, तो सबसे पहले क्या करोगे?",
        "answer": ""
      },
      {
        "question": "अगर मैं अभी तुम्हारे बहुत करीब आ जाऊं और कुछ कहे बिना तुम्हें टीज़ करूँ, तो तुम्हारी पहली रिएक्शन क्या होगी?",
        "answer": ""
      },
      {
        "question": "कोई ऐसी चीज़ जो तुम हमेशा से ट्राय करना चाहते थे लेकिन अब तक नहीं की?",
        "answer": ""
      }
    ];
    
    // Shuffle questions at initialization
    this.shuffleQuestions();
    
    this.currentQuestionIndex = 0;
    this.timer = null;
    this.timeLeft = 30; 
    this.totalTime = 30; 
    
    // DOM Elements
    this.questionText = document.getElementById('question-text');
    this.timeDisplay = document.getElementById('time');
    this.timerProgress = document.getElementById('timer-progress');
    this.nextButton = document.getElementById('next-question');

    // Calculate circle circumference
    this.circumference = 2 * Math.PI * 45; 
    this.timerProgress.style.strokeDasharray = this.circumference;

    // Event Listeners
    this.nextButton.addEventListener('click', () => this.nextQuestion());
    
    // Initialize
    this.displayQuestion();
  }

  // Fisher-Yates shuffle algorithm
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  updateTimerCircle() {
    const progress = this.timeLeft / this.totalTime;
    const offset = this.circumference * (1 - progress);
    this.timerProgress.style.strokeDashoffset = offset;
  }

  displayQuestion() {
    if (this.currentQuestionIndex >= this.questions.length) {
      this.currentQuestionIndex = 0;
    }

    this.questionText.textContent = this.questions[this.currentQuestionIndex].question;
    this.timeLeft = this.totalTime;
    this.timeDisplay.textContent = this.timeLeft;
    this.updateTimerCircle();
    
    if (this.timer) clearInterval(this.timer);
    
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.timeDisplay.textContent = this.timeLeft;
      this.updateTimerCircle();
      
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.nextQuestion();
      }
    }, 1000);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.displayQuestion();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new QuizSystem();
});