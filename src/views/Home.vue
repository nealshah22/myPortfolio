<template>
<div class="body">
  <transition name="bounce" appear>
    <p style="font-size: 400%">Neal Shah</p>
  </transition>
  <transition name="bounce" appear>
    <h1 style="font-size: 500%">Virtual Resume</h1>
  </transition>
</div>



  <div id="footer">

  <transition name="bounce" appear>
    <h3>I designed and devloped this website from scratch using the vueJS framework.</h3>
  </transition>
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

html, body
{
    height: 100%;
}
#Footer
    {
      position:fixed;
      bottom:0;
    }
</style>
