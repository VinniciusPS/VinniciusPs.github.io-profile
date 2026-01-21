import { GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Sistemas de Computação",
      institution: "Universidade Federal Fluminense (UFF)",
      // period: "2021 - 2025",
      description: "Formação tecnológica em fundamentos computacionais, algorítimicos e matemáticos.",
      icon: GraduationCap,
    },
  ];

  const additionalCourses = [
    "Data Science em Produção - Comunidade DS",
    "Data Engineering - DeepLearningAI",
    "Machine Learning with Apache Spark - Databricks",
    "Power BI Avançado - ProEng",
  ];

  return (
    <section id="educacao" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-cyan-400">
            Educação
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Formação acadêmica e educação continuada em dados e tecnologia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Formal Education */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl text-slate-100 mb-6 sm:mb-8">Formação Acadêmica</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg flex-shrink-0 h-fit">
                    <edu.icon className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl text-slate-100 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-base sm:text-lg text-cyan-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 mb-3">
                      {edu.period}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Courses */}
          <div>
            <h3 className="text-xl sm:text-2xl text-slate-100 mb-6 sm:mb-8">Cursos Complementares</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {additionalCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-900 rounded-lg border border-slate-700"
                >
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-slate-300 leading-snug">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
