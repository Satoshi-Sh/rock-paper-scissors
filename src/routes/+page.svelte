<script>
  import StartGame from "./StartGame.svelte";
  import Game from "./Game.svelte";
  import Reward from "./Reward.svelte";
  let coins = 10;
  let bet = 0;
  let gameOn = false;
  let rewardTime = false;
</script>

<h1>Rock Paper Scissors</h1>
<p>Your Coins: {coins}</p>
<p>Bet: {bet}</p>

{#if gameOn}
  {#if rewardTime}
    <Reward bind:bet bind:coins bind:gameOn bind:rewardTime />
  {:else}
    <Game bind:bet bind:rewardTime bind:gameOn />
  {/if}
{:else}
  <StartGame bind:bet bind:coins bind:gameOn />
{/if}
