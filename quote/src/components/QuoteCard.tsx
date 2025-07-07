import { useState } from "react";
import "./global.css";

type QuoteCardProps = {
  quote: string;
  color: string;
};

export default function QuoteCard({ quote, color }: QuoteCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(quote);
      setCopied(true);
      
      // Reset the "copied" state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={`card border border-base-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl min-h-[200px] cursor-pointer relative ${color}`}
      onClick={handleCopyClick}
    >
      <div className="card-body flex items-center justify-center text-center p-6 h-full">
        <p className="text-xl italic font-semibold leading-relaxed text-center break-words hyphens-auto">
          {quote}
        </p>
      </div>
      
      {/* Success notification */}
      {copied && (
        <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
          Quote copied to clipboard!
        </div>
      )}
      
      {/* Copy icon hint */}
      <div className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
        <svg 
          className="w-5 h-5 text-gray-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
          />
        </svg>
      </div>
    </div>
  );
}