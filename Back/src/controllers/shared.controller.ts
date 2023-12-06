import axios from "axios";
import { Request, Response } from "express";
import config from "../config/config";
import Rss from "../models/rss";
import jwt from "jsonwebtoken";

const shareToMedium = async (req: Request, res: Response) => {
  const { id } = req.params;
  let article;
  try {
    article = await Rss.findById(id);
  } catch (e) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e,
    });
  }
  if (!article) {
    return res.status(404).json({
      status: false,
      payload: null,
      error: "Article not found",
    });
  }

  const data = {
    title: article.title,
    contentFormat: "html",
    content: `<h1>${article.title}</h1> ${
      article.media && `<br/> <img src='${article.media}'/>`
    } <br/>  ${article.description} <br/> <br/> link: ${article.link}`,
    publishStatus: "public",
    tags: article.category,
    canonicalUrl: article.link,
  };

  let response;
  let error;
  try {
    response = await axios.post(
      `https://api.medium.com/v1/users/${config.mediumUserId}/posts`,
      data,
      {
        headers: {
          Authorization: `Bearer ${config.mediumToken}`,
        },
      }
    );
  } catch (e:any) {
    error = e.response.data.errors[0]
    response = null;
  }

  if (!response){ 
    return res.status(400).json({
      status:false,
      payload:null,
      error
    })
  }

  article = null;
  const mediumlUrl = response?.data?.data?.url ?? "";
  try {
    article = await Rss.findOneAndUpdate(
      { _id: id },
      {
        mediumlUrl,
      },
      {
        new: true,
      }
    );
  } catch (e) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: "Internal server error",
    });
  }
  return res.status(200).json({
    status: true,
    error: null,
    payload: article,
  });
};

const shareToGhost = async (req: Request, res: Response) => {
  const { id } = req.params;
  let article;
  try {
    article = await Rss.findById(id);
  } catch (e) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: e,
    });
  }
  if (!article) {
    return res.status(404).json({
      status: false,
      payload: null,
      error: "Article not found",
    });
  }

  const [keyid, secret] = config.ghostAdminKey.split(":");

  const token = jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid,
    algorithm: "HS256",
    expiresIn: "1m",
    audience: `/admin/`,
  });

  const data = {
    posts: [
      {
        title: article.title,
        tags: article.category,
        html: `<h1>${article.title}</h1> ${
          article.media && `<br/> <img src='${article.media}'/>`
        } <br/>  ${article.description} <br/> <br/> link: ${article.link}`,
        status: "published",
      },
    ],
  };

  let response;
  try {
    response = await axios.post(
      `${config.ghostUrl}/ghost/api/admin/posts?source=html`,
      data,
      {
        headers: {
          Authorization: `Ghost ${token}`,
        },
      }
    );
  } catch (e) {
    response = null;
  }
  article = null;
  const ghostUrl = response?.data?.posts?.[0]?.url ?? "";
  try {
    article = await Rss.findOneAndUpdate(
      { _id: id },
      {
        ghostUrl,
      },
      {
        new: true,
      }
    );
  } catch (e) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: "Internal server error",
    });
  }
  return res.status(200).json({
    status: true,
    error: null,
    payload: article,
  });
};

export default {
  shareToMedium,
  shareToGhost,
};
