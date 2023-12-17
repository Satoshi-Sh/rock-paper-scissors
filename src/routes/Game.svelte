<script>
  import { resolveRoute } from "$app/paths";
  import { getRandomHand, judgeGame } from "../utils/helper";
  export let bet;
  export let rewardTime;
  export let gameOn;
  const hands = ["Rock", "Paper", "Scissors"];
  let isDone = false;
  let message;
  let yourHand;
  let cpuHand;
  $: {
    const result = judgeGame(yourHand, cpuHand);
    if (result.judge === "Lose") {
      message = "You Lost";
      setTimeout(() => {
        bet = 0;
        isDone = result.isDone;
        gameOn = !result.isDone;
      }, 3000);
    } else {
      rewardTime = result.rewardTime;
      isDone = result.isDone;
      gameOn = !result.isDone;
    }
  }
</script>

<div class="messageBoard">
  {#if yourHand}
    <p>Your Hand:{yourHand} CPU Hand: {cpuHand}</p>
  {/if}
</div>
{#if !isDone}
  <div class="buttons">
    {#each hands as hand, i}
      <button
        class="{hand} hand"
        on:click="{() => {
          yourHand = hand;
          cpuHand = getRandomHand();
        }}">{hand}</button
      >
    {/each}
  </div>
{/if}

<style>
  .messageBoard {
    height: 30px;
  }
  .hand {
    font-size: 1.6rem;
    color: blue;
    background-size: cover; /* Adjust as needed */
    width: 150px; /* Set the width of the button */
    height: 180px; /* Set the height of the button */
    border: none; /* Remove default button border */
    cursor: pointer;
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
