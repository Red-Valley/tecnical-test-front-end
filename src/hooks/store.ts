import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRoot,
  useSelector as useSelectorRoot
} from 'react-redux';

import type { AppDispatch, RootState } from 'config/store';

export const useDispatch = () => useDispatchRoot<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRoot;
