export type Level = 'Iniciante' | 'Intermediário' | 'Avançado'
export type Academy = 'Vendas' | 'Tecnologia' | 'Liderança'

export interface Course {
  id: string
  title: string
  academy: Academy
  level: Level
  lessons: number
  description: string
  imageUrl: string
  enrolled?: boolean
  progress?: number
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Técnicas de Negociação',
    academy: 'Vendas',
    level: 'Iniciante',
    lessons: 12,
    description:
      'Aprenda as principais técnicas para negociar com sucesso em qualquer situação do dia a dia corporativo.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=handshake&color=blue',
    enrolled: true,
    progress: 35,
  },
  {
    id: '2',
    title: 'React Avançado para Empresas',
    academy: 'Tecnologia',
    level: 'Avançado',
    lessons: 24,
    description:
      'Aprofunde seus conhecimentos em React e crie aplicações escaláveis e performáticas.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=programming&color=blue',
    enrolled: true,
    progress: 80,
  },
  {
    id: '3',
    title: 'Liderança de Equipes Remotas',
    academy: 'Liderança',
    level: 'Intermediário',
    lessons: 10,
    description:
      'Descubra como manter sua equipe engajada e produtiva trabalhando de forma remota.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=video%20call&color=blue',
  },
  {
    id: '4',
    title: 'Fundamentos de Cloud Computing',
    academy: 'Tecnologia',
    level: 'Iniciante',
    lessons: 15,
    description:
      'Entenda os conceitos básicos de computação em nuvem e como aplicá-los nos negócios.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=server&color=blue',
  },
  {
    id: '5',
    title: 'Fechamento de Vendas B2B',
    academy: 'Vendas',
    level: 'Avançado',
    lessons: 8,
    description: 'Estratégias avançadas para concluir vendas complexas no mercado B2B.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=business%20meeting&color=blue',
    enrolled: true,
    progress: 10,
  },
  {
    id: '6',
    title: 'Comunicação Não-Violenta',
    academy: 'Liderança',
    level: 'Iniciante',
    lessons: 6,
    description:
      'Melhore a comunicação interpessoal e resolva conflitos de forma construtiva e empática.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=conversation&color=blue',
  },
  {
    id: '7',
    title: 'Segurança da Informação',
    academy: 'Tecnologia',
    level: 'Intermediário',
    lessons: 20,
    description:
      'Práticas essenciais para proteger os dados da empresa contra ameaças cibernéticas.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=cybersecurity&color=blue',
  },
  {
    id: '8',
    title: 'Gestão de Conflitos',
    academy: 'Liderança',
    level: 'Intermediário',
    lessons: 9,
    description: 'Ferramentas e técnicas para mediar e resolver conflitos no ambiente de trabalho.',
    imageUrl: 'https://img.usecurling.com/p/300/200?q=teamwork&color=blue',
  },
]
