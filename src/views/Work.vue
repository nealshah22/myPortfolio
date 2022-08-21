<template lang="html">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<transition name="bounce" appear>
  <h1>Employment</h1>
</transition>

  <div class="row">
    <!-- kft card -->
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <h3>Barista and Kitchen Staff | Kung Fu Tea</h3>
          <img src="https://i.postimg.cc/j5sNFBD9/1200px-Kung-Fu-Tea-Official-Logo.png" alt="KFT" style="width:100%">
          <div class="container">
            <p>
              <ul>
                <li>Master point-of-service (POS) computer system to maintain a smooth and pleasant customer interaction</li>
                <li>Memorized and perfected recipes for over 150 drinks</li>
                <li>Responsible for brewing and cooking various ingredients crucial to drink creation (boba, four types tea, multiple jellies, pudding, and more)</li>
                <li>Carefully planned kitchen tasks over the course of a shift to ensure store supplies were always in stock</li>
              </ul>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <!-- jma card -->
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
                <li>Grown my skill set to independently teach classes of highly ranked black belt students (15-20 students ranked higher than 2nd Degree Black Belt)</li>
                <li>Spent over 20 hours judging Taekwondo testings and tournaments at my studio</li>
                <li>Began teaching private 1-on-1 lessons for students requiring further assistance outside of class</li>
              </ul>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <!-- octo consulting card -->
    <div class="column">
      <transition name="fade" appear>
        <div class="card"> 
          <img src="https://i.postimg.cc/YS7H9Gg1/Octo-Consulting-Updated-Featured-Image.jpg" alt="Octo logo" style="width:100%">
          <div class="container">
            <h3>Marketing Intelligence Intern | Octo Consulting Group</h3>
            <p>
              <ul>
                <li>Collaborate closely with account managers, capture managers, and business development to support a variety of research and data analysis projects</li>
                <li>Aided in creation and delivery of a data analysis account planner on the Department of Transportation</li>
                <li>Attend and support industry and networking events</li>
              </ul>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <img src="https://i.postimg.cc/g0vmGyTy/sat-book.jpg" alt="sat book" style="width:100%">
          <div class="container">
            <h3>SAT Tutor</h3>
            <p>
              <ul>
                <li>Offered an organized schedule with live score tracking of student progress (shared with parents)</li>
                <li>Organized 23 official practice tests onto a calender schedule to ensure student success</li>
                <li>Offered 1 hour in person tutoring sessions twice a week to review completed tests and homework assignments</li>
                <li>Graded all tests and homework assignments within 24 hours of submission</li>
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
