import { useMemo } from 'react'
import { courses } from '@/data/courses'
import { CourseCard } from '@/components/CourseCard'
import { BookOpenCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function MyCourses() {
  const enrolledCourses = useMemo(() => courses.filter((c) => c.enrolled), [])

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Meus Cursos</h1>
          <p className="text-gray-600 mt-2 font-medium">
            Acompanhe seu progresso e continue aprendendo de onde parou.
          </p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm">
          {enrolledCourses.length} cursos em andamento
        </div>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} showProgress={true} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
          <div className="bg-gray-50 p-6 rounded-full mb-6">
            <BookOpenCheck className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Você ainda não se inscreveu em nenhum curso
          </h3>
          <p className="text-gray-500 max-w-md text-lg mb-8">
            Explore a plataforma e encontre o treinamento perfeito para o seu desenvolvimento
            profissional.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            <Link to="/">
              Explorar Cursos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
