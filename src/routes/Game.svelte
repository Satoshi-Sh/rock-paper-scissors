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
</style>
