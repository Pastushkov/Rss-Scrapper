import mongoose from "mongoose";

const RssSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, require: true },
  link: { type: String, required: true, unique: true },
  pubDate: { type: Date, required: true },
  media: {type:String},
  category: [{ type: String }],
  source: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Rss", RssSchema);
