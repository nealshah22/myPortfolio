<template lang="html">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<transition name="bounce" appear>
  <h1>Employment</h1>
</transition>

  <div class="row">
    <div class="column">
      <div class="cardb">

      </div>
    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <h3>Shift Manager | Kung Fu Tea</h3>
          <img src="https://i.postimg.cc/j5sNFBD9/1200px-Kung-Fu-Tea-Official-Logo.png" alt="KFT" style="width:100%">
          <div class="container">
            <h5>Shift manager</h5>
            <p>
              <ul>
                <li>Supervise up to 5 employees including baristas and kitchen staff</li>
                <li>Conduct a final count of cash in register prior to closing</li>
                <li>Spearhead training of new-hires</li>
                <li>Communicate with customers to resolve any potential issues</li>
                <li>Oversee business efficiency and operations for duration of shift</li>
                <li>Direct employees through closing duties</li>
              </ul>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <img src="https://i.postimg.cc/D04MSW71/Screenshot-2022-03-24-002841.png" alt="Neal Instructor" style="width:100%">
          <div class="container">
            <h3>Part-time Paid Instructor | Johnson's Martial Arts</h3>
            <h5>
              Since November 2021:
            </h5>
            <p>
              <ul>
                <li>Grown my skill set to independetly teach classes of highly ranked black belt students (15-20 students ranked higher than 2nd Degree Black Belt)</li>
                <li>Spent over 20 hours judging Taekwondo testings and tournaments at my studio</li>
                <li>Began teaching private 1-on-1 lessons for students requiring further assitance outside of class</li>
              </ul>
            </p>
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
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

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
  background-color: #383838;
  border: 7px solid;
  border-color: #8b9a71;
  border-radius: 5px; /* 5px rounded corners */
}
.cardb{
  padding: 16px;
  text-align: center;
  background-color: #242424;
}
img {
  border-radius: 5px 5px 5px 5px;
}

.imgHover{
  transition:transform 0.25s ease;
  }

.imgHover:hover {
    -webkit-transform:scale(2.25);
    transform:scale(2.25);
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
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 1000px) {
  .column {
    width: 50%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
/* @media screen and (min-width: 600px) {
  .imageHover:hover{
    -webkit-transform:scale(1);
    transform:scale(1);
  } */
/* } */

</style>
