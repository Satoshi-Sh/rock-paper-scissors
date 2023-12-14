<script>
  import { getRandomHand, judgeGame } from "../utils/helper";
  let yourHand;
  let cpuHand;
  $: result = judgeGame(yourHand, cpuHand);
</script>

{#if yourHand}
  <p>Your Hand:{yourHand} CPU Hand: {cpuHand}</p>
  <p>{result}</p>
{/if}
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
