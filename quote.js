const quotes = [
    "Believe you can and you're halfway there.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "It always seems impossible until it’s done.",
    "You are never too old to set another goal or to dream a new dream.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only person you are destined to become is the person you decide to be."
    
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  