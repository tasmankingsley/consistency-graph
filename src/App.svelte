<script>
  let days = [];

  for (let index = 0; index < 31; index++) {
    days[index] = index;
  }
  console.log(days);
</script>

<div class="main">
    <div class="grid">
      {#each days as day}
        <div class="day">{day}</div>
      {/each}
    </div>
</div>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100vh;
}

.grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);;
  width: auto;
  height: auto;
  margin: auto;
  background-color: #1e1f29;
  border-radius: 12px;
  row-gap: 10px;
  column-gap: 10px;
  padding: 10px;
  /* border: 1px solid white; */
}

.day {
  width: 38px;
  height: 38px;
  line-height: 38px;
  font-size: 1.5rem;
  background-color: #00fa9a;
  padding: 5px;
  border-radius: 7px;
  text-align: center;
}

</style>
