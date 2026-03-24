import { useState, useMemo } from 'react'
import { Search, GraduationCap, Filter } from 'lucide-react'
import { courses, Academy } from '@/data/courses'
import { CourseCard } from '@/components/CourseCard'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAcademy, setSelectedAcademy] = useState<Academy | 'Todas'>('Todas')

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesAcademy = selectedAcademy === 'Todas' || course.academy === selectedAcademy
      return matchesSearch && matchesAcademy
    })
  }, [searchQuery, selectedAcademy])

  return (
    <div className="space-y-12 animate-fade-in pb-12">
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white rounded-3xl p-8 md:p-16 text-center shadow-sm border border-gray-100">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/400?q=office')] opacity-5 mix-blend-multiply object-cover" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <Badge
            variant="secondary"
            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none px-4 py-1.5 text-sm font-semibold mb-4"
          >
            Desenvolvimento Contínuo
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Portal de <span className="text-blue-600">Cursos Corporativos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Impulsione sua carreira com nossos treinamentos especializados. Desenvolva novas
            habilidades e alcance seu potencial máximo hoje mesmo.
          </p>
        </div>
      </section>

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Buscar cursos por título..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 bg-gray-50 border-none h-14 text-base rounded-xl focus-visible:ring-1 focus-visible:ring-blue-600 focus-visible:bg-white transition-all shadow-inner"
          />
        </div>
        <div className="w-full md:w-72 flex items-center gap-3">
          <div className="hidden md:flex items-center justify-center bg-gray-50 h-14 w-14 rounded-xl text-gray-500 shrink-0">
            <Filter className="h-5 w-5" />
          </div>
          <Select
            value={selectedAcademy}
            onValueChange={(val) => setSelectedAcademy(val as Academy | 'Todas')}
          >
            <SelectTrigger className="h-14 bg-gray-50 border-none rounded-xl text-base font-medium focus:ring-1 focus:ring-blue-600 w-full hover:bg-gray-100 transition-colors">
              <SelectValue placeholder="Selecione a Academia" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-gray-100 shadow-lg">
              <SelectItem value="Todas" className="font-medium cursor-pointer py-3">
                Todas as Academias
              </SelectItem>
              <SelectItem value="Vendas" className="font-medium cursor-pointer py-3">
                Academia de Vendas
              </SelectItem>
              <SelectItem value="Tecnologia" className="font-medium cursor-pointer py-3">
                Academia de Tecnologia
              </SelectItem>
              <SelectItem value="Liderança" className="font-medium cursor-pointer py-3">
                Academia de Liderança
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6 px-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedAcademy === 'Todas' ? 'Todos os Cursos' : `Cursos de ${selectedAcademy}`}
          </h2>
          <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm animate-fade-in-up">
            <div className="bg-gray-50 p-6 rounded-full mb-6">
              <GraduationCap className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum curso encontrado</h3>
            <p className="text-gray-500 max-w-md text-lg">
              Não encontramos nenhum curso com os filtros selecionados. Tente buscar por outros
              termos ou limpar os filtros.
            </p>
            <Button
              variant="outline"
              className="mt-8 rounded-full font-semibold border-gray-200 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => {
                setSearchQuery('')
                setSelectedAcademy('Todas')
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
