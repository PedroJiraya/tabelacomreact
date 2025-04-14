import { StudentTable } from '@/components/StudentTable'
import { students } from '@/data/students'

function Page(){

  return(

    
    <div className="container mx-auto">
      <h1 className='mb-5 text-5xl'>Lista de Estudantes</h1>
      <StudentTable
      students={students}
      />
    </div>
  )
}

export default Page