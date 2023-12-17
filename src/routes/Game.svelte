<script>
  import { resolveRoute } from "$app/paths";
  import { getRandomHand, judgeGame } from "../utils/helper";
  export let bet;
  export let rewardTime;
  export let gameOn;
  let isDone = false;
  let yourHand;
  let cpuHand;
  $: {
    const result = judgeGame(yourHand, cpuHand);
    if (result.judge === "Lose") {
      bet = 0;
    }
    rewardTime = result.rewardTime;
    isDone = result.isDone;
    gameOn = !result.isDone;
  }
</script>

{#if yourHand}
  <p>Your Hand:{yourHand} CPU Hand: {cpuHand}</p>
{/if}
{#if !isDone}
  <button
    on:click="{() => {
      yourHand = 'Rock';
      cpuHand = getRandomHand();
    }}">Rock</button
  >
  <button
    on:click="{() => {
      yourHand = 'Paper';
      cpuHand = getRandomHand();
    }}">Paper</button
  >
  <button
    on:click="{() => {
      yourHand = 'Scissors';
      cpuHand = getRandomHand();
    }}">Scissors</button
  >
{/if}
