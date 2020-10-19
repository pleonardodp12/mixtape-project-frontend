import React, { InputHTMLAttributes } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

import { InputContent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const InputLogin: React.FC<InputProps> = ({ name, type, ...rest }) => {

  const checkType = () => {
    if(type === "password"){
      return <FaLock />
    }
    return <FaUser />
  }

  return (
    <InputContent>
      {checkType()}
      <input {...rest}/>
    </InputContent>
  )
}

export default InputLogin;