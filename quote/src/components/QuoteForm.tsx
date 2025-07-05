"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateQuotes = async () => {
    setLoading(true);
    setQuotes([]);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      setQuotes(data.quotes || []);
    } catch (err) {
      console.error("Error generating quotes:", err);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Enter a topic (e.g. success)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={generateQuotes} disabled={loading || !topic}>
        {loading ? "Generating..." : "Generate Quotes"}
      </Button>

      {quotes.length > 0 && (
        <div className="mt-4 space-y-2">
          {quotes.map((q, idx) => (
            <p key={idx} className="italic">
              “{q}”
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
