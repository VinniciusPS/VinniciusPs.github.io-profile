import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER ROW */}
        <div className="grid grid-cols-3 items-center py-4 sm:py-5">
          
          {/* LOGO / HOME */}
          <div className="text-xl sm:text-2xl font-semibold text-cyan-400 justify-self-start">
            
          </div>

          {/* DESKTOP NAVIGATION - CENTERED */}
          <nav className="hidden md:flex gap-6 lg:gap-8 justify-self-center">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("educacao")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Educação
            </button>
            <button
              onClick={() => scrollToSection("qualificacoes")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Certificações
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors justify-self-end"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-slate-800 pt-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("educacao")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Educação
            </button>
            <button
              onClick={() => scrollToSection("qualificacoes")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Certificações
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              Contato
            </button>
          </nav>
        )}

      </div>
    </header>
  );
}
