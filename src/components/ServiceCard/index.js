import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import ServiceFront from '../ServiceFront'
import ServiceBack from '../ServiceBack'

export default function ServiceCard({ type }) {
    useEffect(() => {
        handleContent()
    }, [])
    const [service, setService] = useState({
        title: 'Asesoría Y Consulta',
        icon: 'fas fa-handshake',
        text:
            'Puedo Asesorar tu negocio digital, brindandote todas las herramientas necesarias para su desarrollo'
    })

    const handleContent = () => {
        if (type === 'cursos') {
            setService({
                title: 'Cursos y Talleres',
                icon: 'fas fa-chalkboard-teacher',
                text:
                    'Una experiencia de mas de 5 años en docencia ha hecho que desarrolle contenido de valor para brindar como aporte al conocimiento de los usuarios'
            })
        }
        if (type === 'soporte') {
            setService({
                title: 'Soporte Técnico',
                icon: 'fas fa-tools',
                text:
                    'Reparación y mantenimiento preventivo y correctivo de PCs, Laptos e Impresoras'
            })
        }
    }
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <ServiceFront
                click={handleClick}
                title={service.title}
                icon={service.icon}
            />
            <ServiceBack
                click={handleClick}
                title={service.title}
                text={service.text}
            />
        </ReactCardFlip>
    )
}
