import { useAnimate } from 'framer-motion'
import React from 'react'

const MouseImageTrail = ({children , images , renderImageBuffer , rotationRange}) => {
  const [scope, animate] = useAnimate()
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const distance = calculateDistance(
			clientX,
			clientY,
			lastRenderPosition.current.x,
			lastRenderPosition.current.y
		);
    if (distance >= renderImageBuffer){
      lastRenderPosition.current.x = clientX
      lastRenderPosition.current.y = clientY
      renderNextImage()
    }
  };

  const calculateDistance = (x1,y1,x2,y2)=>{
    const deltaX = x2-x1
    const deltaY = y2-y1
    const distance  = Math.sqrt(deltaX**2 + deltaY**2)
    return distance
  }

  const renderNextImage = () =>{
    
  }

  return (
    <div className='relative overflow-hidden' ref={scope} onMouseMove={handleMouseMove}>
      {children}
      {images.map((img , index)=>(
        <img 
          key={index} 
          src={img} 
          className='pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0' 
          alt={`Mouse move image ${index}`} 
        />
      ))}
    </div>
  )
}

export default MouseImageTrail