import { Link, Outlet, useLocation } from 'react-router-dom'
import { BookOpen, Menu } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Meus Cursos', path: '/meus-cursos' },
  { name: 'Sobre', path: '/sobre' },
]

export default function Layout() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">OrionStar Treinamentos</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900',
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-6 w-6 text-gray-700" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <SheetHeader className="text-left mb-6 mt-4">
                    <SheetTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      CorpLearn
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-base font-semibold rounded-xl transition-all',
                          location.pathname === link.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-80">
            <BookOpen className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500 font-medium text-sm">
              CorpLearn © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
