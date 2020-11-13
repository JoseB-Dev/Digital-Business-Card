import React, { useState } from 'react'
import Section from '../Section';
import qr_code from '../../img/qrcode.svg'
import './style.css'

export default function QRCodeSection() {
    const [state] = useState({
        title: 'Codigo QR',
        text: 'Comparte mi tarjeta',
        styles: 'qr-code'
    });
    return (
        <Section title={state.title} text={state.text} styles={state.styles}>
            <div className='qr-code-box'>
                <div className='box-web'>
                    <i className='fas fa-qrcode'></i>
                    <p>Escanea el codigo</p>
                </div>
                <div className='box-qr'>
                    <img src={qr_code} alt='qrcode' />
                </div>
            </div>
        </Section>
    )
}
