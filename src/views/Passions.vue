<template lang="html">
  <transition name="bounce" appear>
  <h1>
    <u>Taekwondo</u>
  </h1>
</transition>
<div class="container">
  <div class="row">
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
        <agile :dots="true" :infinite="false">
          <div class="slide">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/D35z6f7oDPY?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="slide">
            <img src="https://i.imgur.com/EgS0eW4.jpg" alt="webimg" style="width:100%">
          </div>
        </agile>
        <div class="container">
          <h3><b>4th Degree Black Belt</b></h3>
          <h5>After training for over 9 years I earned my 4th degree black belt in late October 2021.</h5>
        </div>
      </div>
      </transition>
    </div>
    <div class="column">
      <transition name="fade" appear>
        <div class="card">

        <img src="" alt="">
        <div class="container">
          <h3>Part-time paid Instructor</h3>
          <h5>
            <u>Since November 2021:</u>
          </h5>
          <p>
            <ul>
              <li>Grown my skill set to independetly teach classes of higher ranked students (15-20 students)</li>
              <li>Spent over 20 hours judging Taekwondo testings and tournaments at my studio</li>
              <li>Began teaching private 1-on-1 lessons for struggling students</li>
            </ul>
          </p>
        </div>
      </div>
    </transition>

    </div>
  </div>
  </div>
  <h1>
    <u>Coding</u>
  </h1>
  <div class="row">
    <div class="column">
      <transition name="fade" appear>
        <div class="card">
          <iframe src="https://nealshah22.github.io/hoursUpdate/" width="100%" height="550" frameborder="0" scrolling="no"></iframe>
        <div class="container">
          <h3><b>Automated Volunteer Hours Tracking</b></h3>
          <h5></h5>
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
  font-size: 250%;
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
