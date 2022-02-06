<template lang="html">
  <h1>Red Cross Club</h1>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="https://i.imgur.com/dr75tJt.png" alt="WebImage" style="width:100%">
        <div class="container">
          <h4><b>Club Website</b></h4>
          <p>Reconstructed and renovated <a href="https://www.ghredcross.weebly.com" target="_blank">club website</a> to better suit club needs</p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <agile>
          <div class="slide">
            <img src="https://i.imgur.com/dr75tJt.png" alt="WebImage" style="width:100%">
          </div>
          <div class="slide">
            <img src="https://i.imgur.com/dr75tJt.png" alt="WebImage" style="width:100%">
          </div>
          <div class="slide">
            <img src="https://i.imgur.com/dr75tJt.png" alt="WebImage" style="width:100%">
          </div>
          <div class="slide">
            <img src="https://i.imgur.com/dr75tJt.png" alt="WebImage" style="width:100%">
          </div>
      </agile>
        <div class="container">
          <h4><b>Club Events</b></h4>
          <a href="https://www.ghredcross.weebly.com" target="_blank">Reconstructed and renovated club website to better suit club needs</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    components: {
        agile: VueAgile
    }
}
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

</style>
