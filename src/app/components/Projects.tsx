import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Smartphone, TrendingUp, Database, Activity } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      icon: Smartphone,
      title: "App de Gestão de Insumos",
      description:
        "Aplicativo analítico para simulação de demanda e monitoramento de preços em tempo real.",
      image:
        "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      technologies: ["Python", "Streamlit", "Pandas", "APIs REST"],
      highlights: [
        "Simulador de demanda baseado em histórico",
        "Sistema de alertas de variação de preços",
        "Integração com múltiplas bases de dados",
        "Interface intuitiva para usuários não-técnicos",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Dashboard Analítico Estratégico",
      description:
        "Plataforma de BI para identificação de clientes e produtos que representam 80% do faturamento (Análise de Pareto).",
      image:
        "https://img.freepik.com/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg?t=st=1768616761~exp=1768620361~hmac=18a79e08cac38c3f36d301f6da0d4a9e9ddb223e7a083679f05b9f9fe2110fda&w=1060",
      technologies: ["Power BI", "SQL", "DAX", "Python"],
      highlights: [
        "Análise de Pareto para produtos e clientes",
        "KPIs de performance em tempo real",
        "Identificação de padrões de vendas",
        "Insights acionáveis para tomada de decisão",
      ],
    },
    {
      id: 3,
      icon: Database,
      title: "Pipeline ETL Multi-Fonte",
      description:
        "Pipeline robusto integrando dados de WhatsApp, Bling ERP e Google Sheets em um data warehouse unificado.",
      image: "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "APIs"],
      highlights: [
        "Extração automatizada de 3+ fontes de dados",
        "Transformação e limpeza de dados",
        "Orquestração de workflows com Airflow",
        "Data warehouse centralizado e confiável",
      ],
    },
    {
      id: 4,
      icon: Activity,
      title: "Consultoria em Governança de Dados",
      description:
        "Projeto de diagnóstico e implementação de governança de dados para Secretaria de Saúde.",
      image:
        "https://img.freepik.com/free-photo/cropped-colleagues-generating-business-ideas_1098-19137.jpg?t=st=1768621171~exp=1768624771~hmac=81003407afe9a3a897e0744084159e89005153bb7694c42b05d0a68b21a5dd1b&w=1060",
      technologies: ["Data Governance", "SQL", "Python", "Documentation"],
      highlights: [
        "Auditoria de qualidade de dados",
        "Definição de políticas de governança",
        "Otimização de processos e redução de custos",
        "Capacitação de equipes internas",
      ],
    },
  ];

  return (
    <section
      id="projetos"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Projetos
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Seleção de projetos que demonstram minhas habilidades em engenharia e análise de dados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 hover:shadow-2xl transition-all border border-slate-700 hover:border-cyan-500/50 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-700">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <project.icon
                      className="text-cyan-400"
                      size={20}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl text-slate-100 leading-tight">{project.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm text-cyan-400 mb-2 font-semibold">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-xs sm:text-sm text-cyan-400 mb-2 font-semibold">Destaques:</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
