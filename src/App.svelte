<script>
import { title, days, last_date } from './lib/stores';
import { fade, fly } from 'svelte/transition'
let green = '#00fa9a';
let dark = '#343648'
let light = '#fff'

let options_height = '0px';

let current_date = new Date().getTime()
console.log(Date(current_date))

// let month_days = [
//   31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31
// ]


// perhaps on:change of the date number, check if index of day is 49 and set toggle to change donee to true
// next shift array back

function init() {
  for (let index = 0; index < 49; index++) {
    // days = [...days, {number: index},{opacity: index / 100}];
    $days[index] = {done: false};
  }
}


function toggle() {
  $days[48].done = !$days[48].done;
}

function advance() {
  $days.shift();
  $days = [...$days, {done: false}]
}

function compare_date() {
  let date_difference;
  
  // advances the graph forward by the amount of days passed
  if (current_date !== $last_date) {
    date_difference = new Date(current_date - $last_date);
    console.log(date_difference.getDate());
    console.log(date_difference.getMonth());


    for (let i = 0; i < date_difference.getDate() - 1; i++) {
      advance();
    }
    $last_date = current_date;
  }
}

compare_date();

function toggle_options() {
  if (options_height === '120px') {
    options_height = '0px';
  } else {
    options_height = '120px';
  }
}

</script>

<div class="main">
  <span contenteditable="true" bind:innerHTML={$title}></span>
  <div class="grid">
      {#each $days as day}
        <div class="day"
          style:background-color={day.done ? green : dark}
          style:opacity={day.opacity}>
        </div>
      {/each}
  </div>
  <button class="btn" on:click={toggle}
    style:background-color={$days[48].done ? green : dark}
    style:color={$days[48].done ? dark : light}>
    {$days[48].done ? 'done' : 'done?'}
  </button>

  <span on:click={toggle_options} style:font-size="2.5rem">⋯</span>

  <div class="options" style:height={options_height}>
    {#if options_height === '120px'}
      <button class="btn" on:click={advance} transition:fly={{x: -100, duration: 250}}>advance day</button>
      <button class="btn" on:click={advance} transition:fly={{x: -100, duration: 250}}>add graph</button>
      <button class="btn red" on:click={init} transition:fly={{x: 100, duration: 250}}>initialise</button>
      <button class="btn red" on:click={init} transition:fly={{x: 100, duration: 250}}>delete graph</button>
    {/if}
  </div>
</div>



<style>
.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 80px 1fr 80px;
  /* gap: 20px; */
  height: 100%;
}

.options {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  background-color: #1e1f29;
  transition: height .5s;
  width: 100%;
}

span {
  font-size: 2rem;
  text-align: center;
  margin: auto;
  color: #fff;
  cursor: pointer;
}

.btn {
  font-size: 1.3rem;
  text-align: center;
  margin: auto;
  background-color: #fff;
  width: 140px;
  height: 35px;
  box-sizing: content-box;
  border-radius: 10px;
  border: none;
  color: #000;
  cursor: pointer;
}

.red {
  background-color: #fc3b44;
  color: #fff;
}

.grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(7, 1fr);;
  width: 300px;
  height: 300px;
  margin: auto;
  background-color: #1e1f29;
  border-radius: 20px;
  gap: 5px;
  padding: 20px;
  /* border: 1px solid white; */
}

.day {
  width: auto;
  height: auto;
  font-size: 1rem;
  background-color: #00fa9a;
  /* padding: 5px; */
  border-radius: 8px;
  text-align: center;
  color: #fff;
}

</style>
