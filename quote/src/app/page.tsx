import QuoteForm from "@/components/QuoteForm";
import "./global.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#efe0f9] to-[#ffffff] font-sans text-base-content">
  <div className="container mx-auto py-2 px-2">
    <QuoteForm />
  </div>
    </main>
  );
}
