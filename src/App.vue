<template>
  <div id="nav">
    <router-link style="text-decoration: none;" to="/">Home</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'School' }">School</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'Service' }">Service</router-link> |
    <router-link style="text-decoration: none;" :to="{ name: 'Passions' }">Passions</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8b9a71;
}
body {
  background: #f2f0eb;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
}

footer{
  position: center;
}

h1 {
  margin: 0 auto;
  padding: auto;
  /* line-height: 0; */
}

p {
  margin: 0 auto;
  padding: auto;
  /* line-height: 0; */
}
a {
  color: #8b9a71;
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
