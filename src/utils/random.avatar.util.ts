import { constant } from "../configs/constant.config";

const { maleUrl, femaleUrl } = constant;
const length = 5;

export const randomAvatar = (isMale = true): string => {
  const randIdx = Math.floor(Math.random() * length);

  const maleURLArr: Array<string> = Array.from({ length }).map(
    (_, idx) => `${maleUrl}${idx}`
  );

  const femaleURLArr: Array<string> = Array.from({ length }).map(
    (_, idx) => `${femaleUrl}${idx}`
  );

  return isMale ? maleURLArr[randIdx] : femaleURLArr[randIdx];
};
