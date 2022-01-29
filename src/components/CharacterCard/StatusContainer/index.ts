import { chakra } from '@chakra-ui/react';

export const StatusContainer = chakra<'div', { status: string }>('div', {
  /* cast any props cause chakra factory is in progress 
  currently and just now it cann't to infier component props at the baseStyle */
  baseStyle: ({ status }: any) => ({
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    _before: {
      content: '""',
      width: '10px',
      height: '10px',
      display: 'block',
      background: (status as string).toLocaleLowerCase() === 'alive' ? 'green' : 'red',
      borderRadius: '100%',
      marginRight: 1
    }
  })
});
