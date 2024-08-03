export function mockAuthenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "password") {
        resolve({
          name: "Test User",
          email: "test@example.com",
          token: "fake-jwt-token",
        });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}
