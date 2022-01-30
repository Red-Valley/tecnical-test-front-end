import React from 'react';
import { Container, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onReset: () => void;
}

function FallbackUI({ onReset }: Props) {
  const navigate = useNavigate();

  const resetUI = () => {
    onReset?.();
    navigate('/');
  };

  return (
    <Container
      centerContent
      height="calc(100vh - 320px);"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minW="8xl"
    >
      <Heading as="h1" variant="bigTitle" color="white">
        Lo sentimos, algo salió mal
      </Heading>
      <Button onClick={resetUI}>Ir al inicio</Button>
    </Container>
  );
}

export default FallbackUI;
