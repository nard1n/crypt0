import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f12b730b50msh4aa304f79102f3bp1300aajsn810a83167c1c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPAth: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endPoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges');
        })
    })
});