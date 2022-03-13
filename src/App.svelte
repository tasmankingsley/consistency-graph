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
        <div class="day"></div>
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
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(6, 1fr);;
  width: 280px;
  height: 280px;
  margin: auto;
  background-color: #1e1f29;
  border-radius: 10px;
  row-gap: 5px;
  column-gap: 5px;
  padding: 5px;
}

.day {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #00fa9a;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
}

</style>
