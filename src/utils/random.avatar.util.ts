import { constant } from "../configs/constant.config";

const { maleUrl, femaleUrl } = constant;
const length = 5;

export const randomAvatar = (isMale = true): string => {
  const randIdx = Math.floor(Math.random() * length);

  const maleURLArr: Array<string> = Array.from({ length }).map(
    (_, idx) => `${maleUrl}${idx + 1}.jpg`
  );

  const femaleURLArr: Array<string> = Array.from({ length }).map(
    (_, idx) => `${femaleUrl}${idx + 1}.jpg`
  );

  return isMale ? maleURLArr[randIdx] : femaleURLArr[randIdx];
};
