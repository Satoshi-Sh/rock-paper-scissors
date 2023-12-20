import { c as create_ssr_component, o as onDestroy, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const StartGame_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".messageDiv.svelte-e1gay7,.startDiv.svelte-e1gay7{height:30px}",
  map: null
};
const StartGame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bet } = $$props;
  let { coins } = $$props;
  let { gameOn } = $$props;
  if ($$props.bet === void 0 && $$bindings.bet && bet !== void 0)
    $$bindings.bet(bet);
  if ($$props.coins === void 0 && $$bindings.coins && coins !== void 0)
    $$bindings.coins(coins);
  if ($$props.gameOn === void 0 && $$bindings.gameOn && gameOn !== void 0)
    $$bindings.gameOn(gameOn);
  $$result.css.add(css$3);
  return `<div><div class="messageDiv svelte-e1gay7">${``}</div> <button data-svelte-h="svelte-1ixapaz">Insert Coin</button> <div class="startDiv svelte-e1gay7">${bet > 0 ? `<button data-svelte-h="svelte-9s1l8m">Start Game</button>` : ``}</div> </div>`;
});
const rockImg = "/_app/immutable/assets/grey-rock.1c35af86.png";
const paperImg = "/_app/immutable/assets/grey-paper.70d25317.png";
const scisorsImg = "/_app/immutable/assets/grey-scissors.ee0d79c0.png";
const judgeGame = (you, cpu) => {
  const result = {
    rewardTime: false,
    isDone: false
  };
  if (you == cpu) {
    result["judge"] = "Tie";
  } else if (you === "Rock" && cpu === "Scissors" || you === "Paper" && cpu === "Rock" || you === "Scissors" && cpu === "Paper") {
    result["rewardTime"] = true;
    result["judge"] = "Win";
  } else {
    result["isDone"] = true;
    result["judge"] = "Lose";
  }
  return result;
};
const RandomImage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".cpu.svelte-1f147hi.svelte-1f147hi{width:150px;height:180px}.cpuDiv.svelte-1f147hi.svelte-1f147hi{border:black 4px solid;border-radius:20px;padding:10px;text-align:center}.cpuDiv.svelte-1f147hi>h4.svelte-1f147hi{height:5px}",
  map: null
};
const RandomImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = {
    Rock: rockImg,
    Paper: paperImg,
    Scissors: scisorsImg
  };
  let { cpuHand } = $$props;
  let intervalId;
  let temp = "Rock";
  onDestroy(() => {
    clearInterval(intervalId);
  });
  if ($$props.cpuHand === void 0 && $$bindings.cpuHand && cpuHand !== void 0)
    $$bindings.cpuHand(cpuHand);
  $$result.css.add(css$2);
  return `<div class="cpuDiv svelte-1f147hi"><img class="cpu svelte-1f147hi"${add_attribute("src", cpuHand ? images[cpuHand] : images[temp], 0)} alt="CPU hand"> <h4 class="svelte-1f147hi" data-svelte-h="svelte-1sir4mg">CPU</h4> </div>`;
});
const Game_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.messageBoard.svelte-153f2fh{height:50px}.hand.svelte-153f2fh{font-size:1.6rem;color:blue;background-size:cover;width:150px;height:180px;border:none;cursor:pointer}.selected.svelte-153f2fh{transform:sclae(1.1);outline:3px blue solid}.hand.svelte-153f2fh:hover{transform:scale(1.1)}.Rock.svelte-153f2fh{background-image:url("../assets/images/grey-rock.png")}.Paper.svelte-153f2fh{background-image:url("../assets/images/grey-paper.png")}.Scissors.svelte-153f2fh{background-image:url("../assets/images/grey-scissors.png")}',
  map: null
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bet } = $$props;
  let { rewardTime } = $$props;
  let { gameOn } = $$props;
  const hands = ["Rock", "Paper", "Scissors"];
  let isDone = false;
  let message;
  let yourHand;
  let cpuHand;
  let isStop = false;
  if ($$props.bet === void 0 && $$bindings.bet && bet !== void 0)
    $$bindings.bet(bet);
  if ($$props.rewardTime === void 0 && $$bindings.rewardTime && rewardTime !== void 0)
    $$bindings.rewardTime(rewardTime);
  if ($$props.gameOn === void 0 && $$bindings.gameOn && gameOn !== void 0)
    $$bindings.gameOn(gameOn);
  $$result.css.add(css$1);
  {
    {
      const result = judgeGame(yourHand, cpuHand);
      if (result.judge === "Lose") {
        message = "You Lost";
        isStop = true;
        setTimeout(
          () => {
            bet = 0;
            isDone = result.isDone;
            gameOn = !result.isDone;
            isStop = false;
          },
          4e3
        );
      } else if (result.judge === "Tie") {
        message = "Choose your hand again!!";
        isStop = true;
        setTimeout(
          () => {
            yourHand = null;
            cpuHand = null;
            isStop = false;
          },
          2e3
        );
      } else {
        message = "You Won";
        isStop = true;
        setTimeout(
          () => {
            rewardTime = result.rewardTime;
            isDone = result.isDone;
            gameOn = !result.isDone;
            isStop = false;
          },
          4e3
        );
      }
    }
  }
  return `<div class="messageBoard svelte-153f2fh">${yourHand ? `<p>${escape(message)}</p>` : ``}</div> ${!isDone ? `${validate_component(RandomImage, "RandomImage").$$render($$result, { cpuHand }, {}, {})} <div class="buttons">${each(hands, (hand, i) => {
    return `<button class="${escape(hand, true) + " hand " + escape(yourHand === hand ? "selected" : "", true) + " svelte-153f2fh"}" ${isStop ? "disabled" : ""}>${escape(hand)}</button>`;
  })}</div>` : ``}`;
});
const Reward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gain;
  let { bet } = $$props;
  let { coins } = $$props;
  let { gameOn } = $$props;
  let { rewardTime } = $$props;
  let times = 1;
  const startInterval = () => {
    setInterval(
      () => {
        times = Math.floor(Math.random() * 5) + 1;
      },
      300
    );
  };
  startInterval();
  if ($$props.bet === void 0 && $$bindings.bet && bet !== void 0)
    $$bindings.bet(bet);
  if ($$props.coins === void 0 && $$bindings.coins && coins !== void 0)
    $$bindings.coins(coins);
  if ($$props.gameOn === void 0 && $$bindings.gameOn && gameOn !== void 0)
    $$bindings.gameOn(gameOn);
  if ($$props.rewardTime === void 0 && $$bindings.rewardTime && rewardTime !== void 0)
    $$bindings.rewardTime(rewardTime);
  gain = bet * times;
  return `<h2 data-svelte-h="svelte-114qn0x">Reward</h2> ${`<p>${escape(bet)} x ${escape(times)} = ${escape(gain)}</p> <button data-svelte-h="svelte-dcso9f">STOP</button>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".whole.svelte-hk004k{background:lightblue;margin:0;padding:0;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}button{margin:20px;padding:20px;font-size:1.1rem;border-radius:40px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isGameOver;
  let coins = 10;
  let bet = 0;
  let gameOn = false;
  let rewardTime = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isGameOver = coins + bet <= 0;
    $$rendered = `<div class="whole svelte-hk004k"><h1 data-svelte-h="svelte-1dr2ito">Rock Paper Scissors</h1> ${isGameOver ? `<h3 data-svelte-h="svelte-2bhf9u">You are broke...</h3> <button data-svelte-h="svelte-18h12vy">Start Over</button>` : `<p>Your Coins: ${escape(coins)}</p> <p>Bet: ${escape(bet)}</p> ${gameOn ? `${rewardTime ? `${validate_component(Reward, "Reward").$$render(
      $$result,
      { bet, coins, gameOn, rewardTime },
      {
        bet: ($$value) => {
          bet = $$value;
          $$settled = false;
        },
        coins: ($$value) => {
          coins = $$value;
          $$settled = false;
        },
        gameOn: ($$value) => {
          gameOn = $$value;
          $$settled = false;
        },
        rewardTime: ($$value) => {
          rewardTime = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(Game, "Game").$$render(
      $$result,
      { bet, rewardTime, gameOn },
      {
        bet: ($$value) => {
          bet = $$value;
          $$settled = false;
        },
        rewardTime: ($$value) => {
          rewardTime = $$value;
          $$settled = false;
        },
        gameOn: ($$value) => {
          gameOn = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : `${validate_component(StartGame, "StartGame").$$render(
      $$result,
      { bet, coins, gameOn },
      {
        bet: ($$value) => {
          bet = $$value;
          $$settled = false;
        },
        coins: ($$value) => {
          coins = $$value;
          $$settled = false;
        },
        gameOn: ($$value) => {
          gameOn = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
