import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Engenheiro de Dados",
      company: "Extreme Digital Solutions (EDS)",
      period: "2025 - Presente",
      description:
        "Desenvolvimento de soluções de dados end-to-end para clientes de diversos setores, incluindo Secretarias de Saúde e Controladorias Gerais.",
      technologies: ["Python", "Java", "Javascript", "SQL", "NoSQL", "Airflow", "dbt", "Grafana", "Docker", "k8", "Oracle Cloud", "AWS Cloud"],
      responsibilities: [
        "Desenvolvimento e manutenção de pipelines ETL/ELT",
        "Desenvolvimento e manutenção de APIs REST",
        "Teste e Deploy de microsserviços em produção",
        "Testes de carga (Load Testing)",
        "Construção de dashboards analíticos",
        "Construção de documentos de especificação técnica (ET)",
        "Modelagem de data warehouses",
      ],
    },
    {
      title: "Gerente de Produtos",
      company: "Colmaker",
      period: "2023 - 2025",
      description:
        "Gestão e lançamento de serviços digitais Autodesk, com foco em cloud e modelagem 3D para o público brasileiro.",
      technologies: ["Excel", "Power BI", "SQL", "Python", "Meta Ads", "GA4", "Azure Cloud"],
      responsibilities: [
        "Análise de mercado e Benchmarking",
        "Testes A/B",
        "Gestão de KPIs",
        "Criação de proposta de valor e Go-To-Market",
        "Definição de políticas de dados",
      ],
    },
    {
      title: "Analista de Dados",
      company: "Educational Technology Consulting Brasil",
      period: "2022 - 2023",
      description:
        "Construção de pipelines de dados e dashboards analíticos para apoiar a tomada de decisão de CS, Marketing e Vendas.",
      technologies: ["Python", "Excel", "Power BI", "SQL", "Azure Power Automate", "Azure Data Factory", "Azure Cloud"],
      responsibilities: [
        "Desenvolvimento de pipelines ETL",
        "Análise exploratória e preditiva",
        "Construção de dashboards analíticos",
        "Definição e gestão de políticas de dados",
        "Treinamento da equipe em boas práticas de dados",
      ],
    },
    {
      title: "Analista de Dados",
      company: "Rio 2 Formaturas",
      period: "2020 - 2022",
      description:
        "Construção de pipelines de dados e dashboards analíticos para apoiar a tomada de decisão financeira e de projetos.",
      technologies: ["Python", "SQL", "Excel", "Power BI", "Javascript"],
      responsibilities: [
        "Coleta e tratamento de dados bancários",
        "Relatórios de caixa e receita",
        "Análise de faturamento e inadimplência",
        "Desenvolvimento de interfaces para qualidade de dados",
      ],
    },
    {
      title: "Desenvolvedor Python",
      company: "Escola Nacional de Concursos",
      period: "2020 - 2022",
      description:
        "Atuação freelancer no desenvolvimento de solução para otimizar upload de vídeos educacionais.",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      responsibilities: [
        "Extração e análise de dados",
        "Desenvolvimento de código scraping",
        "Automação web",
        "Pipeline ETL para batch upload",
      ],
    },
    {
      title: "Estagiário de Economia",
      company: "Rio 2 Formaturas",
      period: "2019 - 2020",
      description: "Suporte à área financeira e de atendimento.",
      technologies: ["Excel", "Power BI", "Python"],
      responsibilities: [
        "Relatórios de receita e inadimplência",
        "Automação de planilhas",
        "Criação de pipelines ETL",
        "Atualização de dados financeiros no ERP",
      ],
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-cyan-400">
            Experiência Profissional
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Trajetória contínua de 6+ anos em dados e tecnologia
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-700"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:flex absolute left-8 top-6">
                  <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-lg shadow-cyan-500/50 -ml-[7px]" />
                </div>

                <div className="md:ml-20 bg-slate-800 rounded-xl p-6 lg:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-semibold">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg text-cyan-400 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="self-start flex-shrink-0 text-sm text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="mb-5">
                    <h4 className="text-xs sm:text-sm text-cyan-400 mb-2 font-semibold">
                      Tecnologias:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsabilidades */}
                  <div>
                    <h4 className="text-sm sm:text-base text-cyan-400 mb-3 font-semibold">
                      Principais Responsabilidades:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm sm:text-base text-slate-300"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{resp}</span>
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
    </section>
  );
}
