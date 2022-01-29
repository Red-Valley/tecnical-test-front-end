import React from 'react';
import { Button as ButtonCh, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick, ...restProps }: Props) {
  return (
    <ButtonCh
      onClick={onClick}
      variant="ghost"
      colorScheme="gray"
      color="white"
      _hover={{
        color: 'dark',
        backgroundColor: 'white'
      }}
      {...restProps}
    >
      {children}
    </ButtonCh>
  );
}

export default Button;
