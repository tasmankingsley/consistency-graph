<script>
  let green = '#00fa9a';
  let white = '#fff'

  let done = false;

  let days = [];

  for (let index = 0; index < 49; index++) {
    days[index] = index + 1;
  }
  console.log(days);

  function toggle() {
    done = !done;
  }
</script>

<div class="main">
  <span contenteditable="true">pushup days</span>
  <button class="btn" on:click={toggle}>toggle done</button>
  <div class="grid">
    {#each days as day}
      <div class="day" style="background-color: {done ? green : white};"></div>
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
  text-align: center;
  margin: auto;
  color: #fff;
}

.btn {
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
  border-radius: 12px;
  row-gap: 6px;
  column-gap: 6px;
  padding: 12px;
  /* border: 1px solid white; */
}

.day {
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  background-color: #00fa9a;
  /* padding: 5px; */
  border-radius: 5px;
  text-align: center;
}

</style>
