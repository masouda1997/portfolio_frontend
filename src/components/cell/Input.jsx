/* eslint-disable react/display-name */
import React , {useImperativeHandle, forwardRef} from "react";
import PropTypes from 'prop-types';


const Input = forwardRef(({label , placeholder , onChange  , type='text', disable=false , error , ...rest}, ref)=>{
   // const inputRef = React.useRef();
   // useImperativeHandle(ref, () => ({
	// 	focus: () => {
	// 		inputRef.current.focus();
	// 	},
	// 	clear: () => {
	// 		inputRef.current.value = '';
	// 	},
	// }));


   return(
      <div className='flex flex-col justify-start items-start' >
         {label && <label>{label}</label>}
         <input type={type} placeholder={placeholder} onChange={onChange} disable={disable} ref={ref} {...rest} className={`bg-gray-300 border border-transparent rounded-full px-2 p-1 focus:border-[var(--primary-color)] outline-none  bg-opacity-40`} />
         {error && <span className={`text-[var(--primary-color)] text-xs pl-2 h-1 `} >{error}</span>}
      </div>
   )
   
})

Input.propTypes = {
   label: PropTypes.string,
   placeholder: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   className: PropTypes.string,
   type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
   disabled: PropTypes.bool,
   error: PropTypes.string,
}

Input.defaultProps = {
   label: '',
   placeholder: '',
   className: '',
   type: 'text',
   disabled: false,
   error: '',
}

export default Input;
