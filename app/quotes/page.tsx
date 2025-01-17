'use client';

import React, { useState, useEffect } from 'react';
import QuoteCard from '../../components/QuoteCard';
import { Quote } from '@/types';

const QuotesPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string>('All');

  // Fisher-Yates shuffle function
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch('/api/quotes');
      const data = await res.json();

      shuffleArray(data);
      setQuotes(data);
    };

    fetchQuotes();
  }, []);

  const filteredQuotes =
    filteredCategory === 'All'
      ? quotes
      : quotes.filter((quote) => quote.category === filteredCategory);

  return (
    <div className="p-12">
      <h1 className="p-12 pl-4 text-7xl font-aileron">The Quotes</h1>

      <div className="mb-4 px-4 mx-auto">
        <select
          className="p-2 border rounded-md text-black"
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Life">Life</option>
          <option value="Wisdom">Wisdom</option>
          <option value="Relationships">Relationships</option>
          <option value="Peace">Peace</option>
          <option value="Self-Improvement">Self-Improvement</option>
          <option value="Philosophy">Philosophy</option>
        </select>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 px-4 mx-auto">
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote.quote} category={quote.category} />
        ))}
      </div>
    </div>
  );
};

export default QuotesPage;
