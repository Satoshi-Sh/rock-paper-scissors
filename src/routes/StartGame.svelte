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

<button on:click="{increaseBet}">Insert Coin</button>
{#if noMore}
  <p>You cannot bet more than 3</p>
{/if}
{#if bet > 0}
  <button on:click="{startGame}">Start Game</button>
{/if}
