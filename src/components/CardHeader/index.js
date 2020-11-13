import React from 'react'
import HeaderBackground from '../HeaderBackground'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import Contact from '../Contact'
import profile_img from '../../img/perfil.png'
import './style.css'

export default function CardHeader() {
    return (
        <div className='card-header'>
            <HeaderBackground
                background='https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif'
                text='Community Cyber Space'
                subText='C.C.S'
            />
            <Profile
                image={profile_img}
                name='Jose Luis Bravo'
                degree='Consultor Informático'
                flag='🇵🇪'
            />
            <SocialLinks />
            <Contact />
        </div>
    )
}
