import rssConfig from "../config/rss";
import axios from "axios";
import xml2js from "xml2js";

import Rss from "../models/rss";

const parseResponse = (data: any) => {
  return new Promise<{ error: any, result: any }>((resolve) => {
    xml2js.parseString(data, (err: any, result: any) => {
      if (err) {
        console.log(err);
        resolve({ error: err, result: null });
      }
      resolve({ result: result.rss.channel[0].item, error: null });
    });
  });
};

const getCategoty = (rss: any) => {
  const category: string[] = [];
  rss.category?.map((item: any) => {
    if (typeof item === 'object' && typeof item._ === 'string') {
      category.push(item._)
    } else if (typeof item === 'string') {
      category.push(item)
    }
  });

  return category;
};

const rssRequests = async () => {
  console.log("Start rss parser requests");
  for (let url of Object.keys(rssConfig.rssUrls)) {
    let response;
    try {
      response = await axios.get(rssConfig.rssUrls[url]);
    } catch (e) {
      console.log(e);
      continue;
    }
    const { data } = response;
    const { error, result }: { error: any, result: any } = await parseResponse(data);
    if (error) continue;
    for (let rss of result) {
      const exist = await Rss.findOne({ link: rss.link[0] });
      if (!exist) {
        try {
          await Rss.create({
            title: rss.title[0],
            description: rss.description[0],
            link: rss.link[0],
            pubDate: new Date(rss.pubDate[0]),
            source: url,
            media: rss["media:content"]?.[0]?.["$"].url,
            category: getCategoty(rss),
            content: rss["content:encoded"]?.[0],
          });
        } catch (e: any) {
          console.log(e.toString());

        }
      }

    }
  }
  console.log("End of rss parser requests");
};

export default rssRequests;
