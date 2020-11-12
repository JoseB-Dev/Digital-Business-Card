import CardBody from '../CardBody'
import CardHeader from '../CardHeader'
import './style.css'

export default function Card() {
    return (
        <div className='card'>
            <CardHeader/>
            <CardBody />
            <section className='card-footer'></section>
        </div>
    )
}
