import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const aboutImage = 
  "https://media.licdn.com/dms/image/v2/D4D03AQEAcfm3TdyQPw/profile-displayphoto-crop_800_800/B4DZvgfuE5JMAM-/0/1768997975369?e=1770854400&v=beta&t=P4qKVIGCeMiVsUCowrrq8FzbKp4a8geHjOVrMvq5iKE"
export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-cyan-400">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
              <p>
                Profissional de dados com mais de 6 anos de experiência transformando dados em inteligência de negócio. Ao longo da carreira, atuei em projetos relevantes para organizações como o Sistema S, Secretarias de Saúde e Controladorias Gerais, colaborando com equipes de excelência e lidando com dados críticos de diferentes contextos e setores.
              </p>
              <p>
                Além disso, atuei por cerca de dois anos como gerente de produto, liderando o lançamento de serviços voltados ao mercado brasileiro. Essa experiência me permitiu compreender de perto os desafios reais dos empreendedores — desde limitações de orçamento até a necessidade de gerar resultados concretos em pouco tempo. Hoje, levo esse olhar para cada projeto, buscando entender profundamente o contexto do cliente antes de propor qualquer solução tecnológica, garantindo que a tecnologia esteja a serviço do negócio, e não o contrário.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-80 lg:w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <ImageWithFallback
                src={aboutImage}
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}