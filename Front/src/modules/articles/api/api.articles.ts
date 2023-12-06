import { AxiosResponse } from "axios";
import axiosInstance from "services/axiosInstance";
import {
  FetchArticleById,
  FetchArticlesList,
  FetchCreateArticle,
  FetchDeleteArticleyId,
  FetchEditArticleById,
  IQuery,
  FetchUploadToMedium,
  FetchUploadToGhost,
} from "../store/types";

const ARTICLES_URL = "/articles";
const CATEGORY_URL = "/categories";
const SOURCE_URL = "/source";
const UPLOAD_URL = "/share";

const createQuery = ({
  limit,
  offset,
  category,
  search,
  source,
  sortBy,
}: IQuery): string => {
  let query = [] as string[];
  if (limit) query = [...query, `?limit=${limit}`];
  if (offset) query = [...query, `offset=${offset}`];
  if (category) query = [...query, `category=${category}`];
  if (search) query = [...query, `search=${search}`];
  if (source) query = [...query, `source=${source}`];
  if (sortBy) query = [...query, `sortBy=${sortBy}`];
  return query.length ? `${query.join("&")}` : "";
};

export const getArticlesList = (
  query: FetchArticlesList["payload"]
): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${ARTICLES_URL}${createQuery(query)}`);

export const getCategoryList = (): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${ARTICLES_URL}${CATEGORY_URL}`);

export const getSourceList = (): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${ARTICLES_URL}${SOURCE_URL}`);

export const deleteArticleById = (
  id: FetchDeleteArticleyId["payload"]
): Promise<AxiosResponse<any>> => axiosInstance.delete(`${ARTICLES_URL}/${id}`);

export const createArticle = (
  body: FetchCreateArticle["payload"]
): Promise<AxiosResponse<any>> => axiosInstance.post(`${ARTICLES_URL}`, body);

export const getArticleById = (
  id: FetchArticleById["payload"]
): Promise<AxiosResponse<any>> => axiosInstance.get(`${ARTICLES_URL}/${id}`);

export const editArticleyId = ({
  _id,
  ...body
}: FetchEditArticleById["payload"]): Promise<AxiosResponse<any>> =>
  axiosInstance.patch(`${ARTICLES_URL}/${_id}`, body);

export const uploadToMedium = ({
  id,
}: FetchUploadToMedium["payload"]): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${UPLOAD_URL}/medium/${id}`);

export const uploadToGhost = ({
  id,
}: FetchUploadToGhost["payload"]): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${UPLOAD_URL}/ghost/${id}`);
