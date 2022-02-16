<template lang="html">
<transition name="bounce" appear>
  <h1>Academic Achievements</h1>
</transition>

  <div class="row">
    <div class="column">
      <transition name="fade" appear>
      <div class="card" style="margin-bottom:5%">
        <h3>Classes</h3>
        <img src="https://highlandrambler.org/wp-content/uploads/2019/11/AP-College-Board.jpg" alt="AP Classes" style="width:100%">
        <div class="container">
          <h5>
Out of 32 classes taken by June 2022, 11 were AP & 19 were honors.
          </h5>
          <p>
            <ul>
              <li>AP Calculus AB</li>
              <li>AP Calculus BC</li>
              <li>AP Comparative Government & Politics</li>
              <li>AP Computer Science A</li>
              <li>AP Computer Science Principles</li>
              <li>AP English Langauage & Composition (exam only)</li>
              <li>AP English Literature & Composition</li>
              <li>AP Environmental Science</li>
              <li>AP Human Geography</li>
              <li>AP Psychology</li>
              <li>AP Statistics</li>
              <li>AP US Government & Politics</li>


            </ul>
          </p>
        </div>

      </div>
</transition>
    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <h3>SAT Score (Nov 2020)</h3>
          <img src="https://i.imgur.com/PknjJ3h.png" alt="sat score" style="width:100%">
          <div class="container">
          </div>
        </div>
      </transition>
    </div>

    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <h3>Honor Societies</h3>
          <agile :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="4500" :pauseOnHover="true">
            <div class="slide">
                <img src="https://i.imgur.com/zKCvJeT.png" alt="NHS" style="width:100%; height:100%">
            </div>
            <div class="slide">
              <img src="https://www.chatham.k12.nc.us/cms/lib/NC01911141/Centricity/Domain/2884/NTHS-logo_Vertical_RGB_transparent_300dpi-01.png" alt="NTHS" style="width:100%">
            </div>
            <div class="slide">
              <img src="https://i.imgur.com/sWl3hFy.png" alt="Rho Kappa" style="width:100%">
            </div>
          </agile>
          <div class="container">
            <h5>
              <ul>
                <li>Member of National Honor Society</li>
                <li>Member of National Technical Honor Society</li>
                <li>Member of Rho Kappa (Social Studies Honor Society)</li>
              </ul>
            </h5>

          </div>
        </div>
      </transition>

    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <h3>Current Grades 2/15/22</h3>
            <div class="imageContainer">
          <img src="https://i.imgur.com/F8drR9s.png" alt="sat score" style="width:100%">
        </div>
          <div class="container">
          </div>
        </div>
      </transition>
    </div>


  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>



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
}
h5 {
  text-align: left;
  margin: 0 auto;
  padding: 1.5%;
  font-size: 110%;
  color: #f5f5f5;

}
p {
  text-align: left;

  margin: 0 auto;
  padding: 0.25%;
  font-size: 105%;
  color: #f5f5f5;

}
h3 {
  margin: 0 auto;
  padding: 1.5%;
  font-size: 200%;
  text-decoration: underline;
  color: #f5f5f5;
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
  background-color: #8b9a71;
  border-radius: 5px; /* 5px rounded corners */
}
img {
  border-radius: 5px 5px 5px 5px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.imageContainer > img:hover {
  /* width: 700px;
  height: 500px; */
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
