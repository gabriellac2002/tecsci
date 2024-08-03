<!-- src/views/LoginView.vue -->
<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="4">
        <v-card class="mx-auto pa-5" max-width="400">
          <v-card-title class="headline grey--text text--darken-2"
            >Login</v-card-title
          >
          <v-card-text>
            <p class="text-subtitle-1 mb-4">
              Para acessar a página de Estatísticas, você precisa estar logado.
            </p>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                v-model="username"
                label="Username"
                required
                prepend-icon="mdi-account"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                prepend-icon="mdi-lock"
                class="mb-4"
              ></v-text-field>
              <v-btn type="submit" color="primary" block>Log In</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog para mensagens de erro -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Erro</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false"
            >Fechar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { mockAuthenticate } from "@/mock/authService";

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const dialog = ref(false);

    const handleSubmit = async () => {
      try {
        const user = await mockAuthenticate(username.value, password.value);
        userStore.logIn(user);
        router.push({ name: "estatisticas" });
      } catch (error) {
        errorMessage.value = error;
        dialog.value = true;
      }
    };

    return {
      username,
      password,
      handleSubmit,
      errorMessage,
      dialog,
    };
  },
};
</script>

<style scoped>
.login-container {
  background: linear-gradient(to right, #28397e, #3859dd);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-weight: bold;
  text-transform: uppercase;
}

.text-subtitle-1 {
  color: #616161;
}
</style>
