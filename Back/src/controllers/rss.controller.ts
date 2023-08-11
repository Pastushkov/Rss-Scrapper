import { Request, Response } from "express";
import { IRssQuery, IRssRawQuery } from "../config/interfaces";

import Rss from "../models/rss"
import rssConfig from "../config/rss";

const generateQuery = (rawQuery: IRssRawQuery) => {
  const { source, search, category, sortBy } = rawQuery;
  const query: IRssQuery = {};
  if (source) {
    query.source = source;
  }
  if (search) {
    query["$or"] = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  if (category) {
    query.category = category;
  }

  
  return query;
};

const getList = async (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  const sortBy = req.query.sortBy ?? 'asc'
  const query = generateQuery(req.query);

  let response;
  let total;

  try {
    total = await Rss.count(query);
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }

  if (total === 0) {
    return res.status(200).json({
      status: true,
      payload: {
        list: [],
        total
      },
      error: null
    })
  }

  try {
    response = await Rss.find(
      query ,
      {},
      {
        limit: limit  ? +limit : undefined,
        skip: offset ? +offset : undefined,
        sort: {
          pubDate: sortBy==='asc' ? 1 : -1
        }

      },
    );
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }
  return res.status(200).json({
    status: true,
    payload: {
      list: response,
      total,
    },
    error: null,
  });
};

const getArticleById = async (req: Request, res: Response) => {
  const { _id } = req.params

  let response;
  try {
    response = await Rss.findOne({ _id })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }

  return res.status(200).json({
    status: true,
    payload: response,
    error: null
  })

}

const createArticle = async (req: Request, res: Response) => {
  const { link } = req.body
  let exist;
  try {
    exist = await Rss.findOne({
      link
    })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }

  if (exist) {
    return res.status(400).json({
      status: false,
      payload: null,
      error: 'Article already exist'
    })
  }
  exist = null

  let response;
  try {
    response = await Rss.create({ ...req.body, link })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }

  return res.status(201).json({
    status: true,
    payload: response,
    error: null
  })
}

const updateArticleById = async (req: Request, res: Response) => {
  const { _id } = req.params
  let exist;
  try {
    exist = await Rss.findOne({ _id })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }
  if (!exist) {
    return res.status(404).json({
      status: false,
      payload: null,
      error: 'Article not found',
    });
  }
  exist = null;

  let article;
  try {
    article = await Rss.findOneAndUpdate({ _id }, { ...req.body }, { new: true })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }

  return res.status(200).json({
    status: true,
    payload: article,
    error: null
  })
}

const deleteArticleById = async (req: Request, res: Response) => {
  const { _id } = req.params;
  let response;
  try {
    response = await Rss.findOneAndDelete({ _id })
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }
  return res.status(200).json({
    status: true,
    payload: response?._id,
    error: null
  })
}

const getCategoryList = async (req: Request, res: Response) => {
  let response;
  try {
    response = await Rss.find()
  } catch (e: any) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e.toString(),
    });
  }
  const categoriesSet = new Set<string>();
  response.forEach(({ category }) => {
    category.forEach((item) => {
      categoriesSet.add(item)
    })
  })
  const categoriesList = Array.from(categoriesSet)
  return res.status(200).json({
    status: true,
    payload: categoriesList,
    error: null
  })
}

const getSourceList = async (req: Request, res: Response) => {
  const sourceList = Object.keys(rssConfig.rssUrls)
  return res.status(200).json({
    status: true,
    payload: sourceList,
    error: null
  })
}

export default {
  getList,
  createArticle,
  getSourceList,
  getArticleById,
  getCategoryList,
  updateArticleById,
  deleteArticleById
};
