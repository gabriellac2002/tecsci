<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Log In</v-btn>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { mockAuthenticate } from "@/mocks/authService";

export default {
  setup() {
    const userStore = useUserStore();
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");

    const handleSubmit = async () => {
      try {
        const user = await mockAuthenticate(username.value, password.value);
        userStore.logIn(user);
      } catch (error) {
        errorMessage.value = error;
      }
    };

    return {
      username,
      password,
      handleSubmit,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
