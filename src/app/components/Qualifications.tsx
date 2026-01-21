import { Award, ExternalLink } from "lucide-react";

export function Qualifications() {
  const qualifications = [
    {
      title: "Certiprof Scrum Foundation",
      url: "https://www.credly.com/badges/7d17f7f7-dc8a-4f81-91d4-21e78748d692/linked_in_profile",
      issuer: "CertiProf",
    },
    {
      title: "Google Advanced Data Analytics",
      url: "https://www.credly.com/badges/74f02b41-d694-4d03-94d0-2a8c44a31ef6/public_url",
      issuer: "Google",
    },
  ];

  return (
    <section id="qualificacoes" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Qualificações
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Credenciais que validam minhas habilidades técnicas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {qualifications.map((qualification, index) => (
            <a
              key={index}
              href={qualification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
            >
              <div className="p-2.5 sm:p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                <Award className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors leading-snug">
                  {qualification.title}
                </h3>
                <p className="text-sm text-slate-400">{qualification.issuer}</p>
              </div>
              <ExternalLink className="text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}