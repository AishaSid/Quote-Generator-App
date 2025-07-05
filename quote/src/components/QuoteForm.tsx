"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    console.log("API Response:", data); // <-- add this

    if (res.ok) {
      setQuotes(data.quotes || []);
    } else {
      setError(data.error || "Something went wrong.");
    }
  } catch (err) {
    console.error("Fetch error:", err); // <-- add this
    setError("Failed to connect to the server.");
  }

  setLoading(false);
};


  return (
    <div className="max-w-xl mx-auto space-y-4">
      <Input
        placeholder="Enter a topic (e.g. courage, happiness)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={loading || !topic}>
        {loading ? "Generating..." : "Generate Quotes"}
      </Button>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      {quotes.length > 0 && (
        <div className="mt-6 space-y-3">
          {quotes.map((quote, idx) => (
            <p
              key={idx}
              className="bg-muted p-3 rounded text-muted-foreground italic"
            >
              “{quote}”
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
