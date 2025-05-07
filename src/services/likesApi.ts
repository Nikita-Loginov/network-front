import type { Like } from "../types";
import { api } from "./api";

export const likesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    likePost: builder.mutation<Like, { postId: string }>({
      query: ({ postId }) => ({
        url: "/like",
        method: "POST",
        body: postId,
      }),
    }),
    unLikePost: builder.mutation<void, string>({
      query: (postId) => ({
        url: `/like/${postId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useLikePostMutation, useUnLikePostMutation } = likesApi;

export const {
  endpoints: { likePost, unLikePost },
} = likesApi;
