import './style.css'
import ListOfServices from '../LisOfServices'

export default function CardBody() {
   
    return (
        <section className='card-body'>
            <div className='services section'>
                <h3 className='title-section'>Servicios</h3>
                <p className='text-section'>En que te puedo ayudar</p>
                <ListOfServices/>
            </div>
            <div className='location section'>
                <h3 className='title-section'>Ubicacion</h3>
                <p className='text-section'>Donde me puedes encontrar</p>
            </div>
            <div className='qr-code section'>
                <h3 className='title-section'>Codigo QR</h3>
                <p className='text-section'>Escanea mi web</p>
            </div>
        </section>
    )
}
