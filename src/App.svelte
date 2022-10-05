<script>
import { title, days, last_date, graphs } from './lib/stores';
import Graph from './lib/graph.svelte';

let current_date = new Date().getTime();
// console.log(current_date)



function advance() {
    $days.shift();
    $days = [...$days, {done: false}]
}

function compare_date() {
  let date_difference;
  let month;

  // current_date = current_date + (86400000 * 40);

  date_difference = new Date(current_date - $last_date).getDate();
  month = new Date(current_date - $last_date).getMonth();

  console.log(date_difference);
  console.log(month);
  
  // advances the graph forward by the amount of days passed
  // this solution only covers the 49 days of the graph
  if (date_difference > 1) {
    if (month === 0) {
      for (let i = 0; i < date_difference - 1; i++) {
        advance();
      }
    } else if (month > 0) {
      for (let i = 0; i < (date_difference - 1 + 31); i++) {
        advance();
      }
    }
    $last_date = current_date;
  }

}

compare_date();


</script>

<div class="main">
  {#each $graphs as graph}
    <svelte:component this={Graph}/>
  {/each}
</div>



<style>

</style>
