export const getRemark = (percentage: number) => {
  if (percentage >= 90 && percentage <= 100) {
    return "Excellent";
  } else if (percentage >= 75 && percentage < 90) {
    return "Good";
  } else if (percentage >= 50 && percentage < 75) {
    return "Average";
  } else if (percentage >= 30 && percentage < 50) {
    return "Below Average";
  } else if (percentage >= 0 && percentage < 30) {
    return "Poor";
  } else {
    return "Invalid percentage";
  }
};
