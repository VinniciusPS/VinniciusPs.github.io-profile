import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Smartphone, TrendingUp, Database, Activity } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      icon: Smartphone,
      title: "Aplicativos de Dados",
      description:
        "Aplicativos analíticos customizados para otimizar suas decisões estratégicas.",
      image:
        "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      technologies: ["Python", "Railway", "Pandas", "APIs REST"],
      highlights: [
        "Simulador de demanda baseado em histórico",
        "Sistema de alertas e monitoramento",
        "Dashboards interativos",
        "Sistemas de cadastro e consulta",
        "Integração com seus sistemas existentes",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Análises de Dados",
      description:
        "Análises que revelam insights valiosos do seu negócio.",
      image:
        "https://img.freepik.com/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg?t=st=1768616761~exp=1768620361~hmac=18a79e08cac38c3f36d301f6da0d4a9e9ddb223e7a083679f05b9f9fe2110fda&w=1060",
      technologies: ["Power BI", "Excel", "SQL", "DAX", "Python"],
      highlights: [
        "Análise exploratória de dados (EDA)",
        "Teste e validação de hipóteses",
        "Análise de Pareto para produtos e clientes",
        "Identificação de padrões de vendas",
        "Insights acionáveis para tomada de decisão",
      ],
    },
    {
      id: 3,
      icon: Database,
      title: "Integração de Dados",
      description:
        "Pipeline de dados robusto que integram múltiplos registros em uma única fonte de verdade.",
      image: "https://drive.google.com/thumbnail?id=143iEK35jW2wEMdY0FYqu0NoWGEbOjqV_",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "APIs"],
      highlights: [
        "Extração automatizada de múltiplas fontes de dados",
        "Transformação e limpeza de dados",
        "Orquestração de workflows",
        "Data warehouse centralizado e confiável",
      ],
    },
    {
      id: 4,
      icon: Activity,
      title: "Consultoria em Governança de Dados",
      description:
        "Diagnóstico e implementação das melhores práticas para o seu negócio.",
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
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Projetos
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Seleção de projetos aplicados em cenários reais de dados e produto
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
