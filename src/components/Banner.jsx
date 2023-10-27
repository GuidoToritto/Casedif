import React from 'react'
import Img01 from '../images/01.webp'


export const Banner = () => {
  return (
    <div>
        <img src={Img01} className='Img01' alt="" />
        <div className="steelframe01">Construí tu casa en Steelframe sin arriesgar tu dinero</div>
        <div className="steelframe02">
            <div className="steelframe03">Modalidad llave en mano</div>
            <div className="btn">Quiero construir</div>
        </div>
    </div>
    
  )
}
