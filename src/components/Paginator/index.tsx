import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { range } from './utils/range';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Button from './components/Button';

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

  const calculateRange = React.useMemo(() => {
    const initialToRange = initialRange + stepPaginator;
    const toRange = initialToRange > lastPage ? lastPage : initialToRange;
    return range({ from: initialRange, to: toRange });
  }, [initialRange, lastPage, stepPaginator]);

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
        >
          <ArrowBackIcon />
        </Button>
      )}
      <Button
        onClick={() => {
          setCurrentPage(initialPage);
          setInitialRange(initialPage + 1);
        }}
        {...(initialPage === currentPage && { style: { color: 'black', backgroundColor: 'white' } })}
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
        >
          <ArrowLeftIcon />
        </Button>
      )}
      {calculateRange.map(r => (
        <Button
          key={`square-${r * Math.random()}`}
          onClick={() => setCurrentPage(r)}
          {...(r === currentPage && { style: { color: 'black', backgroundColor: 'white' } })}
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
        >
          <ArrowRightIcon />
        </Button>
      )}
      <Button
        {...(lastPage === currentPage && { style: { color: 'black', backgroundColor: 'white' } })}
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
        >
          <ArrowForwardIcon />
        </Button>
      )}
    </HStack>
  );
}

export default Paginator;
