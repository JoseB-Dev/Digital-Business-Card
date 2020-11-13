import React from 'react'
import './style.css'

export default function CardFooter() {
    return (
        <section className='card-footer'>
            <img
                src='https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif'
                alt='footer_img'
            />
            <div className='copyright-text'>
                <p>
                    Copyright&copy; 2020 |
                    <a href='https://www.facebook.com/profile.php?id=100014395656031'>
                        J.C Developer
                    </a>
                </p>
            </div>
        </section>
    )
}
