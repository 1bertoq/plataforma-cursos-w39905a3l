import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, BookOpen, User, PlayCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { courses } from '@/data/courses'
import { cn } from '@/lib/utils'

const LEVEL_COLORS: Record<string, string> = {
  Iniciante: 'bg-green-500 text-white',
  Intermediário: 'bg-yellow-500 text-white',
  Avançado: 'bg-red-500 text-white',
}

const courseModules = [
  {
    id: 'm1',
    title: 'Módulo 1: Introdução',
    lessons: [
      { id: 'l1', title: 'Aula 1: Conceitos Básicos', duration: '15min' },
      { id: 'l2', title: 'Aula 2: Visão Geral', duration: '20min' },
      { id: 'l3', title: 'Aula 3: Primeiros Passos', duration: '18min' },
    ],
  },
  {
    id: 'm2',
    title: 'Módulo 2: Aprofundamento',
    lessons: [
      { id: 'l4', title: 'Aula 4: Ferramentas Essenciais', duration: '25min' },
      { id: 'l5', title: 'Aula 5: Práticas Recomendadas', duration: '30min' },
      { id: 'l6', title: 'Aula 6: Estudos de Caso', duration: '22min' },
    ],
  },
  {
    id: 'm3',
    title: 'Módulo 3: Prática e Conclusão',
    lessons: [
      { id: 'l7', title: 'Aula 7: Projeto Prático - Parte 1', duration: '40min' },
      { id: 'l8', title: 'Aula 8: Projeto Prático - Parte 2', duration: '45min' },
      { id: 'l9', title: 'Aula 9: Revisão e Próximos Passos', duration: '15min' },
    ],
  },
]

export default function CourseDetails() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id) || courses[0]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 w-full space-y-8 animate-fade-in-up">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para os cursos
      </Link>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden relative shadow-lg group">
        <img
          src={course.imageUrl.replace('300/200', '600/400')}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none px-3 py-1 text-sm shadow-sm">
              {course.academy}
            </Badge>
            <Badge
              className={cn(
                'border-none px-3 py-1 text-sm font-semibold shadow-sm',
                LEVEL_COLORS[course.level] || 'bg-gray-500 text-white',
              )}
              variant="secondary"
            >
              {course.level}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-2 leading-tight drop-shadow-md max-w-3xl">
            {course.title}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 font-medium bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>Prof. João Silva</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>3h 50min total</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>{course.lessons} aulas</span>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Sobre o Curso</h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base md:text-lg">
              {course.description} Este curso foi desenvolvido para profissionais que desejam
              aprimorar suas habilidades e se destacar no mercado corporativo. Com uma abordagem
              prática e focada em resultados, você aprenderá conceitos fundamentais e avançados,
              através de exemplos reais e exercícios interativos. Ao final, você estará preparado
              para aplicar todo o conhecimento adquirido no seu dia a dia profissional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
              Conteúdo do Curso
            </h2>
            <Accordion type="multiple" defaultValue={['m1']} className="w-full space-y-4">
              {courseModules.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="border border-gray-200 rounded-xl px-2 overflow-hidden bg-white shadow-sm transition-all hover:border-blue-200"
                >
                  <AccordionTrigger className="hover:no-underline px-4 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left pr-4">
                      <span className="font-semibold text-gray-900 text-lg">{module.title}</span>
                      <span className="text-sm text-gray-600 font-medium mt-2 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full">
                        {module.lessons.length} aulas
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 pt-3 border-t border-gray-100">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson.id}
                          className="flex items-center justify-between group p-3 rounded-lg hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            <span className="text-gray-700 font-medium">{lesson.title}</span>
                          </div>
                          <span className="text-xs text-gray-500 font-medium bg-white border border-gray-200 px-2.5 py-1 rounded-md shadow-sm">
                            {lesson.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900 font-poppins">Gratuito</div>
              <p className="text-sm text-gray-500 font-medium">Incluso no seu plano corporativo</p>
            </div>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-all rounded-xl"
            >
              Iniciar Curso
            </Button>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <h3 className="font-poppins font-semibold text-gray-900">Este curso inclui:</h3>
              <ul className="space-y-3">
                {[
                  'Acesso vitalício ao conteúdo',
                  'Materiais de apoio em PDF',
                  'Certificado de conclusão',
                  'Suporte do instrutor',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
