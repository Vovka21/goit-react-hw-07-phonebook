import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://620d206db573632593a77013.mockapi.io/api/',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      // query: name => `/contact/${name}`,
      query: () => `/contact`,
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contact/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation } = contactApi;
