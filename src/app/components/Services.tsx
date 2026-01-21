import image_a151008b64d394882d31ed15022c342b7ef90388 from 'figma:asset/a151008b64d394882d31ed15022c342b7ef90388.png';
import image_e78c4bc42bed5fee2f0ddb5792292361b4b01686 from "figma:asset/e78c4bc42bed5fee2f0ddb5792292361b4b01686.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Smartphone, TrendingUp, Database, Activity } from "lucide-react";

export function Services() {
  const services = [
    {
      id: 1,
      icon: Smartphone,
      title: "Aplicativos de Dados",
      description:
        "Aplicativos analíticos customizados para otimizar suas decisões estratégicas.",
      image:
        "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      features: [
        "Simulador de demanda em tempo real",
        "Alerta de variação de preços",
        "Sistemas de cadastro e consulta",
        "Integração com seus sistemas atuais",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Análises de Dados",
      description:
        "Dashboards estratégicos que revelam insights valiosos do seu negócio.",
      image:
        "https://img.freepik.com/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg?t=st=1768616761~exp=1768620361~hmac=18a79e08cac38c3f36d301f6da0d4a9e9ddb223e7a083679f05b9f9fe2110fda&w=1060",
      features: [
        "Análise de top clientes e produtos",
        "Identificação de padrões de vendas",
        "Métricas de desempenho em tempo real",
        
      ],
    },
    {
      id: 3,
      icon: Database,
      title: "Integrações de Dados",
      description:
        "Pipeline de dados robusto que integram múltiplos registros em uma única fonte de verdade.",
      image: "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      features: [
        "Automação de coleta e limpeza de dados",
        "Combinação de múltiplas fontes de dados, como Whatsapp, GoogleSheets, Hubspot e outros.",
      ],
    },
    {
      id: 4,
      icon: Activity,
      title: "Consultoria Estratégica de Dados",
      description:
        "Diagnóstico completo sobre os desafios e soluções, trazendo clareza e segurança na tomada de decisão com dados.",
      image:
        "https://img.freepik.com/free-photo/cropped-colleagues-generating-business-ideas_1098-19137.jpg?t=st=1768621171~exp=1768624771~hmac=81003407afe9a3a897e0744084159e89005153bb7694c42b05d0a68b21a5dd1b&w=1060",
      features: [
        "Análise de qualidade dos dados",
        "Otimização de performance e custos",
        "Governança de dados"
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Serviços
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Soluções completas de dados para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 hover:shadow-2xl transition-all border border-slate-700 hover:border-cyan-500/50 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-700">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {service.id === 3 && (
                  <div className="absolute top-0 left-0 right-0 h-12 bg-[#f5f5f5]" />
                )}
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <service.icon
                      className="text-cyan-400"
                      size={20}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl text-slate-100 leading-tight">{service.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}