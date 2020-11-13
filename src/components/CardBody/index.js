import LocationSection from '../LocationSection'
import QRCodeSection from '../QRCodeSection'
import ServicesSection from '../ServicesSection'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'

export default function CardBody() {
    return (
        <section className='card-body'>
            <Carousel dynamicHeight={true} showThumbs={false} showStatus={false} useKeyboardArrows={true}>
                <ServicesSection />
                <LocationSection />
                <QRCodeSection />
            </Carousel>
        </section>
    )
}