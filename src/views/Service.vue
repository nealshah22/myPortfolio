<template lang="html">
  <!-- underline -->
  <transition name="bounce" appear>
  <h1><u>President of Red Cross Club</u></h1>
  </transition>
    <div class="row">
      <div class="column">
        <transition name="fade" appear>
          <div class="card">
            <img src="https://i.imgur.com/rm3NpeC.png" alt="WebImage" style="width:100%">
            <div class="container">
              <h3><b>Club Website</b></h3>
              <h5>Reconstructed and renovated <a href="https://www.ghredcross.weebly.com" target="_blank">club website</a> to better suit club needs</h5>
              <h5><u>My additions to the site from last year:</u></h5>
              <p>
                <ul>
                  <li>Constructed a digital form integrated in the website for members to suggest volunteering events</li>
                  <li>Implemented a google calender for a streamlined event viewing experience</li>
                  <li>Improved overall site expereince by *****</li>
                </ul>
              </p>
            </div>
          </div>
        </transition>
      </div>
      <div class="column">
        <transition name="fade" appear>
          <div class="card">
            <agile :dots="true" :infinite="false">
              <div class="slide">
                <img src="https://i.imgur.com/XOxInM1.jpg" alt="WebImage" style="width:100%">
              </div>
              <div class="slide">
                <img src="https://i.imgur.com/HsrO8c5.jpg" alt="WebImage" style="width:100%">
              </div>
              <div class="slide">
                <img src="https://i.imgur.com/K5KNvOh.png" alt="WebImage" style="width:100%">
              </div>
            </agile>
            <div class="container">
              <h3><b>Volunteering Events</b></h3>
              <h5>Increased average monthly events from 1-2 to 6-7 events </h5>
              <h5><u>Since October 2021:</u></h5>
              <p>
                <ul>
                  <li>Hosted food drive (150 items donated)</li>
                  <li>Collected 200+ hygine products for over 75 underprivelleged familes</li>
                  <li>Coordinated and communicated 4-5 in-person volunteering events, monthly</li>
                </ul>
              </p>
            </div>`
          </div>
        </transition>
      </div>
      <div class="column">
        <transition name="fade" appear>
          <div class="card">
            <img src="https://i.imgur.com/iW5esKl.png" alt="WebImage" style="width:100%">
              <div class="container">
                <h3><b>Members & Attendance</b></h3>
                <!-- as presidnet, recruited/advertised, motivated -->
                <!-- LEFT ALIGN -->
                <h5>Utilized club Instagram and school resources to market the Red Cross Club.</h5>
                <h5><u>Club stats:</u></h5>
                <p>
                  <ul>
                    <li>Increased number of members from previous year by 115%</li>
                    <li>Consistent 75% member attendance rate at monthly meetings</li>
                    <li>As of Feb 2022, members have volunteered total of 280 hours</li>
                  </ul>
                </p>
              </div>
          </div>
        </transition>
      </div>

    </div>
  <transition name="bounce" appear>
  <h1><u>President of TED-Ed Club</u></h1>
</transition>
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

.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1{
  margin: 1%;
}
h5 {
  text-align: left;
  margin: 0 auto;
  padding: 1.5%;
  font-size: 110%;
  color: #4d4d4d;

}
p {
  text-align: left;

  margin: 0 auto;
  padding: 0.25%;
  font-size: 105%;
  color: #4d4d4d;

}
h3 {
  margin: 0 auto;
  padding: 1.5%;
  font-size: 200%;
  text-decoration: underline;
  color: #4d4d4d;
}
ul {
  margin:   0 auto;
  text-align: left;
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
