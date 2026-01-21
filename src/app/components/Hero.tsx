import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-100 leading-tight">
            Vinnicius Silva
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-cyan-400 mb-6 font-semibold">
            Engenheiro de Dados | Analytics | Product Manager
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed px-4">
            
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30 text-base sm:text-lg font-semibold"
          >
            Entre em Contato
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}