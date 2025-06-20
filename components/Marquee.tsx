"use client";
import { useEffect, useState } from 'react';

export default function Marquee() {
  const [timeGreetings, setTimeGreetings] = useState<string[]>([]);
  const [userLanguage, setUserLanguage] = useState('');

  useEffect(() => {
    // Get user's browser language
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    setUserLanguage(browserLang);
  }, []);

  // Language mapping for highlighting
  const languageMap = {
    'en': ['Hello', 'Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night'],
    'hi': ['नमस्ते', 'सुप्रभात', 'शुभ दोपहर', 'शुभ संध्या', 'शुभ रात्रि'],
    'te': ['నమస్కారం', 'శుభోదయం', 'శుభ మధ్యాహ్నం', 'శుభ సాయంత్రం', 'శుభరాత్రి'],
    'ja': ['こんにちは', 'おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい'],
    'fr': ['Bonjour', 'Bonjour', 'Bon après-midi', 'Bonsoir', 'Bonne nuit'],
    'es': ['Hola', 'Buenos días', 'Buenas tardes', 'Buenas noches', 'Buenas noches'],
    'it': ['Ciao', 'Buongiorno', 'Buon pomeriggio', 'Buona serata', 'Buonanotte'],
    'ko': ['안녕하세요', '좋은 아침', '안녕하세요', '안녕하세요', '안녕히 주무세요'],
    'pt': ['Olá', 'Bom dia', 'Boa tarde', 'Boa noite', 'Boa noite'],
    'ru': ['Привет', 'Доброе утро', 'Добрый день', 'Добрый вечер', 'Спокойной ночи'],
    'de': ['Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
    'ta': ['வணக்கம்', 'காலை வணக்கம்', 'மதிய வணக்கம்', 'மாலை வணக்கம்', 'இரவு வணக்கம்'],
    'ml': ['നമസ്കാരം', 'സുപ്രഭാതം', 'ഉച്ച നമസ്കാരം', 'സായാഹ്ന നമസ്കാരം', 'ശുഭ രാത്രി'],
    'sa': ['नमस्कारः', 'सुप्रभातम्', 'शुभमध्याह्नम्', 'शुभसन्ध्या', 'शुभरात्रिः'],
    'kn': ['ನಮಸ್ಕಾರ', 'ಶುಭೋದಯ', 'ಶುಭ ಮಧ್ಯಾಹ್ನ', 'ಶುಭ ಸಂಜೆ', 'ಶುಭ ರಾತ್ರಿ']
  };

  // Multilingual greetings
  const greetings = [
    "Hello", "नमस्ते", "నమస్కారం", "வணக்கம்",
    "നമസ്കാരം", "नमस्कारः", "ನಮಸ್ಕಾರ", "こんにちは", "Bonjour", "Hola", 
    "Ciao", "안녕하세요", "Olá", "Привет", "Hallo"
  ];

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setTimeGreetings([
        "Good Morning", "सुप्रभात", "శుభోదయం","காலை வணக்கம்",
        "സുപ്രഭാതം", "सुप्रभातम्", "ಶುಭೋದಯ", "おはようございます", 
        "Bonjour", "Buenos días", "Buongiorno", "좋은 아침", 
        "Bom dia", "Доброе утро", "Guten Morgen" 
      ]);
    } else if (hour >= 12 && hour < 17) {
      setTimeGreetings([
        "Good Afternoon", "शुभ दोपहर", "శుభ మధ్యాహ్నం", "மதிய வணக்கம்",
        "ഉച്ച നമസ്കാരം", "शुभमध्याह्नम्", "ಶುಭ ಮಧ್ಯಾಹ್ನ", "こんにちは", 
        "Bon après-midi", "Buenas tardes", "Buon pomeriggio", "안녕하세요", 
        "Boa tarde", "Добрый день", "Guten Tag" 
      ]);
    } else if (hour >= 17 && hour < 21) {
      setTimeGreetings([
        "Good Evening", "शुभ संध्या", "శుభ సాయంత్రం", "மாலை வணக்கம்",
        "സായാഹ്ന നമസ്കാരം", "शुभसन्ध्या", "ಶುಭ ಸಂಜೆ", "こんばんは", 
        "Bonsoir", "Buenas noches", "Buona serata", "안녕하세요", 
        "Boa noite", "Добрый вечер", "Guten Abend"
      ]);
    } else {
      setTimeGreetings([
        "Good Night", "शुभ रात्रि", "శుభరాత్రి",  "இரவு வணக்கம்",
        "ശുഭ രാത്രി", "शुभरात्रिः", "ಶುಭ ರಾत್ರಿ", "おやすみなさい", 
        "Bonne nuit", "Buenas noches", "Buonanotte", "안녕히 주무세요", 
        "Boa noite", "Спокойной ночи", "Gute Nacht"
      ]);
    }
  }, []);

  const getHighlightClass = (greeting: string) => {
    const userLangGreetings = languageMap[userLanguage as keyof typeof languageMap] || languageMap['en'];
    return userLangGreetings.includes(greeting) 
      ? 'text-black font-medium' 
      : 'text-gray-400';
  };

  return (
    <div className="w-full overflow-hidden font-aileron">
      <div className="relative flex overflow-x-hidden bg-white border-y-2 border-dashed border-gray-200">
        <div className="animate-marquee-rtl whitespace-nowrap py-3">
          {greetings.map((greeting, index) => (
            <span 
              key={index} 
              className={`mx-4 text-2xl font-light tracking-wide transition-colors duration-300 ${getHighlightClass(greeting)}`}
            >
              {greeting}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2-rtl whitespace-nowrap py-3">
          {greetings.map((greeting, index) => (
            <span 
              key={index} 
              className={`mx-4 text-2xl font-light tracking-wide transition-colors duration-300 ${getHighlightClass(greeting)}`}
            >
              {greeting}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden bg-gray-50 border-b-2 border-dashed border-gray-200">
        <div className="animate-marquee-ltr whitespace-nowrap py-2">
          {timeGreetings.map((greeting, index) => (
            <span 
              key={index} 
              className={`mx-8 text-xl tracking-wider transition-colors duration-300 ${getHighlightClass(greeting)}`}
            >
              {greeting}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2-ltr whitespace-nowrap py-2">
          {timeGreetings.map((greeting, index) => (
            <span 
              key={index} 
              className={`mx-8 text-xl tracking-wider transition-colors duration-300 ${getHighlightClass(greeting)}`}
            >
              {greeting}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}