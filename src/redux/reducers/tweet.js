import * as t from "../types/tweet";
import { loadState } from "../localStorage";

const persistedState = loadState();

const initialState = {
  theme: persistedState?.tweet?.theme || "light",
  user: {
    profilePhoto: {
      frame: persistedState?.tweet?.user?.profilePhoto?.frame || "circle",
      photo: persistedState?.tweet?.user?.profilePhoto?.photo || null,
    },
    name: persistedState?.tweet?.user?.name || null,
    username: persistedState?.tweet?.user?.username || null,
    isVerifiedAccount: persistedState?.tweet?.user?.isVerifiedAccount || false,
  },
  content: {
    text: persistedState?.tweet?.content?.text || null,
    image: null,
  },
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.UPDATE_TWEET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
