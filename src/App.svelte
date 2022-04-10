<script>
import { days } from './lib/stores';
import { fade } from 'svelte/transition'
let green = '#00fa9a';
let dark = '#343648'
let light = '#fff'

let options_height = '0px';

let current_date = new Date().getDate();
console.log(current_date)

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

}

function toggle_options() {
  if (options_height === '100px') {
    options_height = '0px';
  } else {
    options_height = '100px';
  }
}

</script>

<div class="main">
  <span contenteditable="true">days</span>
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

  <span on:click={toggle_options}>⋯</span>

  <div class="options" style:height={options_height}>
    {#if options_height === '100px'}
      <button class="btn" on:click={advance} transition:fade={{duration: 200}}>advance day</button>
      <button class="btn" on:click={init} transition:fade={{duration: 200}}>init days</button>
    {/if}
  </div>
</div>



<style>
.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 80px 1fr 80px;
  height: 100%;
}

.options {
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
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
  width: 150px;
  height: 30px;
  box-sizing: content-box;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(7, 1fr);;
  width: auto;
  height: auto;
  margin: auto;
  background-color: #1e1f29;
  border-radius: 20px;
  row-gap: 5px;
  column-gap: 5px;
  padding: 16px;
  /* border: 1px solid white; */
}

.day {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 1rem;
  background-color: #00fa9a;
  /* padding: 5px; */
  border-radius: 6px;
  text-align: center;
  color: #fff;
}

</style>
