<template lang="html">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="row">
    <div class="column left">
      <transition name="bounce" appear>
      <h1>Red Cross Club President</h1>
      </transition>
      <div class="row">
        <div class="column third">
          <transition name="fade" appear>
            <div class="card">
              <h3><b>Volunteering Events</b></h3>
              <agile :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="4500" :pauseOnHover="true">
                <div class="slide">
                  <img src="https://i.postimg.cc/KYMHJk6j/150-2.png" alt="Clothing Drive" style="width:100%">
                </div>
                <div class="slide">
                  <img src="https://i.postimg.cc/yxbmMn9H/IMG-8686.jpg" alt="Essential Baskets" style="width:100%">
                </div>
                <div class="slide">
                  <img src="https://i.postimg.cc/rFRxd1xD/IMG-8707.jpg" alt="Blanket Event" style="width:100%">
                </div>
                <div class="slide">
                  <img src="https://i.postimg.cc/0Nsgw04Z/150-1.png" alt="Food Drive" style="width:100%">
                </div>
              </agile>
              <div class="container">
                <h5>Increased average monthly events from 1-2 to 6-7 events </h5>
                <h5>I have initiated the following efforts since October 2021:</h5>
                <p>
                  <ul>
                    <li>Donated over 300 clothing items to local community outreach agency in a school-wide collection drive</li>
                    <li>Hosted food drive (150 items donated)</li>
                    <li>Collected 200+ hygiene products for over 75 under privileged families</li>
                    <li>Coordinated and fulfilled 4-5 in-person volunteering events, monthly</li>
                  </ul>
                </p>
              </div>`
            </div>
          </transition>
        </div>
        <div class="column third">
          <transition name="fade" appear>
            <div class="card">
              <h3><b>Members & Attendance</b></h3>
              <img src="https://i.postimg.cc/Dwmr2QZp/IMG-7690.jpg" alt="WebImage" style="width:100%">
                <div class="container">
                  <!-- as presidnet, recruited/advertised, motivated -->
                  <!-- LEFT ALIGN -->
                  <h5>Utilized Instagram and school resources to market the Red Cross Club.</h5>
                  <h5>Club stats:</h5>
                  <p>
                    <ul>
                      <li>Increased number of members from previous year by 115%</li>
                      <li>Consistent 75% member attendance rate at monthly meetings</li>
                      <li>As of June 2022, members have volunteered total of 716.5 hours</li>
                    </ul>
                  </p>
                </div>
            </div>
          </transition>
        </div>
        <div class="column third">
          <transition name="fade" appear>
            <div class="card">
              <h3><b>Club Website</b></h3>
              <p><a href="https://ghredcross.weebly.com" target="_blank">
                <img src="https://i.postimg.cc/Kc65xGHS/Screenshot-2022-02-09-235444.png" alt="Website Screenshot" style="width:100%">
              </a> </p>
              <div class="container">
                <h5>Reconstructed and renovated <a href="https://ghredcross.weebly.com" target="_blank">club website</a> to better suit club needs</h5>
                <h5>My additions to the site from the 2021 school year:</h5>
                <p>
                  <ul>
                    <li>Constructed a digital form integrated in the website for members to suggest volunteering events</li>
                    <li>Implemented a google calender for a streamlined event viewing experience</li>
                    <li>Added a "Missed a meeting" page, embedded with all meeting presentation slides</li>
                  </ul>
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="column right">
      <transition name="bounce" appear>
      <h1 style="font-size:240%">TED-Ed Club President</h1>
      </transition>
      <div class="row">
        <div class="column">
          <transition name="fade" appear>
          <div class="card" style="margin-right: 15%; width:100%">
            <h3>Inter-school Speech Competition</h3>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/6MIOpVO8uxg?autoplay=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picsture" allowfullscreen></iframe>
            <div class="container">
              <h5>Designed, edited, and published a video marketing the TED-Ed club to students (featured on school website). This increased enrollment in the club by over 60%.</h5>
              <h5>Individually providing assistance & resources in developing students' public speaking skills in preparation for competition</h5>
              <h5>Coordinating an end of year, "TED-Talk" style speech competition with 2 other schools.</h5>
              <p>
                <ul>
                  <li>Collaborated with school administrators to reserve an auditorium, stage, & necessary equipment for a successful showcase</li>
                  <li>Expecting 30 competitors with an estimated audience of roughly 100 students, parents, and faculty members</li>
                </ul>
              </p>


            </div>
          </div>
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
  font-size: 275%;
  color: #8b9a71;
}
h5 {
  text-align: left;
  margin: 0 auto;
  padding: 1.5%;
  font-size: 110%;
  color: #d9d9d9;

}
p {
  text-align: left;

  margin: 0 auto;
  padding: 0.25%;
  font-size: 105%;
  color: #d9d9d9;

}
h3 {
  margin: 0 auto;
  padding: 1.5%;
  font-size: 200%;
  /* text-decoration: underline; */
  color: #d9d9d9;
}
ul {
  margin:   0 auto;
  text-align: left;
}

/* Float four columns side by side */


/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #383838;
  border: 7px solid;
  border-color: #8b9a71;
  border-radius: 5px; /* 5px rounded corners */
}
img {
  border-radius:10%
}

.column {
  float: left;
  width: 100%;
  padding: 10px;
}
.left {
  width: 73%
}
.right{
  width: 27%
}
.third{
  width: 33%
}
.nopad{
  padding:0px
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */

@media screen and (max-width: 900px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

</style>
