import { api } from "./api";

export const followApi = api.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: ({ followingId }) => ({
        url: "/follow",
        method: "POST",
        body: {followingId},
      }),
    }),
    unfollow: builder.mutation<void, { followingId: string }>({
      query: ({ followingId }) => ({
        url: `/follow/${followingId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFollowUserMutation, useUnfollowMutation } = followApi;

export const {
  endpoints: { followUser, unfollow },
} = followApi;
