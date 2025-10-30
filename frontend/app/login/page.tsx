export default function LoginPage() {
  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Login / Sign Up (Mocked)</h1>
      <p className="text-gray-600 text-sm">
        Clerk will be integrated later. For now, this is a mocked page.
      </p>
      <form className="space-y-3">
        <input className="w-full border rounded-md px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded-md px-3 py-2" placeholder="Password" type="password" />
        <button type="button" className="w-full bg-black text-white rounded-md px-3 py-2">Continue</button>
      </form>
    </div>
  );
}


