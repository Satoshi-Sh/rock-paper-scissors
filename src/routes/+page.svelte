<script>
  import StartGame from "./StartGame.svelte";
  import Game from "./Game.svelte";
  import Reward from "./Reward.svelte";
  let coins = 10;
  let bet = 0;
  let gameOn = false;
  let rewardTime = false;

  const startOver = () => {
    coins = 10;
  };

  $: isGameOver = coins + bet <= 0;
</script>

<div class="whole">
  <h1>Rock Paper Scissors</h1>
  {#if isGameOver}
    <h3>You are broke...</h3>
    <button on:click="{startOver}">Start Over</button>
  {:else}
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
  {/if}
</div>

<style lang="scss">
  $color: lightblue;
  .whole {
    background: $color;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  :global(button) {
    margin: 20px;
    padding: 20px;
    font-size: 1.1rem;
    border-radius: 40px;
  }
</style>
