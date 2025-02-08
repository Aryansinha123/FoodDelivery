<template>
    <div class="login-container">
        <div class="login-form-container">
            <form id="loginForm" @submit="handleSubmit" novalidate autocomplete="off">
                <h3>LOGIN</h3>

                <div v-if="errors.length" class="error-box">
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="form-group">
                    <input type="email" id="uEmail" name="uEmail" class="form-control" placeholder="Enter your email"
                        v-model="loginObj.email" />
                </div>

                <div class="form-group password-field">
                    <input :type="showPassword ? 'text' : 'password'" id="uPass" name="uPass" class="form-control"
                        placeholder="Enter your password" v-model="loginObj.pass" />
                    <button type="button" class="eye-btn" @click="togglePasswordVisibility">
                        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </button>
                </div>

                <div class="form-group">
                    <input type="submit" value="Login Now" class="btn">
                    <p>Don't have an account? <router-link @click="scrollToTop()" to="/register">Create one</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
    name: 'Login',

    data() {
        return {
            loginObj: { email: "", pass: "" },
            matchUser: undefined,
            errors: [],
            showPassword: false, // Added for toggling password visibility
        };
    },

    methods: {
        ...mapMutations(["setUser"]),

        scrollToTop() {
            window.scrollTo(0, 0);
        },

        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },

        async getMatchUser(email) {
            let data = await axios.get('/users/' + email);
            this.matchUser = data.data;
        },

        async handleSubmit(e) {
            this.errors = [];

            if (!this.loginObj.email) {
                this.errors.push("Entering an email is required");
            } else {
                if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.loginObj.email)) {
                    this.errors.push('Email must be valid');
                }
            }

            if (!this.loginObj.pass) {
                this.errors.push('Password is required');
            }

            if (this.errors.length) {
                e.preventDefault();
            } else {
                e.preventDefault();
                await this.getMatchUser(this.loginObj.email);
                if (!this.matchUser) {
                    this.errors.push("Incorrect email or password!");
                } else {
                    if (this.matchUser.user_password === this.loginObj.pass) {
                        this.matchUser.user_password = "";
                        this.setUser(this.matchUser);
                        this.$router.push("/");
                    } else {
                        this.errors.push("Incorrect email or password!");
                    }
                }
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    padding: 2rem 9%;
}

.login-container .login-form-container {
    background-color: #fff;
    height: 90vh;
}

.login-container .login-form-container form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 40rem;
    width: 100%;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border-radius: .5rem;
    animation: fadeUp .4s linear;
}

.login-container .login-form-container form h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: #130f40;
    margin: 0;
}

.login-container .login-form-container form .form-control {
    margin: .7rem 0;
    border-radius: .5rem;
    background: #f7f7f7;
    padding: 2rem 1.2rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
    width: 100%;
    border: none;
}

/* Style for password field */
.password-field {
    position: relative;
    display: flex;
    align-items: center;
}

.password-field .eye-btn {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #666;
    outline: none;
}

.password-field .eye-btn:hover {
    color: #130f40;
    outline: none;
    box-shadow: none;
}

.login-container .login-form-container form .btn {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
}

.login-container .login-form-container form p {
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #666;
    margin: 0;
}

.login-container .login-form-container form p a {
    color: #27ae60;
}

.login-container .login-form-container form p a:hover {
    color: #130f40;
    text-decoration: underline;
}

.login-container .login-form-container form .error-box {
    background-color: #fff9fa;
    box-sizing: border-box;
    border: 2px solid rgba(255, 66, 79, .2);
    border-radius: 2px;
    font-size: 12px;
    margin-bottom: 20px;
}

.login-container .login-form-container form .error-box ul {
    list-style-type: none;
    margin: 0;
    padding: 10px 0px;
}

.login-container .login-form-container form .error-box ul li {
    padding-left: 10px;
    color: rgb(182, 0, 0);
}
</style>
