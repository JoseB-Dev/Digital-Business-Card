import './style.css'
import profile from '../../img/perfil.png'
import background from '../../img/banner.jpg'
/* 
    https://media.giphy.com/media/DvyxIpxw9cCuQ/giphy.gif
    https://media.giphy.com/media/njZPp4pQ0g4fe/giphy.gif
    https://media.giphy.com/media/iicDrNGWxHmDrIni6j/giphy.gif
    
    */
export default function CardHeader() {
    return (
        <div className='card-header'>
            <div className='header-background'>
                <div className='background-text'>
                    <p>Community Cyber Space</p>
                    <p>C.C.S</p>
                </div>
                <img src={'https://media.giphy.com/media/njZPp4pQ0g4fe/giphy.gif'} alt='profile img' />
            </div>
            <div className='header-content'>
                <div className='profile-img'>
                    <img src={profile} alt='profile img' />
                </div>
                <h1>Jose Luis Bravo</h1>
                <h2>Consultor Informático</h2>
                <p>🇵🇪 Perú</p>
                <button className='contact-btn'>Contacto</button>
            </div>
        </div>
    )
}
