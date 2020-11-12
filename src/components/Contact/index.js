import React, { useState } from 'react'
import './style.css'

export const Contact = () => {
  const [state, setstate] = useState(false)
  const handleClick = () => {
    setstate(!state)
  }
  return (
    <>
      <div className='contact'>
        <button
          onClick={handleClick}
          className={state ? 'contact-btn active' : 'contact-btn'}
        >
          <span>Contacto</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 48 48'
          >
            <g className='nc-icon-wrapper' fill='#fffffe'>
              <path d='M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z'></path>
            </g>
          </svg>
        </button>

        <div className={state ? 'contact-title active' : 'contact-title'} >
          <p>Contacto</p>
        </div>

      </div>

      <div className={state ? 'contact-list active' : 'contact-list'}>
        <a href='https://api.whatsapp.com/send?phone=51981229962' className='whatsapp' target='_blank' rel='noreferrer'>
          <div className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ fill: 'rgba(255, 255, 255, 1)' }}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3 c-4.948,0-8.976,4.027-8.978,8.977c0,1.582,0.413,3.126,1.198,4.488L3,21.116l4.759-1.249c1.312,0.715,2.788,1.092,4.29,1.093h0.004 l0,0c4.947,0,8.975-4.027,8.977-8.977C21.03,9.585,20.098,7.33,18.403,5.633 M12.053,19.445H12.05 c-1.339-0.001-2.652-0.36-3.798-1.041l-0.272-0.162l-2.824,0.741l0.753-2.753l-0.177-0.282c-0.747-1.188-1.141-2.561-1.141-3.971 c0.002-4.114,3.349-7.461,7.465-7.461c1.993,0.001,3.866,0.778,5.275,2.188c1.408,1.411,2.184,3.285,2.183,5.279 C19.512,16.097,16.165,19.445,12.053,19.445 M16.146,13.856c-0.225-0.113-1.327-0.655-1.533-0.73 c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.729-0.711,0.879s-0.262,0.168-0.486,0.056s-0.947-0.349-1.804-1.113 c-0.667-0.595-1.117-1.329-1.248-1.554s-0.014-0.346,0.099-0.458c0.101-0.1,0.224-0.262,0.336-0.393 c0.112-0.131,0.149-0.224,0.224-0.374s0.038-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.666 C9.627,7.787,9.442,7.845,9.304,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28 C8.07,8.336,7.491,8.878,7.491,9.982c0,1.104,0.804,2.171,0.916,2.321c0.112,0.15,1.582,2.415,3.832,3.387 c0.536,0.231,0.954,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.514-1.066 c0.187-0.524,0.187-0.973,0.131-1.067C16.52,14.025,16.369,13.968,16.146,13.856'
              ></path>
            </svg>
          </div>

          <div className='content'>
            <h1>Whatsapp</h1>
            <span>(+51) 880 000 000</span>
          </div>

          <svg
            className='arrow'
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 48 48'
          >
            <g className='nc-icon-wrapper' fill='#CCCCCC'>
              <path d='M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z'></path>
            </g>
          </svg>
        </a>

        <a href='https://m.me/joseluis.bravocardenas' className='messenger' target='_blank' rel='noreferrer'>
          <div className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ fill: 'rgba(255, 255, 255, 1)' }}
            >
              <path d='M12,3c-4.92,0-8.91,3.729-8.91,8.332c0,2.616,1.291,4.952,3.311,6.479V21l3.041-1.687 c0.811,0.228,1.668,0.35,2.559,0.35c4.92,0,8.91-3.73,8.91-8.331C20.91,6.729,16.92,3,12,3z M12.938,14.172l-2.305-2.394 l-4.438,2.454l4.865-5.163l2.305,2.395l4.439-2.455L12.938,14.172z'></path>
            </svg>
          </div>

          <div className='content'>
            <h1>Messenger</h1>
            <span>Jose Luis Bravo</span>
          </div>

          <svg
            className='arrow'
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 48 48'
          >
            <g className='nc-icon-wrapper' fill='#CCCCCC'>
              <path d='M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z'></path>
            </g>
          </svg>
        </a>

        <a href='#' className='gmail' >
          <div className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ fill: 'rgba(255, 255, 255, 1)' }}
            >
              <path d='M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28 c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233 c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934 C20.485,11.453,20.404,10.884,20.283,10.356z'></path>
            </svg>
          </div>

          <div className='content'>
            <h1>Email</h1>
            <span>joseluis@gmail.com</span>
          </div>

          <svg
            className='arrow'
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 48 48'
          >
            <g className='nc-icon-wrapper' fill='#CCCCCC'>
              <path d='M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z'></path>
            </g>
          </svg>
        </a>
      </div>

    </>
  )
}
