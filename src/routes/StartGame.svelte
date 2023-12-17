<script>
  export let bet;
  export let coins;
  export let gameOn;
  let noMore;
  const increaseBet = () => {
    if (bet < 3) {
      bet += 1;
      coins -= 1;
    } else {
      noMore = true;
    }
  };
  const startGame = () => {
    gameOn = true;
  };
</script>

<div>
  <div class="messageDiv">
    {#if noMore}
      <p>You cannot bet more than 3</p>
    {/if}
  </div>

  <button on:click="{increaseBet}">Insert Coin</button>
  <div>
    {#if bet > 0}
      <button on:click="{startGame}">Start Game</button>
    {/if}
  </div>
</div>

<style>
  .messageDiv {
    height: 30px;
  }
</style>
