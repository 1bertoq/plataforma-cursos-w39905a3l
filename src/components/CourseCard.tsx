import { Play } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Course } from '@/data/courses'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  course: Course
  showProgress?: boolean
}

const LEVEL_COLORS: Record<string, string> = {
  Iniciante: 'bg-green-100 text-green-800 hover:bg-green-200',
  Intermediário: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  Avançado: 'bg-red-100 text-red-800 hover:bg-red-200',
}

export function CourseCard({ course, showProgress }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white border border-gray-100 group h-full">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 shrink-0">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Badge
          className={cn(
            'absolute right-3 top-3 border-none shadow-sm px-2.5 py-0.5',
            LEVEL_COLORS[course.level],
          )}
          variant="secondary"
        >
          {course.level}
        </Badge>
      </div>

      <CardHeader className="p-5 pb-2 shrink-0">
        <span className="text-xs font-medium font-sans uppercase tracking-wider text-blue-600 mb-1.5">
          {course.academy}
        </span>
        <h3 className="font-poppins font-semibold text-lg leading-tight text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
      </CardHeader>

      <CardContent className="p-5 pt-0 flex-grow flex flex-col">
        <p className="text-sm font-normal text-gray-600 line-clamp-2 mb-4">{course.description}</p>

        <div className="flex items-center text-sm font-normal text-gray-500 mb-4 bg-gray-50 self-start px-2.5 py-1 rounded-md">
          <Play className="h-4 w-4 mr-1.5 text-blue-500" />
          <span>{course.lessons} aulas</span>
        </div>

        {showProgress && course.progress !== undefined && (
          <div className="space-y-2 mt-auto">
            <div className="flex justify-between text-xs font-medium font-sans text-gray-700">
              <span>Progresso</span>
              <span className="text-blue-600">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2.5 bg-gray-100" />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-0 shrink-0 mt-auto">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium font-sans transition-all shadow-sm group-hover:shadow">
          {showProgress ? 'Continuar Curso' : 'Acessar Curso'}
        </Button>
      </CardFooter>
    </Card>
  )
}
