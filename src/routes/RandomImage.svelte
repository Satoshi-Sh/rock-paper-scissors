<script>
  import rockImg from "../assets/images/grey-rock.png";
  import paperImg from "../assets/images/grey-paper.png";
  import scisorsImg from "../assets/images/grey-scissors.png";
  import { getRandomHand } from "../utils/helper";
  const images = { Rock: rockImg, Paper: paperImg, Scissors: scisorsImg };
  let intervalId;
  let temp = "Rock";
  intervalId = setInterval(() => {
    console.log(getRandomHand());
    temp = getRandomHand();
  }, 3000);
  $: clearInterval(intervalId);
</script>

<div class="cpuDiv">
  <img class="cpu" src="{images[temp]}" alt="CPU hand" />
  <h4>CPU</h4>
</div>

<style>
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
