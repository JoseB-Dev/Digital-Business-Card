import CardHeader from '../CardHeader'
import './style.css'

export default function Card() {
    return (
        <div className='card'>
            <CardHeader/>
            <section className='card-body'></section>
            <section className='card-footer'></section>
        </div>
    )
}
