<template>
  <div class="row">
    <div class="column left">
      <transition name="bounce" appear>
        <p style="font-size: 400%">Neal Shah</p>
      </transition>
      <transition name="bounce" appear>
        <h1 style="font-size: 400%">College Application Updates</h1>
      </transition>

      <transition name="bounce" appear>
        <h3>I programmed this website from scratch. Every component, every animation, every page you see here, I coded myself!</h3>
      </transition>

    </div>
    <div class="column right">
      <transition name="bounce" appear>
      <img src="https://i.imgur.com/HoQ8eVg.png" alt="This is me!" class="responsive">
    </transition>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {  }
}
</script>

<style media="screen">
.responsive {
  width: 100%;
  height: auto;
  max-width: 400px;
}
* {
  box-sizing: border-box;
}

p {
  font-family: Helvetica;
color: #8b9a71;
}

h1 {
  font-family: Helvetica;
}
h3 {
  font-family: Helvetica;
color: #4d4d4d;
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

img {
  border-radius: 20px 20px 20px 20px;
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
.left {
  width: 65%;
}

.right {
  width: 35%;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
