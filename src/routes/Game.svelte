<script>
  import RandomImage from "./RandomImage.svelte";
  import { getRandomHand, judgeGame } from "../utils/helper";
  export let bet;
  export let rewardTime;
  export let gameOn;

  const hands = ["Rock", "Paper", "Scissors"];
  let isDone = false;
  let message;
  let yourHand;
  let cpuHand;
  let isStop = false;

  $: {
    const result = judgeGame(yourHand, cpuHand);
    if (result.judge === "Lose") {
      message = "You Lost";
      isStop = true;
      setTimeout(() => {
        bet = 0;
        isDone = result.isDone;
        gameOn = !result.isDone;
        isStop = false;
      }, 4000);
    } else if (result.judge === "Tie") {
      message = "Choose your hand again!!";
      isStop = true;
      setTimeout(() => {
        yourHand = null;
        cpuHand = null;
        isStop = false;
      }, 2000);
    } else {
      message = "You Won";
      isStop = true;
      setTimeout(() => {
        rewardTime = result.rewardTime;
        isDone = result.isDone;
        gameOn = !result.isDone;
        isStop = false;
      }, 4000);
    }
  }
</script>

<div class="messageBoard">
  {#if yourHand}
    <p>{message}</p>
  {/if}
</div>
{#if !isDone}
  <RandomImage {cpuHand} />
  <div class="buttons">
    {#each hands as hand, i}
      <button
        class="{hand} hand {yourHand === hand ? 'selected' : ''}"
        disabled="{isStop}"
        on:click="{() => {
          yourHand = hand;
          cpuHand = getRandomHand();
        }}">{hand}</button
      >
    {/each}
  </div>
{/if}

<style lang="scss">
  .messageBoard {
    height: 50px;
  }
  .hand {
    font-size: 1.6rem;
    color: blue;
    background-size: cover;
    width: 150px;
    height: 180px;
    border: none;
    cursor: pointer;
  }
  .selected {
    transform: sclae(1.1);
    outline: 3px blue solid;
  }
  .hand:hover {
    transform: scale(1.1);
  }
  .Rock {
    background-image: url("../assets/images/grey-rock.png");
  }
  .Paper {
    background-image: url("../assets/images/grey-paper.png");
  }
  .Scissors {
    background-image: url("../assets/images/grey-scissors.png");
  }
</style>
