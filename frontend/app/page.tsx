export default function Page() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">SAT Math AI — Practice MVP</h1>
        <p className="text-gray-600 max-w-2xl">
          Focused on practice-based learning. Generate SAT-style math questions, get immediate feedback,
          and track your progress — all locally.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a className="border rounded-lg p-4 hover:bg-gray-50" href="/practice">
          <h3 className="font-semibold">Start Practicing →</h3>
          <p className="text-sm text-gray-600">One question at a time with instant feedback.</p>
        </a>
        <a className="border rounded-lg p-4 hover:bg-gray-50" href="/chat">
          <h3 className="font-semibold">Ask AI Tutor →</h3>
          <p className="text-sm text-gray-600">Chat with the tutor about math problems.</p>
        </a>
        <a className="border rounded-lg p-4 hover:bg-gray-50" href="/dashboard">
          <h3 className="font-semibold">View Dashboard →</h3>
          <p className="text-sm text-gray-600">Quick overview of your practice sessions.</p>
        </a>
      </div>
    </div>
  );
}


