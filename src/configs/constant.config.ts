import { config } from "dotenv";

config();

export const constant = {
  expiresIn: "30m",
  refreshIn: "1h",
  secretKey: process.env.SECRET_KEY as string,
  maleUrl: process.env.AVA_MALE_URL,
  femaleUrl: process.env.AVA_FEMALE_URL,
  coverImgUrl: process.env.COVER_IMG_URL,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  medalImgUrl: process.env.MEDAL_URL
};
