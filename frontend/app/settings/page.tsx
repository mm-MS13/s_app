export default function SettingsPage() {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-semibold">Profile & Settings</h1>
      <form className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600">Display Name</label>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input className="w-full border rounded-md px-3 py-2" placeholder="you@example.com" />
        </div>
        <button type="button" className="bg-black text-white rounded-md px-3 py-2">Save</button>
      </form>
    </div>
  );
}


