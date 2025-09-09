"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
  { label: "Admin Dashboard", href: "/dashboards/admin" },
  { label: "HR Dashboard", href: "/dashboards/hr" }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-6">ERP</h2>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href} className="mb-3">
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded 
                  ${pathname === item.href ? "bg-gray-700" : "hover:bg-gray-600"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
