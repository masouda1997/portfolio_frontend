/* eslint-disable react/display-name */
// /* eslint-disable react/display-name */
import PropTypes from "prop-types";
import React from "react";

const Button = React.forwardRef(({children ,onClick ,className ,type ,disabled = false ,loading = false ,...rest}, ref) => {
   const handleClick = (event)=>{
      if(disabled){
         console.log('button is disabled');
         event.preventDefault()
      }if(onClick){
         console.log('button clicked');
         onClick(event)
      }
   }

   return (
      <button ref={ref} type={type} onClick={handleClick} className={className} disabled={disabled || loading} {...rest}>
         {loading ? <span>loading!</span> : children}
      </button>
   )
})

Button.propTypes = {
   children:PropTypes.node.isRequired,
   onClick:PropTypes.func,
   type:PropTypes.oneOf(['button' , 'submit' , 'rest']),
   disable:PropTypes.bool,
   className:PropTypes.string,
   loading:PropTypes.bool,
}

Button.defaultProps = {
   onClick:null,
   className:"",
   disable:false,
   type:'button',
   loading:false,
}

export default Button;
