<script>
  import { resolveRoute } from "$app/paths";
  import RandomImage from "./RandomImage.svelte";
  import { getRandomHand, judgeGame } from "../utils/helper";
  export let bet;
  export let rewardTime;
  export let gameOn;
  const hands = ["Rock", "Paper", "Scissors"];
  let isDone = false;
  let message;
  let yourHand;
  let intervalId;
  let cpuHand = "Rock";
  $: {
    const result = judgeGame(yourHand, cpuHand);
    if (result.judge === "Lose") {
      message = "You Lost";
      setTimeout(() => {
        bet = 0;
        isDone = result.isDone;
        gameOn = !result.isDone;
      }, 800);
    } else if (result.judge === "Tie") {
      message = "Choose your hand again!!";
    } else {
      rewardTime = result.rewardTime;
      isDone = result.isDone;
      gameOn = !result.isDone;
    }
  }
</script>

<div class="messageBoard">
  {#if yourHand}
    <p>{message}</p>
  {/if}
</div>
{#if !isDone}
  <RandomImage />
  <div class="buttons">
    {#each hands as hand, i}
      <button
        class="{hand} hand"
        on:click="{() => {
          yourHand = hand;
          cpuHand = cpuHand;
        }}">{hand}</button
      >
    {/each}
  </div>
{/if}

<style>
  .messageBoard {
    height: 50px;
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
