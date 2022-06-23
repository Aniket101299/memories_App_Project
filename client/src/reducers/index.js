import { combineReducers } from "redux";

import posts from "./posts";

export const reducers = combineReducers({ posts });

 //  posts: posts,  we can keep only posts also bcz both key and value are same