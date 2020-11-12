import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import ServiceFront from '../ServiceFront'
import ServiceBack from '../ServiceBack'

export default function ServiceCard({ title, icon, text }) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <ServiceFront click={handleClick} title={title} icon={icon} />
            <ServiceBack click={handleClick} title={title} text={text} />
        </ReactCardFlip>
    )
}
