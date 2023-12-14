const hands = ["Rock", "Paper", "Scissors"];
export const getRandomHand = () => {
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
};

export const judgeGame = (you, cpu) => {
  if (you == cpu) {
    return "Tie";
  } else if (
    (you === "Rock" && cpu === "Scissors") ||
    (you === "Paper" && cpu === "Rock") ||
    (you === "Scissors" && cpu === "Paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
};
