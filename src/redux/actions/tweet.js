import * as t from "../types/tweet";

export const updateTweetAction = (tweet) => {
  return {
    type: t.UPDATE_TWEET,
    payload: tweet,
  };
};
