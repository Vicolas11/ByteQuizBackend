import { constant } from "../configs/constant.config";

const { coverImgUrl } = constant;
const length = 10;

export const randomCoverImg = (): string => {
  const randIdx = Math.floor(Math.random() * length);

  const coverURLArr: Array<string> = Array.from({ length }).map(
    (_, idx) => `${coverImgUrl}${idx}.jpg`
  );

  return coverURLArr[randIdx];
};
