'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Botão Hambúrguer */}
      <button 
        onClick={openMenu}
        className="md:hidden p-2 text-primary focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
        type="button"
        aria-label="Abrir menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50"
          onClick={closeMenu}
        >
          <div 
            className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-semibold text-primary">Menu</h2>
              <button 
                onClick={closeMenu}
                className="p-2 text-primary focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
                type="button"
                aria-label="Fechar menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col p-6 space-y-6">
              <Link 
                href="/" 
                onClick={closeMenu}
                className="text-lg text-primary hover:text-blue-700 border-b border-gray-100 pb-4 transition-colors"
              >
                Principal
              </Link>
              <Link 
                href="/coanfitriao-sao-paulo" 
                onClick={closeMenu}
                className="text-lg text-primary hover:text-blue-700 border-b border-gray-100 pb-4 transition-colors"
              >
                Coanfitrião SP
              </Link>
              <Link 
                href="/blog" 
                onClick={closeMenu}
                className="text-lg text-primary hover:text-blue-700 border-b border-gray-100 pb-4 transition-colors"
              >
                Guia do Anfitrião
              </Link>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WPP || "5511952286097"}?text=${encodeURIComponent("Olá! Gostaria de falar com a Seu Coanfitrião.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-lg text-primary hover:text-blue-700 border-b border-gray-100 pb-4 transition-colors"
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
