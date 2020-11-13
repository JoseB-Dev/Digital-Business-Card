import './style.css'
import profile from '../../img/perfil.png'
import background from '../../img/banner.jpg'
import { Contact } from '../Contact'
/* 
    https://media.giphy.com/media/DvyxIpxw9cCuQ/giphy.gif
    https://media.giphy.com/media/njZPp4pQ0g4fe/giphy.gif
    https://media.giphy.com/media/iicDrNGWxHmDrIni6j/giphy.gif
    https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif
    */
export default function CardHeader() {
    return (
        <div className='card-header'>
            <div className='header-background'>
                <div className='background-text'>
                    <p>Community Cyber Space</p>
                    <p>C.C.S</p>
                </div>
                <img
                    src={'https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif'}
                    alt='profile img'
                />
            </div>
            <div className='header-content'>
                <div className='profile-img'>
                    <img src={profile} alt='profile img' />
                </div>
                <h1>Jose Luis Bravo</h1>
                <h2>Consultor Informático</h2>
                <p>🇵🇪</p>
                <div className='social-links'>
                    <a
                        href='https://www.facebook.com/joseluis.bravocardenas'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </div>
                <Contact />
            </div>
        </div>
    )
}
