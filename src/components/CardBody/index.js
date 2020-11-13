import './style.css'
import ListOfServices from '../LisOfServices'
import qr_code from '../../img/QR_Code.svg'

export default function CardBody() {
    return (
        <section className='card-body'>
            <div className='services section'>
                <h3 className='title-section'>Servicios</h3>
                <p className='text-section'>En que te puedo ayudar</p>
                <ListOfServices />
            </div>

            <div className='location section'>
                <h3 className='title-section'>Ubicacion</h3>
                <p className='text-section'>Donde me puedes encontrar</p>
                <div className='location-box'>
                    <div className='box-info'>
                        <i className='fas fa-map-marker-alt'></i>
                        <p>Liquenes 347, Cercado de Lima</p>
                    </div>
                    <div className='box-map'>
                        <iframe
                            title='mapa'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.297662553382!2d-77.0140790857223!3d-12.023016944731348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf5f4a8fe325%3A0x9f5c065e2746a4cf!2sLiquenes%20347%2C%20Cercado%20de%20Lima%2015401%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1605025180857!5m2!1ses!2sus'
                            width='600'
                            height='450'
                            frameborder='0'
                            //   style='border:0;'
                            allowfullscreen=''
                            aria-hidden='false'
                            tabindex='0'
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className='qr-code section'>
                <h3 className='title-section'>Codigo QR</h3>
                <p className='text-section'>Visita mi sitio web</p>
                <div className='qr-code-box'>
                    <div className='box-web'>
                        <a href='https://community-cyber-space.vercel.app/' target='_blank' rel='noreferrer'>
                            <i className='far fa-file-code'></i>
                            <p>Página web</p>
                        </a>
                    </div>
                    <div className='box-qr'>
                        <img src={qr_code} alt='qrcode' />
                    </div>
                </div>
            </div>
        </section>
    )
}
