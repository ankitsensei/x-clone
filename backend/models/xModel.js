import mongoose from "mongoose";

const xSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    media: {
      type: String,
    },
  },
  {
    timeStamps: true,
  },
);

export const xModel = mongoose.model("xModel", xSchema);
