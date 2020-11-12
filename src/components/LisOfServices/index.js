import { useState } from 'react'
import ServiceCard from '../ServiceCard'
import './style.css'

export default function ListOfServices () {
  const [service, setService] = useState({
    title: 'Asesoría Y Consulta',
    icon: 'fas fa-handshake',
    text:
      'Puedo Asesorar tu negocio digital, brindandote todas las herramientas necesarias para su desarrollo'
  })
  const [service2, setService2] = useState({
    title: 'Cursos y Talleres',
    icon: 'fas fa-chalkboard-teacher',
    text:
      'Una experiencia de mas de 5 años en docencia ha hecho que desarrolle contenido de valor para brindar como aporte al conocimiento de los usuarios'
  })
  const [service3, setService3] = useState({
    title: 'Soporte Técnico',
    icon: 'fas fa-tools',
    text:
      'Reparación y mantenimiento preventivo y correctivo de PCs, Laptos e Impresoras'
  })
  return (
    <div className='list-of-services'>
      <ServiceCard
        title={service.title}
        icon={service.icon}
        text={service.text}
      />
      <ServiceCard
        title={service2.title}
        icon={service2.icon}
        text={service2.text}
      />
      <ServiceCard
        title={service3.title}
        icon={service3.icon}
        text={service3.text}
      />
    </div>
  )
}
