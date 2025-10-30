export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <div className="text-sm text-gray-500">Total Questions Practiced</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="border rounded-md p-4">
          <div className="text-sm text-gray-500">Accuracy</div>
          <div className="text-2xl font-bold">—</div>
        </div>
        <div className="border rounded-md p-4">
          <div className="text-sm text-gray-500">Streak</div>
          <div className="text-2xl font-bold">0 days</div>
        </div>
      </div>
    </div>
  );
}


