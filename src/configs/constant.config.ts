import { config } from "dotenv";

config();

export const constant = {
  expiresIn: "1h",
  refreshIn: "2h",
  secretKey: process.env.SECRET_KEY as string,
  maleUrl: process.env.AVA_MALE_URL,
  femaleUrl: process.env.AVA_FEMALE_URL,
  coverImgUrl: process.env.COVER_IMG_URL,
  medalImgUrl: process.env.MEDAL_URL
};
