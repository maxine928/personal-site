import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  sticky?: boolean
}

export default function Header({ sticky = false }: HeaderProps) {
  const location = useLocation()

  return (
    <header
      className={`w-full bg-cream border-b border-royal-blue/10 ${
        sticky ? 'sticky top-0 z-50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
        <nav className="flex items-center gap-10">
          <Link
            to="/"
            className={`font-heading text-base tracking-wide transition-colors ${
              location.pathname === '/'
                ? 'text-royal-blue'
                : 'text-charcoal hover:text-royal-blue'
            }`}
          >
            Home
          </Link>
          <Link
            to="/thoughts"
            className={`font-heading text-base tracking-wide transition-colors ${
              location.pathname === '/thoughts'
                ? 'text-royal-blue'
                : 'text-charcoal hover:text-royal-blue'
            }`}
          >
            Thoughts
          </Link>
        </nav>
      </div>
    </header>
  )
}
