import { articleTypes } from "./actionTypes";
import {
  FetchArticleById,
  FetchArticlesList,
  FetchCreateArticle,
  FetchDeleteArticleyId,
  FetchEditArticleById,
  FetchUploadToGhost,
  FetchUploadToMedium,
  FethCategoryList,
  FethSourceList,
} from "./types";

export const fetchArticlesListAction = (
  payload: FetchArticlesList["payload"]
): FetchArticlesList => ({
  type: articleTypes.FETCH_ARTICLES_LIST,
  payload,
});

export const fetchCategoryListAction = (): FethCategoryList => ({
  type: articleTypes.FETCH_CATEGORY_LIST,
});

export const fetchSourceListAction = (): FethSourceList => ({
  type: articleTypes.FETCH_SOURCE_LIST,
});

export const dropArticles = () => ({
  type: articleTypes.DROP_ARTICLES,
});

export const fetchDeleteArticleByIdAction = (
  payload: FetchDeleteArticleyId["payload"]
): FetchDeleteArticleyId => ({
  type: articleTypes.FETCH_DELETE_ARTICLE_BY_ID,
  payload,
});

export const fetchCreateArticleAction = (
  payload: FetchCreateArticle["payload"]
): FetchCreateArticle => ({
  type: articleTypes.FETCH_CREATE_ARTICLE,
  payload,
});

export const fetchArticleByIdAction = (
  payload: FetchArticleById["payload"]
): FetchArticleById => ({
  type: articleTypes.FETCH_ARTICLE_BY_ID,
  payload,
});

export const fetchEditArticleById = (
  payload: FetchEditArticleById["payload"]
): FetchEditArticleById => ({
  type: articleTypes.FETCH_EDIT_ARTICLE_BY_ID,
  payload,
});

export const fetchUploadToMedium = (payload: FetchUploadToMedium['payload']): FetchUploadToMedium => ({
  type: articleTypes.FETCH_UPLOAD_TO_MEDIUM,
  payload
});

export const fetchUploadToGhost = (payload: FetchUploadToGhost['payload']): FetchUploadToGhost => ({
  type: articleTypes.FETCH_UPLOAD_TO_GHOST,
  payload
});
