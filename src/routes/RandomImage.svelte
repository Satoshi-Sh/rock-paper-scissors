<script>
  import rockImg from "../assets/images/grey-rock.png";
  import paperImg from "../assets/images/grey-paper.png";
  import scisorsImg from "../assets/images/grey-scissors.png";
  import { getRandomHand } from "../utils/helper";
  import { onMount, onDestroy } from "svelte";

  const images = { Rock: rockImg, Paper: paperImg, Scissors: scisorsImg };

  export let cpuHand;
  let intervalId;
  let temp = "Rock";
  // Start the interval when the component is mounted
  onMount(() => {
    intervalId = setInterval(() => {
      temp = getRandomHand();
    }, 100);
  });

  // Clear the interval when the component is destroyed
  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="cpuDiv">
  <img
    class="cpu"
    src="{cpuHand ? images[cpuHand] : images[temp]}"
    alt="CPU hand"
  />
  <h4>CPU</h4>
</div>

<style lang="scss">
  .cpu {
    width: 150px; /* Set the width of the button */
    height: 180px;
  }
  .cpuDiv {
    border: black 4px solid;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
  }
  .cpuDiv > h4 {
    height: 5px;
  }
</style>
