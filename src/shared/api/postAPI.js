import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAllPosts:
            build.query({
                query: ({limit = 20, page = 1}) => ({
                    url: 'posts',
                    params: {
                        _limit: limit,
                        _page: page
                    }
                })
            }),
        fetchCurrentPost:
            build.query({
                query: (id) => ({
                    url: `posts/${id}`
                })
            })
    })
})