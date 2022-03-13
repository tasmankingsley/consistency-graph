<script>
  let days = [];

  for (let index = 0; index < 49; index++) {
    days[index] = index + 1;
  }
  console.log(days);
</script>

<div class="main">
  <span contenteditable="true">pushup days</span>
  <div class="grid">
    {#each days as day}
      <div class="day"></div>
    {/each}
  </div>
</div>

<style>
.main {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 80px 1fr;
  height: 100%;
}

span {
  text-align: center;
  margin: auto;
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
  font-size: 1.5rem;
  background-color: #00fa9a;
  /* padding: 5px; */
  border-radius: 5px;
  text-align: center;
}

</style>
