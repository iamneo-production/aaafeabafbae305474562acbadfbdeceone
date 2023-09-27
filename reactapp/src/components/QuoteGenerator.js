import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quotesData = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    // Add more quotes here
  ];

  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex].quote);
    setAuthor(quotesData[randomIndex].author);
  };

  useEffect(() => {
    displayRandomQuote();
  }, []);

  const handleNewQuoteClick = () => {
    displayRandomQuote();
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote-container">
        <p id="quote" data-testid="quote">
          {quote ? quote : "Loading..."}
        </p>
        <p id="author">{author}</p>
      </div>
      <button id="new-quote" onClick={handleNewQuoteClick}>
        Surprise Me
      </button>
    </div>
  );
};

export default QuoteGenerator;
