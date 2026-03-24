import { Building2, Users, Mail, Phone, MapPin, Target, Lightbulb, Trophy } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8 animate-fade-in pb-16">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Sobre a CorpLearn
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Nossa missão é capacitar colaboradores por meio de educação corporativa contínua,
          promovendo excelência e inovação diária.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
          <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
            <Target className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Missão</h3>
          <p className="text-gray-600">
            Impulsionar carreiras através de conhecimento acessível e aplicável ao dia a dia da
            empresa.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
          <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
            <Lightbulb className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Visão</h3>
          <p className="text-gray-600">
            Ser a principal ferramenta de desenvolvimento profissional e atração de talentos da
            organização.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
          <div className="mx-auto bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
            <Trophy className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Valores</h3>
          <p className="text-gray-600">
            Inovação contínua, empatia, foco em resultados e colaboração sem fronteiras.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <Building2 className="h-10 w-10 text-gray-600" />
          </div>
          <div className="space-y-4 flex-1">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Nossa História</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Fundada com a premissa de que o talento interno é o maior ativo de uma empresa, a
              CorpLearn nasceu da necessidade de unificar o treinamento corporativo em uma única
              plataforma intuitiva e acessível. Acreditamos que o conhecimento é a chave para o
              sucesso individual e coletivo, e nosso ambiente de aprendizado reflete essa crença,
              proporcionando autonomia para cada profissional.
            </p>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <Users className="h-10 w-10 text-gray-600" />
          </div>
          <div className="space-y-4 flex-1">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Equipe de RH & Treinamento
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Nossa equipe de especialistas está dedicada a curar, criar e avaliar os melhores
              conteúdos para o seu desenvolvimento. Trabalhamos em parceria com líderes de cada
              setor para garantir que nossos cursos atendam às demandas reais do mercado e os
              desafios estratégicos da empresa. Estamos sempre abertos a feedbacks e sugestões de
              novos temas!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-8 rounded-2xl text-center space-y-4 shadow-lg text-white group cursor-pointer hover:bg-gray-800 transition-colors">
          <Mail className="h-8 w-8 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-lg">E-mail</h3>
          <p className="text-gray-400 font-medium">treinamento@corplearn.com.br</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl text-center space-y-4 shadow-lg text-white group cursor-pointer hover:bg-gray-800 transition-colors">
          <Phone className="h-8 w-8 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-lg">Telefone</h3>
          <p className="text-gray-400 font-medium">(11) 4002-8922</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl text-center space-y-4 shadow-lg text-white group cursor-pointer hover:bg-gray-800 transition-colors">
          <MapPin className="h-8 w-8 text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-lg">Localização</h3>
          <p className="text-gray-400 font-medium">Sede Administrativa, Andar 5</p>
        </div>
      </div>
    </div>
  )
}
