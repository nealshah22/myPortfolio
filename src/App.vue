<template>
  <div id="nav">
    <router-link style="text-decoration: none;" to="/">Home</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'School' }">School</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'Passions' }">Passions</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'Clubs' }">Clubs</router-link>
  </div>
  <vue-page-transition name="fade-in-right">
  <router-view/>
</vue-page-transition>
</template>

<style>
/* route transitions */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8b9a71;
}
body {
  background: #fcfcfc;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
}

footer{
  position: center;
}
h5 {
  margin: auto;
  padding: auto;
}
h1 {
  margin: 0 auto;
  padding: auto;
    font-family: Helvetica;
  /* line-height: 0; */
}

p {
  margin: 0 auto;
  padding: auto;
  color: #4d4d4d;
  font-family: Helvetica;
}
a {
  color: #87d6d0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #b3b1b1;
}

#nav a.router-link-exact-active {
  color: #858d6f;
}
</style>
