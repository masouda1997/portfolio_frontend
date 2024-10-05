/* eslint-disable react/display-name */
import React , {useImperativeHandle, forwardRef} from "react";
import PropTypes from 'prop-types';


const Input = forwardRef(({label , placeholder , value , onChange , className , type='text', disable=false , error , ...rest}, ref)=>{
   const inputRef = React.useRef();
   useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current.focus();
		},
		clear: () => {
			inputRef.current.value = '';
		},
	}));


   return(
      <div className='flex flex-col justify-start items-start' >
         {label && <label>{label}</label>}
         <input type={type}  placeholder={placeholder} value={value}  onChange={onChange} className={className} disable ref={inputRef} {...rest} />
         {error && <span>{error}</span>}
      </div>
   )
   
})

Input.propTypes = {
   label: PropTypes.string,
   placeholder: PropTypes.string,
   value: PropTypes.string.isRequired,
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
