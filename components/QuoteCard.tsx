import React from 'react';
import { QuoteCardProps } from '@/types';

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, category }) => {
  return (
    <div className='break-inside-avoid'>
    <div className="p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-all duration-200 bg-white h-fit">
      <p className="text-4xl font-semibold text-gray-800">{quote}</p>
      <span className="text-sm text-gray-500 italic">{category}</span>
    </div>
    </div>
  );
};

export default QuoteCard;
