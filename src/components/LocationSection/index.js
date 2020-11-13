import React, { useState } from 'react'
import Section from '../Section'
import './style.css'

export default function LocationSection() {
    const [state, setstate] = useState({
        title: 'Ubicacion',
        text: 'Donde me puedes encontrar',
        styles: 'location'
    })
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <div className='location-box'>
                <div className='box-info'>
                    <i className='fas fa-map-marker-alt'></i>
                    <p>Liquenes 347, Cercado de Lima</p>
                </div>
                <div className='box-map'>
                    <iframe
                        title='mapa'
                        class='iframe-map'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.297662553382!2d-77.0140790857223!3d-12.023016944731348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf5f4a8fe325%3A0x9f5c065e2746a4cf!2sLiquenes%20347%2C%20Cercado%20de%20Lima%2015401%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1605025180857!5m2!1ses!2sus'
                    ></iframe>
                </div>
            </div>
        </Section>
    )
}
