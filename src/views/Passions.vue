<template lang="html">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="row">
    <div class="column">
      <transition name="bounce" appear><h1>Taekwondo</h1></transition>
      <div class="row">
        <div class="column">
          <transition name="fade" appear>
            <div class="card">
              <h3><b>4th Degree Black Belt Testing</b></h3>

              <agile :dots="true" :infinite="true" :autoplay="true" :autoplaySpeed="40000">
                <div class="slide">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/D35z6f7oDPY?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="slide">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/G5KSPO5ThxE?autoplay=0&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="slide">
                  <img src="https://i.imgur.com/YG6IFL4.jpg" alt="webimg" style="width:100%">
                </div>
              </agile>
              <div class="container">
                <h5>After training for over 9 years I earned my 4th degree black belt in late October 2021.</h5>
                <p>
                  <ul>
                    <li>I broke 3 Black Boards (each equivalent to 2.25" wooden boards)</li>
                    <li>As a requirement of my 4th Degree testing, I created my own form (a series of defense & attack movements)</li>
                  </ul>
                </p>
              </div>
            </div>
          </transition>
        </div>
        <div class="column">
          <transition name="fade" appear>
            <div class="card">

              <img src="" alt="">
              <div class="container">
                <h3>Part-time Paid Instructor</h3>
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
        <div class="column">
          <transition name="fade" appear>
            <div class="card">
              <h3>Johnson's Martial Arts Tournament</h3>

              <agile :dots="true" :infinite="true">
                <div class="slide">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/j-Ur9hc5YGk?autoplay=0&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="slide">
                  <img src="https://i.imgur.com/xDD7YzD.jpg" alt="My medal!" style="width:100%">
                </div>
              </agile>
              <div class="container">
                <h5>
                  Placement:
                </h5>
                <p>
                  <ul>
                    <li>1st place in Forms Division</li>
                    <li>3rd place in Sparring Division</li>
                  </ul>
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
      </div>

    <div class="column">
      <transition name="bounce" appear><h1>Coding</h1></transition>


      <div class="row">
        <div class="column">
          <transition name="fade" appear>
            <div class="card">
              <div class="container">
                <h3>This website!</h3>
                <h5>I programmed this website from scratch. Every component, every title, every page you see here, I coded myself!</h5>
                <h5>
                  This website is...
                </h5>
                <p>
                  <ul>
                    <li>Built using vueJS, a framework that utilized HTML, JavaScript, & CSS - all languages I now understand well!</li>
                    <li>Hosted on my own domain - www.nealshah.info. I learned to use Netlify's Build service to deploy my website to the world!</li>
                  </ul>
                </p>
                <p style="margin:1%;text-align: center">
                  <a href="https://github.com/nealshah22/myportfolio" target="_blank">Click to view GitHub repository!</a>
                </p>
              </div>
            </div>
          </transition>
        </div>
        <div class="column">
          <transition name="fade" appear>
            <div class="card" style="margin-bottom:5%">
              <h3><b>Automated Volunteer Hours Tracking</b></h3>
                  <img src="https://i.imgur.com/SYe3uqh.png" alt="Python X Excel" class="responsive">
              <div class="container">
                <h5>Developed a local python program to automatically read and update volunteer hours upon submission.</h5>
                <h5>The program:</h5>
                <p>
                  <ul>
                    <li>Detects typos/spelling errors and, using intelligence programmed by me, informs the user of such occurences with useful statistics.</li>
                    <li>Uses openpyxl (used to read&write to Excel files via Python), a Python library I learned how to use specificaly for this project!</li>
                    <li>Is built for long term usage.</li>
                  </ul>
                </p>
                <p style="margin:1%;text-align: center">
                  <a href="https://github.com/nealshah22/hoursupdate" target="_blank">Click to view GitHub repository!</a>
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
.responsive {
  width: 100%;
  max-width: 300px;
  height: auto;
}
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
}
h5 {
  text-align: left;
  margin: 0 auto;
  padding: 1.5%;
  font-size: 110%;
  color: #fcfcfc;

}
p {
  text-align: left;

  margin: 0 auto;
  padding: 0.25%;
  font-size: 105%;
  color: #fcfcfc;

}
h3 {
  margin: 0 auto;
  padding: 1.5%;
  font-size: 200%;
  text-decoration: underline;
  color: #fcfcfc;
}
ul {
  margin:   0 auto;
  text-align: left;
}


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

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
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
  }
}

</style>
