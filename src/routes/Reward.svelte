<script>
  export let bet;
  export let coins;
  export let gameOn;
  export let rewardTime;
  let times = 1;
  let intervalId;
  let gameEnd = false;
  $: gain = bet * times;

  const startInterval = () => {
    intervalId = setInterval(() => {
      times = Math.floor(Math.random() * 5) + 1;
    }, 300);
  };
  startInterval();
  const stopInterval = () => {
    clearInterval(intervalId);
    coins += gain;
    gameEnd = true;
    setTimeout(() => {
      gameOn = false;
      rewardTime = false;
      bet = 0;
    }, 3000);
  };
</script>

<h2>Reward</h2>
{#if gameEnd}
  You received {gain} Coins!!
{:else}
  <p>{bet} x {times} = {gain}</p>
  <button on:click="{stopInterval}">STOP</button>
{/if}
