import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = '/' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/news', label: 'News' },
    { href: '/hall-of-fame', label: 'Hall of Fame' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
          
          {/* Logo / Wordmark */}
          <a
            href="/"
            className="text-foreground hover:text-muted-foreground transition-colors duration-150"
            aria-label="Competition&Community Home"
          >
            <span className="font-logo font-semibold text-xl md:text-2xl tracking-tight leading-none">
              Competition&Community
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${currentPath === item.href ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 text-sm ${
                      currentPath === item.href
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    } transition-colors duration-150`}
                  >
                    {item.label}
                  </a>
                ))}
                
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Spacer to offset fixed header height */}
      <div aria-hidden className="h-16" />
    </>
  );
}
