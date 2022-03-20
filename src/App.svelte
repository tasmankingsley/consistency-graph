<script>
  let green = '#00fa9a';
  let dark = '#343648'
  let opacity = 0.2;

  let done = false;

  let days = [];

  for (let index = 0; index < 49; index++) {
    // days = [...days, {number: index},{opacity: index / 100}];
    days[index] = {number: index + 1, opacity: (index + 5) / 50};
  }
  console.log(days);

  function toggle() {
    done = !done;
  }
</script>

<div class="main">
  <span contenteditable="true">days</span>
  <button class="btn" on:click={toggle}>toggle done</button>
  <div class="grid">
    {#each days as day, index}
      <div class="day" 
        style="background-color: {done ? green : dark};
        opacity: {day.opacity};">{day.number}
      </div>
    {/each}
  </div>
</div>

<style>
.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 80px 80px 1fr;
  height: 100%;
}

span {
  font-size: 2rem;
  text-align: center;
  margin: auto;
  color: #fff;
}

.btn {
  font-size: 1.3rem;
  text-align: center;
  margin: auto;
  background-color: #fff;
  width: 150px;
  height: 25px;
  box-sizing: content-box;
  border-radius: 5px;
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
  row-gap: 8px;
  column-gap: 8px;
  padding: 16px;
  /* border: 1px solid white; */
}

.day {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 1rem;
  background-color: #00fa9a;
  /* padding: 5px; */
  border-radius: 8px;
  text-align: center;
  color: #fff;
}

</style>
