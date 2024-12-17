"use client";

import APIHeader from "../APIHeader";

// AUTH API GATEWAY URL
// const LIBRARY_API_URL = `${process.env.BASE_URL}/library/admin`;

const apiTag = APIHeader.enhanceEndpoints({
  addTagTypes: ["Shared"],
});

export const ShareableMutation = apiTag.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.mutation({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersMutation } = ShareableMutation;
