import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import { range } from './utils/range';
import { useSelector, useDispatch } from 'hooks/store';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { prevPage, nextPage, setCurrentPage } from 'config/store/paginator';
import Button from './components/Button';

interface Props {
  lastPage: number;
  stepPaginator?: number;
}

const initialPage = 1;

function Paginator({ lastPage, stepPaginator = 4 }: Props) {
  const currentPage = useSelector(state => state.paginator.value);
  const dispatch = useDispatch();

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
            if (nextPage < calculateRange[0] && nextPage !== initialPage) {
              setInitialRange(nextPage - stepPaginator + 1);
            }
            dispatch(prevPage());
          }}
        >
          <ArrowBackIcon />
        </Button>
      )}
      <Button
        onClick={() => {
          dispatch(setCurrentPage(initialPage));
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
          onClick={() => dispatch(setCurrentPage(r))}
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
              dispatch(setCurrentPage(newInitialRange));
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
            dispatch(setCurrentPage(lastPage));
            return newInitialRange;
          })
        }
      >
        {lastPage}
      </Button>
      {currentPage !== lastPage && (
        <Button
          onClick={() => {
            const nextPageCounter = currentPage + 1;
            dispatch(nextPage());
            if (nextPageCounter > calculateRange[calculateRange.length - 1] && nextPageCounter !== lastPage) {
              setInitialRange(nextPageCounter);
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
