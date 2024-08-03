<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt" />
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link v-if="isAuthenticated" to="/estatisticas">Estatísticas</router-link>
      <v-btn icon @click="handleAuthAction" class="auth-btn">
        <img :src="authIcon" alt="auth icon" class="auth-icon" />
      </v-btn>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import logoffIcon from '@/assets/logoff.svg';
import loginIcon from '@/assets/login.svg'

export default {
  name: "Navbar",
  props: ["logo", "alt"],
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const isAuthenticated = computed(() => userStore.isAuthenticated);

    const handleAuthAction = () => {
      if (isAuthenticated.value) {
        userStore.logOut();
        router.push({ name: 'home' });
      } else {
        router.push({ name: 'login' });
      }
    };

    const authIcon = computed(() => isAuthenticated.value ? logoffIcon : loginIcon); 

    return {
      isAuthenticated,
      handleAuthAction,
      authIcon
    };
  }
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

.v-btn {
  color: #3ea7e5;
  margin: 12px;
  transition: 0.5s;
  background: none; 
  box-shadow: none; 
  border-radius: 0; 
}

.v-btn:hover {
  background: none; 
}

.auth-icon {
  width: 24px; 
  height: 24px; 
}
</style>
