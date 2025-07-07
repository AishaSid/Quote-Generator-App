"use client";

import { useState } from "react";
import QuoteCard from "./QuoteCard";
import "./global.css";


const cardColors = [ // Soft coral
  "bg-rose-100 text-rose-800",// Warm peach
  "bg-amber-100 text-amber-800",// Gentle lavender
  "bg-purple-100 text-purple-800",// Fresh mint
  "bg-emerald-100 text-emerald-800",// Sunny buttercream
  "bg-yellow-100 text-yellow-800",// Blush pink
  "bg-pink-100 text-pink-800",// Bubblegum fuchsia
  "bg-fuchsia-100 text-fuchsia-800",// Soft sage
  "bg-green-100 text-green-800",// Creamy apricot
  "bg-orange-100 text-orange-800",// Sky‑inspired contrast (darker blue)
  "bg-blue-100 text-blue-800",
];


export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setQuotes([]);

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      if (res.ok) {
        setQuotes(data.quotes || []);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Failed to connect to the server.");
  }
}


    setLoading(false);
  };

  return (  
    <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-4 px-8 rounded-xl shadow-xl space-y-8">
    
   <div>  </div>
    <div className="text-center space-y-2">
      <h1 className="text-7xl font-bold text-primary">EchoLift</h1>
      <p className="text-sm text-gray-500">✨ Echoing words that lift you up ✨</p>
    </div>

    <div> </div>
    <div> </div>

    <p className="text-sm text-gray-600 pt-10">Enter a topic or keyword</p>

    <div className="flex flex-col sm:flex-row gap-4 pb-5 px-4">
      <input
        type="text"
        placeholder="e.g. Positivity, Motivation, Sunshine"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="
          flex-1
          px-4 py-2
          bg-white/90
          border-1 border-primary
          rounded-lg
          font-medium italic text-base-content
          focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary
          transition-shadow duration-200
          shadow-sm hover:shadow-md
        "
      />

      <button
        onClick={handleSubmit}
        disabled={loading || !topic}
         className="
   w-full sm:w-auto
   flex items-center justify-center gap-2
   px-5 py-2
   bg-gradient-to-r from-blue-400 to-purple-500 text-white
   border-1 border-blue-600
   rounded-lg
   font-medium uppercase tracking-wide
   shadow-md hover:shadow-lg
   transition-all duration-200
   disabled:opacity-50 disabled:cursor-not-allowed
 "
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        ) : (
          "Get Quotes"
        )}
      </button>
    </div>


      {error && (
        <div className="alert alert-error shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {quotes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quotes.map((quote, idx) => (
            <QuoteCard
              key={idx}
              quote={quote}
              color={cardColors[idx % cardColors.length]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
