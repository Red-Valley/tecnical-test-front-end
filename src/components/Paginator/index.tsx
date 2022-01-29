import * as React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { range } from './utils/range';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

// eslint-disable-next-line no-unused-vars
type fn = (n: number) => void;

interface Props {
  currentPage: number;
  lastPage: number;
  stepPaginator?: number;
  setCurrentPage: fn;
}

const initialPage = 1;

function Paginator({ currentPage, lastPage, stepPaginator = 4, setCurrentPage }: Props) {
  const [initialRange, setInitialRange] = React.useState(2);

  const calculateRange = React.useMemo(
    () => range({ from: initialRange, to: initialRange + stepPaginator }),
    [initialRange, stepPaginator]
  );

  return (
    <HStack spacing="24px">
      {currentPage > initialPage && (
        <Button
          onClick={() => {
            const nextPage = currentPage - 1;
            setCurrentPage(nextPage);
            if (nextPage < calculateRange[0] && nextPage !== initialPage) {
              setInitialRange(nextPage - stepPaginator + 1);
            }
          }}
          variant="ghost"
          colorScheme="gray"
        >
          <ArrowBackIcon />
        </Button>
      )}
      <Button
        variant="ghost"
        onClick={() => {
          setCurrentPage(initialPage);
          setInitialRange(initialPage + 1);
        }}
        colorScheme="gray"
        {...(initialPage === currentPage && { bg: 'gray.200' })}
      >
        {initialPage}
      </Button>
      {initialRange > 2 && (
        <Button
          onClick={() =>
            setInitialRange(prev => {
              const newInitialRange = prev - stepPaginator;
              setCurrentPage(newInitialRange);
              return newInitialRange;
            })
          }
          variant="ghost"
          colorScheme="gray"
        >
          <ArrowLeftIcon />
        </Button>
      )}
      {calculateRange.map(r => (
        <Button
          key={`square-${r * Math.random()}`}
          variant="ghost"
          colorScheme="gray"
          onClick={() => setCurrentPage(r)}
          {...(r === currentPage && { bg: 'gray.200' })}
        >
          {r}
        </Button>
      ))}
      {calculateRange[calculateRange.length - 1] !== lastPage - 1 && (
        <Button
          onClick={() =>
            setInitialRange(prev => {
              const newInitialRange = prev + stepPaginator;
              setCurrentPage(newInitialRange);
              return newInitialRange;
            })
          }
          variant="ghost"
          colorScheme="gray"
        >
          <ArrowRightIcon />
        </Button>
      )}
      <Button
        variant="ghost"
        colorScheme="gray"
        {...(lastPage === currentPage && { bg: 'gray.200' })}
        onClick={() =>
          setInitialRange(() => {
            const newInitialRange = lastPage - stepPaginator;
            setCurrentPage(lastPage);
            return newInitialRange;
          })
        }
      >
        {lastPage}
      </Button>
      {currentPage !== lastPage && (
        <Button
          onClick={() => {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            if (nextPage > calculateRange[calculateRange.length - 1] && nextPage !== lastPage) {
              setInitialRange(nextPage);
            }
          }}
          variant="ghost"
          colorScheme="gray"
        >
          <ArrowForwardIcon />
        </Button>
      )}
    </HStack>
  );
}

export default Paginator;
