export default function Navbar({ title }: { title: string }) {
  return (
    <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div>User Menu</div>
    </header>
  )
}
