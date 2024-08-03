<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt" />
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/estatisticas">Estatisticas</router-link>
      <router-link to="/login">Logar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
  background-color: #28397e;
  border-bottom: 4px solid #3859dd;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 100px;
  height: 60px;
}

#nav a {
  color: #3ea7e5;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: #fff;
}
</style>
