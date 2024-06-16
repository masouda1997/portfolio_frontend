import React, { useEffect, useState } from "react";

const ColorSwitcher = ({color}) => {
   const [primaryColor , setPrimaryColor] = useState(color)

   const handleColorChange = (event)=>{
      setPrimaryColor(event.target.value)
      console.log(primaryColor);
      
   }
   useEffect(() => {
     localStorage.setItem("primary-color" , primaryColor)
   }, [primaryColor]);
   

   return (
		<div className="color-switcher absolute">
			<input
				type="color"
				id="primary-color"
				value={primaryColor}
				onChange={handleColorChange}
			/>
		</div>
   );
};

export default ColorSwitcher;
