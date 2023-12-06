/* eslint-disable no-underscore-dangle */
import { articleTypes } from "./actionTypes";
import { IArticleState, AricleActions } from "./types";

const initialState: IArticleState = {
  isLoading: false,
  list: null,
  total: 0,
  categories: [],
  isLoadigCategory: false,
  sourceList: [],
  isLoadigSource: false,
  isLoadingSelectedArticle: false,
  selectedArticle: null,
};

export default (state = initialState, action: AricleActions): IArticleState => {
  switch (action.type) {
    case articleTypes.FETCH_ARTICLES_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case articleTypes.SET_ARTICLES_LIST:
      return {
        ...state,
        isLoading: false,
        total: action.payload.total,
        list: action.payload.list,
      };
    case articleTypes.FETCH_CATEGORY_LIST:
      return {
        ...state,
        isLoadigCategory: true,
      };
    case articleTypes.SET_CATEGORY_LIST:
      return {
        ...state,
        isLoadigCategory: false,
        categories: action.payload,
      };
    case articleTypes.FETCH_SOURCE_LIST:
      return {
        ...state,
        isLoadigSource: true,
      };
    case articleTypes.SET_SOURCE_LIST:
      return {
        ...state,
        isLoadigSource: false,
        sourceList: action.payload,
      };
    case articleTypes.DROP_ARTICLES:
      return {
        ...state,
        isLoadigCategory: false,
        isLoadigSource: false,
        isLoading: false,
        isLoadingSelectedArticle:false
      };
    case articleTypes.FETCH_DELETE_ARTICLE_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case articleTypes.SET_DELETE_ARTICLE_BY_ID:
      return {
        ...state,
        isLoading: false,
        list: state.list?.filter(({ _id }) => _id !== action.payload) ?? [],
      };
    case articleTypes.FETCH_CREATE_ARTICLE:
      return {
        ...state,
        isLoading: true,
      };
    case articleTypes.SET_CREATE_ARTICLE:
      return {
        ...state,
        isLoading: false,
        list: [...(state.list ?? []), action.payload],
      };
    case articleTypes.FETCH_ARTICLE_BY_ID:
      return {
        ...state,
        isLoadingSelectedArticle: true,
      };
    case articleTypes.SET_ARTICLE_BY_ID:
      return {
        ...state,
        isLoadingSelectedArticle: false,
        selectedArticle: action.payload,
      };
    case articleTypes.FETCH_EDIT_ARTICLE_BY_ID:
      return {
        ...state,
        isLoadingSelectedArticle: true,
      };
    case articleTypes.SET_EDIT_ARTICLE_BY_ID:
      return {
        ...state,
        isLoadingSelectedArticle: false,
        list:
          state.list?.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ) ?? [],
      };

    case articleTypes.FETCH_UPLOAD_TO_MEDIUM:
      return {
        ...state,
        isLoadingSelectedArticle: true,
      };

    case articleTypes.FETCH_UPLOAD_TO_GHOST:
      return {
        ...state,
        isLoadingSelectedArticle: true,
      };
    default:
      return {
        ...state,
      };
  }
};
