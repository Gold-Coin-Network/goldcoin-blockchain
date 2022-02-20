import { createApi } from '@reduxjs/toolkit/query/react';
import goldcoinLazyBaseQuery from './goldcoinLazyBaseQuery';

export const baseQuery = goldcoinLazyBaseQuery({});

export default createApi({
  reducerPath: 'goldcoinApi',
  baseQuery,
  endpoints: () => ({}),
});
