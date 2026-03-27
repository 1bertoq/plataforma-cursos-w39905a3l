import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlayCircle, FileText, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

const courseModules = [
  {
    id: 'm1',
    title: 'Módulo 1: Introdução',
    lessons: [
      {
        id: 'l1',
        title: 'Aula 1: Conceitos Básicos',
        duration: '15min',
        description:
          'Nesta aula introdutória, abordaremos os principais conceitos e fundamentos para iniciar sua jornada de aprendizado de forma sólida e estruturada.',
      },
      {
        id: 'l2',
        title: 'Aula 2: Visão Geral',
        duration: '20min',
        description:
          'Uma visão geral de tudo o que será construído ao longo do curso, apresentando os objetivos e os resultados esperados.',
      },
      {
        id: 'l3',
        title: 'Aula 3: Preparando o Ambiente',
        duration: '12min',
        description:
          'Passo a passo detalhado para configurar seu ambiente de desenvolvimento e garantir que todas as ferramentas necessárias estejam prontas.',
      },
    ],
  },
  {
    id: 'm2',
    title: 'Módulo 2: Aprofundamento',
    lessons: [
      {
        id: 'l4',
        title: 'Aula 4: Estruturas de Dados',
        duration: '25min',
        description:
          'Entendendo como organizar, armazenar e manipular dados de forma eficiente utilizando as melhores práticas do mercado.',
      },
      {
        id: 'l5',
        title: 'Aula 5: Algoritmos Essenciais',
        duration: '30min',
        description:
          'Os algoritmos mais importantes que todo profissional deve conhecer para resolver problemas complexos no dia a dia.',
      },
      {
        id: 'l6',
        title: 'Aula 6: Prática Guiada',
        duration: '45min',
        description:
          'Vamos colocar a mão na massa e construir nosso primeiro projeto completo utilizando tudo o que aprendemos até aqui.',
      },
    ],
  },
  {
    id: 'm3',
    title: 'Módulo 3: Conclusão',
    lessons: [
      {
        id: 'l7',
        title: 'Aula 7: Revisão Geral',
        duration: '15min',
        description:
          'Recapitulando os principais pontos vistos no curso para consolidar o conhecimento adquirido.',
      },
      {
        id: 'l8',
        title: 'Aula 8: Dicas de Mercado',
        duration: '20min',
        description:
          'Como se posicionar profissionalmente, otimizar seu currículo e utilizar o que aprendeu para se destacar no mercado de trabalho.',
      },
      {
        id: 'l9',
        title: 'Aula 9: Encerramento',
        duration: '10min',
        description:
          'Palavras finais do instrutor, informações sobre a emissão do certificado e próximos passos recomendados.',
      },
    ],
  },
]

export default function LessonPlayer() {
  const { id, lessonId } = useParams<{ id: string; lessonId?: string }>()
  const navigate = useNavigate()

  const allLessons = courseModules.flatMap((m) => m.lessons)
  const currentLessonIndex = allLessons.findIndex((l) => l.id === lessonId)
  const currentIndex = currentLessonIndex >= 0 ? currentLessonIndex : 0
  const currentLesson = allLessons[currentIndex]

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  const goToLesson = (lId: string) => {
    navigate(`/curso/${id || '1'}/aula/${lId}`)
  }

  // Find which module contains the current lesson to open the accordion by default
  const currentModuleId =
    courseModules.find((m) => m.lessons.some((l) => l.id === currentLesson.id))?.id ||
    courseModules[0].id

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8 max-w-7xl animate-fade-in-up">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6 min-w-0">
        {/* Mock Video Player */}
        <div className="rounded-xl overflow-hidden bg-black border shadow-sm group relative">
          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center bg-slate-900 cursor-pointer"
          >
            <img
              src={`https://img.usecurling.com/p/1280/720?q=presentation&color=blue`}
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
            />
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-1.5" fill="currentColor" />
            </div>
            {/* Mock Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800/80">
              <div className="h-full bg-blue-600 w-1/3 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
            </div>
          </AspectRatio>
        </div>

        {/* Lesson Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {currentLesson.title}
            </h1>
            <p className="text-muted-foreground font-medium flex items-center gap-2">
              <PlayCircle className="w-4 h-4" />
              Duração: {currentLesson.duration}
            </p>
          </div>

          {/* Lesson Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-semibold"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-semibold"
              >
                Materiais
              </TabsTrigger>
              <TabsTrigger
                value="quiz"
                disabled
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-semibold"
              >
                Quiz
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="pt-6 outline-none">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-foreground/90">
                  {currentLesson.description}
                </p>
                <p className="text-base leading-relaxed text-foreground/90 mt-4">
                  Nesta aula, você aprenderá de forma prática e direta como aplicar estes conceitos
                  no seu dia a dia profissional. Certifique-se de acompanhar o material de apoio,
                  caso disponível, e realizar as anotações necessárias para fixação do conteúdo.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="pt-6 outline-none">
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center border rounded-xl border-dashed bg-muted/30">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Nenhum material disponível</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Não há arquivos complementares em anexo para esta aula no momento. Retorne mais
                  tarde.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t mt-8">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto font-medium"
            disabled={!prevLesson}
            onClick={() => prevLesson && goToLesson(prevLesson.id)}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Aula Anterior
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto font-medium bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!nextLesson}
            onClick={() => nextLesson && goToLesson(nextLesson.id)}
          >
            Próxima Aula
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Course Navigation Sidebar */}
      <div className="w-full lg:w-[360px] shrink-0">
        <div className="bg-card border rounded-xl overflow-hidden lg:sticky lg:top-24 shadow-sm flex flex-col h-[600px] lg:h-[calc(100vh-140px)]">
          <div className="p-5 border-b bg-muted/20">
            <h2 className="font-bold text-lg">Conteúdo do Curso</h2>
            <p className="text-sm text-muted-foreground mt-1 font-medium">
              {courseModules.length} seções • {allLessons.length} aulas
            </p>
          </div>

          <ScrollArea className="flex-1">
            <Accordion type="multiple" defaultValue={[currentModuleId]} className="w-full">
              {courseModules.map((module) => (
                <AccordionItem
                  value={module.id}
                  key={module.id}
                  className="border-b-0 border-t first:border-t-0"
                >
                  <AccordionTrigger className="px-5 py-4 hover:bg-muted/40 transition-colors text-sm font-semibold hover:no-underline">
                    <div className="flex flex-col items-start text-left gap-1">
                      <span className="leading-tight">{module.title}</span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {module.lessons.length} aulas
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0 pt-0">
                    <div className="flex flex-col w-full bg-muted/10">
                      {module.lessons.map((lesson) => {
                        const isCurrent = lesson.id === currentLesson.id
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => goToLesson(lesson.id)}
                            className={cn(
                              'flex items-start text-left gap-3 px-5 py-3.5 text-sm transition-all border-l-2',
                              isCurrent
                                ? 'bg-blue-50/60 dark:bg-blue-900/20 border-blue-600'
                                : 'border-transparent hover:bg-muted/60',
                            )}
                          >
                            <PlayCircle
                              className={cn(
                                'w-4 h-4 mt-0.5 shrink-0 transition-colors',
                                isCurrent
                                  ? 'text-blue-600 fill-blue-100 dark:fill-blue-900/40'
                                  : 'text-muted-foreground',
                              )}
                            />
                            <div className="flex flex-col gap-1">
                              <span
                                className={cn(
                                  'font-medium leading-snug',
                                  isCurrent
                                    ? 'text-blue-700 dark:text-blue-400'
                                    : 'text-foreground/90',
                                )}
                              >
                                {lesson.title}
                              </span>
                              <span
                                className={cn(
                                  'text-xs font-medium',
                                  isCurrent
                                    ? 'text-blue-600/80 dark:text-blue-400/80'
                                    : 'text-muted-foreground',
                                )}
                              >
                                {lesson.duration}
                              </span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
