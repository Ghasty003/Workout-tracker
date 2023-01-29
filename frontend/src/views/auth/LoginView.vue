<template>
  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>

    <div>
        <label for="email">Email</label>
        <input v-model="email" type="email">
    </div>

    <div>
        <label for="password">Password</label>
        <input v-model="password" type="password" >
    </div>

    <button>Sign in</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async handleSubmit() {
            const response = await fetch("http://localhost:4000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: this.email, password: this.password})
            });
            const json = await response.json();

            if (response.ok) {
                console.log(json)
            }

            if (!response.ok) {
                console.log(json.error)
            }
        }
    }
}
</script>

<style scoped>
form {
    width: 400px;
    height: 300px;
    box-shadow: 1px 2px 2px rgb(84, 82, 82), 0px -1px 2px rgb(84, 82, 82);
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    margin-top: 80px;
    padding: 30px 0;
}

h2 {
    text-align: center;
}

div:first-child {
    background: black;
}

div {
    margin: 10px 0 0 40px;
}

label, input {
    display: block;
}

input {
    padding: 3px;
    width: 80%;
    outline: none;
}

button {
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    padding: 3px 6px;
}
</style>