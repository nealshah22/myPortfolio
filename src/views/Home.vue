<template>
  <div class="row">
    <div class="column left">
      <transition name="bounce" appear>
        <p style="font-size: 350%">Hey,</p>
      </transition>
      <transition name="bounce" appear>
        <h1 style="font-size: 500%">I'm Neal!</h1>
      </transition>

      
      <transition name="bounce" appear>
        <h3>I programmed this website from scratch. Every component, every animation, every page you see here, I coded myself!</h3>
      </transition>

      <transition name="bounce" appear>
        <h3>I created this website to showcase my high school achievements!</h3>
      </transition>


    </div>
    <div class="column right">
      <transition name="bounce" appear>
      <img src="https://i.postimg.cc/8kvxGMHz/1-A82-A1-E6-E46-F-4-B03-9196-0-AD9-BCEAC693-Original.jpg" alt="This is me!" class="responsive">
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
  color: #8b9a71;

}
h3 {
  font-family: Helvetica;
color: #c7c7c7;
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
  width: 100%;
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
@media screen and (max-width: 1000px) {
  .column {
    width: 50%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 730px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}</style>
