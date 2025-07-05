import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Quote Generator</h1>
      <QuoteForm />
    </main>
  );
}
