import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="p-6 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold mb-6">AI Quote Generator</h1>
      <QuoteForm />
    </main>
  );
}
