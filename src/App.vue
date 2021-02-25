<template>
  <v-app>
    <div>
      <v-app-bar prominent class="toolbar">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </v-app-bar>

      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
.app-card {
  padding: 15px;
  border: 1px solid rgb(170, 170, 170);
}
.app-card:hover {
  transition: 0.5s;
  padding: 15px;
  border: 1px solid rgb(170, 170, 170);
  box-shadow: 10px 5px 5px rgb(170, 170, 170);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.toolbar{
  margin-bottom: 10px;
}
.main-container{
  padding: 1%;
}
</style>
