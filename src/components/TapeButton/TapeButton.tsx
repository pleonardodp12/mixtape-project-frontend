import React, { useState } from 'react';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';
import { StyledButton, StyledBackground } from './TapeButtonStyles';

interface TapeButtonProps {
  type: string;
  activeStatus?: boolean
}

interface iconTypes {
  [key: string]: JSX.Element
}


const TapeButton: React.FC<TapeButtonProps> = ({ type }: TapeButtonProps) => {
  const [active, setActive] = useState(false);

  const iconTypes: iconTypes = {
    play: <FaPlay />,
    pause: <FaPause />,
    stop: <FaStop />,
  };

  return (
    <div>
      <StyledButton
        className={active ? 'active' : 'inactive'}
        onClick={() => {
          setActive(!active);
        }}
      >
        {iconTypes[type]}
      </StyledButton>
      <StyledBackground/>
    </div>
  );
};

export default TapeButton;
