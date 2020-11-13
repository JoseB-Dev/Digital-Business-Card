import React, { useState } from 'react'
import Section from '../Section'
import ListOfServices from '../LisOfServices'
import './style.css'

export default function ServicesSection () {
    const [state, setstate] = useState({
        title: 'Servicios',
        text: 'En que te puedo ayudar',
        styles:'services'
    });
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <ListOfServices />
        </Section>
    )
}
