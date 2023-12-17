const hands = ["Rock", "Paper", "Scissors"];
export const getRandomHand = () => {
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
};

export const judgeGame = (you, cpu) => {
  const result = {
    rewardTime: false,
    isDone: false,
  };
  if (you == cpu) {
    result["judge"] = "Tie";
  } else if (
    (you === "Rock" && cpu === "Scissors") ||
    (you === "Paper" && cpu === "Rock") ||
    (you === "Scissors" && cpu === "Paper")
  ) {
    result["rewardTime"] = true;
    result["judge"] = "Win";
  } else {
    result["isDone"] = true;
    result["judge"] = "Lose";
  }
  return result;
};
