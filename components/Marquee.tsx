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
  };

  const getHighlightClass = (greeting: string) => {
    const userLangGreetings = languageMap[userLanguage as keyof typeof languageMap] || languageMap['en'];
    return userLangGreetings.includes(greeting) 
      ? 'text-black font-medium' 
      : 'text-gray-400';
  };

  // Multilingual greetings
  const greetings = [
    "Hello", "नमस्ते", "నమస్కారం", "こんにちは", "Bonjour", "Hola", 
    "Ciao", "안녕하세요", "Olá", "Привет", "Hallo"
  ];

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setTimeGreetings([
        "Good Morning", "सुप्रभात", "శుभోదయం", "おはようございます", 
        "Bonjour", "Buenos días", "Buongiorno", "좋은 아침", 
        "Bom dia", "Доброе утро", "Guten Morgen"
      ]);
    } else if (hour >= 12 && hour < 17) {
      setTimeGreetings([
        "Good Afternoon", "शुभ दोपहर", "శుभ మధ్యాహ్నం", "こんにちは", 
        "Bon après-midi", "Buenas tardes", "Buon pomeriggio", "안녕하세요", 
        "Boa tarde", "Добрый день", "Guten Tag"
      ]);
    } else if (hour >= 17 && hour < 21) {
      setTimeGreetings([
        "Good Evening", "शुभ संध्या", "శుभ సాయంత్రం", "こんばんは", 
        "Bonsoir", "Buenas noches", "Buona serata", "안녕하세요", 
        "Boa noite", "Добрый вечер", "Guten Abend"
      ]);
    } else {
      setTimeGreetings([
        "Good Night", "शुभ रात्रि", "శుभరాత్రి", "おやすみなさい", 
        "Bonne nuit", "Buenas noches", "Buonanotte", "안녕히 주무세요", 
        "Boa noite", "Спокойной ночи", "Gute Nacht"
      ]);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden font-aileron">
      <div className="relative flex overflow-x-hidden bg-white border-y border-gray-200">
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
      
      <div className="relative flex overflow-x-hidden bg-gray-50 border-b border-gray-200">
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