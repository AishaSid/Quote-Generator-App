import "./global.css";

type QuoteCardProps = {
  quote: string;
  color: string;
};

export default function QuoteCard({ quote, color }: QuoteCardProps) {
  return (
    <div
      className={`card border border-base-200 shadow-md hover:shadow-lg transition-transform hover:scale-105 rounded-xl min-h-[200px] ${color}`}
    >
      <div className="card-body flex items-center justify-center text-center p-6">
        <p className="text-xl italic font-semibold leading-relaxed">
          “{quote}”
        </p>
      </div>
    </div>
  );
}
