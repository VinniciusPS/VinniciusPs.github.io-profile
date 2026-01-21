import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Engenheiro de Dados",
      company: "Extreme Digital Solutions (EDS)",
      period: "2025 - Presente",
      description: "Desenvolvimento de soluções de dados end-to-end para clientes de diversos setores, incluindo Secretarias de Saúde e Controladorias Gerais.",
      responsibilities: [
        "Desenvolvimento e manutenção de pipelines ETL/ELT",
        "Desenvolvimento e manutenção de APIs REST",
        "Construção de dashboards analíticos",
        "Construção de documentos de especificação técnica (ET)",
        "Modelagem de data warehouses",
      ],
    },
    {
      title: "Gerente de Produtos",
      company: "Colmaker",
      period: "2023 - 2025",
      description: "Gestão e lançamento de serviços digitais Autodesk, com foco em cloud e modelagem 3D para o público brasileiro.",
      responsibilities: [
        "Análise de mercado e Benchmarking",
        "Testes A/B",
        "Gestão de KPIs",
        "Criação de proposta de valor e Go-To-Market",
        "Definição de políticas de dados"
      ],
    },
    {
      title: "Analista de Dados",
      company: "Educational Technology Consulting Brasil",
      period: "2022 - 2023",
      description: "Construção de pipelines de dados e dashboards analíticos para apoiar a tomada de decisão do CS, Marketing e Vendas, bem como a de parceiros educacionais, como Sistema S e outros.",
      responsibilities: [
        "Desenvolvimento de pipelines ETL",
        "Análise exploratória e preditiva",
        "Construção de dashboards analíticos",
        "Definição e gestão de políticas de dados",
        "Treinamento da equipe com boas práticas no uso dos dados",
      ],
    },
    {
      title: "Analista de Dados",
      company: "Rio 2 Formaturas",
      period: "2020 - 2022",
      description: "Construção de pipelines de dados e dashboards analíticos para apoiar a tomada de decisão do setor financeiro e de projetos.",
      responsibilities: [
        "Coleta e tratamento de dados bancários",
        "Elaboração de relatórios de acompanhamento de caixa e receita",
        "Análise descritiva e preditiva de faturamento e inadimplência",
        "Desenvolvimento de interfaces para garantir qualidade dos dados",
      ],
    },
    {
      title: "Desenvolvedor Python",
      company: "Escola Nacional de Concursos",
      period: "2020 - 2022",
      description: "Atuação freelancer no desenvolvimento de solução para otimizar upload de vídeos educacionais.",
      responsibilities: [
        "Extração e análise de dados",
        "Desenvolvimento de código scraping",
        "Desenvolvimento de automação web",
        "Construção de pipeline ETL para batch upload",
      ],
    },
    {
      title: "Estagiário de Economia",
      company: "Rio 2 Formaturas",
      period: "2019 - 2020",
      description: "Suporte à área financeira e de atendimento.",
      responsibilities: [
        "Construção de relatórios de receita mensal e inadimplência",
        "Automação de planilhas",
        "Criação de pipelines ETL",
        "Atualização de dados financeiros do sistema/ERP",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Experiência Profissional
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Trajetória contínua de aproximadamente 7 anos em dados e tecnologia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-600 to-cyan-700"></div>

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:flex absolute left-8 top-6 w-0.5 h-0.5 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-lg shadow-cyan-500/50 -ml-[7px]"></div>
                  </div>

                  {/* Content card */}
                  <div className="md:ml-20 bg-slate-800 rounded-xl p-5 sm:p-6 lg:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0 md:hidden">
                            <Briefcase className="text-cyan-400" size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-base sm:text-lg text-cyan-400 mt-1">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:flex-shrink-0">
                        <span className="text-sm sm:text-base text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-sm sm:text-base text-cyan-400 mb-3 font-semibold">
                        Principais Responsabilidades:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-slate-300"
                          >
                            <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
