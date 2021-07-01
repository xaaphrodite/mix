<template>
    <main>
        <header-title title="Login |MixPersonal" />
        <header></header>
        <article>
            <section class="mt-5">
                <br />
                <div class="l-form" @submit.prevent="login">
                    <form action="" class="form">
                        <div class="container jumbotron jumbotron-fluid mt-5">
                            <div class="container">
                                <a href="/">
                                    <h1 class="display-4">MixPersonal si<span style="color: #14E4C9">te.</span> <img
                                            id="mevn" src="/assets/undraw/undraw2.svg" /></h1>
                                    <hr style="margin-top: -12px">
                                </a>
                            </div>
                        </div>

                        <p id="message">{{ message }}</p>

                        <div class="form__div mt-3">
                            <input type="text" class="form__input" v-model="form.username" placeholder=" "
                                name="username" id="username" />
                            <label for="" class="form__label">email/username</label>
                        </div>

                        <div class="form__div">
                            <input type="password" class="form__input" v-model="form.password" placeholder=" "
                                name="password" id="password" />
                            <label for="" class="form__label">password</label>
                        </div>

                        <div class="text-start">
                            <button type="submit" name="login" id="login" class="submit btn btn-outline">Sign
                                In</button>
                            <button class="request none btn btn-success" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                request...
                            </button>
                        </div>

                        <img id="undraw" src="/assets/undraw/undraw6.svg" alt="" />
                    </form>
                </div>
                <p class="back"><a href="/"><i class="fas fa-hand-point-left"></i> Back</a></p>
            </section>
            <div id="particles-js"></div>
            <slot />
        </article>
    </main>
</template>

<script>
import CryptoJS from "crypto-js";
import progress from "nprogress";
import firebase from "firebase";
import headerTitle from "../../components/header-title";
export default {
    components: { headerTitle },
    data() {
        return {
            message: null,
            form: {
                username: "",
                password: "",
            },
        };
    },
    mounted() {
        console.clear();
    },
    methods: {
        async login() {
            if (this.form.username === "" || this.form.password === "") {
                this.message = "Both fields are required";
                return;
            }
            this.message = "";

            let send = document.querySelectorAll(".submit");
            send.forEach((el) => {
                el.classList.add("none");
            });
            let load = document.querySelectorAll(".request");
            load.forEach((el) => {
                el.classList.remove("none");
            });

            progress.start();
            firebase
                .auth()
                .signInWithEmailAndPassword(
                    this.form.username,
                    this.form.password
                )
                .then((response) => {
                    let auth = CryptoJS.AES.encrypt(
                        this.form.password,
                        "756433"
                    ).toString();
                    localStorage.setItem("MixPersonalSite", auth);
                    localStorage.setItem("identifier", this.form.username);
                    this.$router.push("/MixPersonal");
                })
                .catch((error) => {
                    let send = document.querySelectorAll(".submit");
                    send.forEach((el) => {
                        el.classList.remove("none");
                    });
                    let load = document.querySelectorAll(".request");
                    load.forEach((el) => {
                        el.classList.add("none");
                    });
                    console.clear();
                    this.form.password = "";
                    return (this.message = "Wrong email or password");
                });
            progress.done();
        },
    },
};
</script>

<style scoped>
.none {
    display: none;
}
.container {
    display: flex;
    justify-content: center;
}
.jumbotron {
    color: #57646f;
    text-align: start;
    transition: all 0.5s ease 0s;
}
.jumbotron h5 {
    font-size: 2em;
}
.jumbotron p {
    font-size: 0.9em;
    font-weight: 500;
    margin-left: 5px;
}
p,
a {
    color: #57646f;
}
#mevn {
    max-width: 100px;
    max-height: 100px;
}
#message {
    color: red;
    margin-left: 5px;
    margin-top: -8px;
    margin-bottom: 8px;
    font-size: 0.7em;
    position: fixed;
}
section {
    display: flex;
    height: 50vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30vh;
}
button {
    border-block-color: #14e4c9;
    border-color: #14e4c9;
    margin-left: 2px;
    margin-top: -8px;
}
button:hover {
    background-color: #14e4c9;
    border-color: #14e4c9;
    color: #57646f;
}
#undraw {
    width: 200px;
    z-index: -1;
    margin-top: -70px;
    margin-bottom: 50px;
    margin-left: 77px;
}
img {
    width: 64px;
}
h1 {
    margin: 0;
    font-weight: 400;
    font-size: 1.2em;
    margin-top: -70px;
    margin-bottom: 20px;
}
/*===== FORM =====*/
.l-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#particles-js {
    width: 100%;
    height: 20vh;
    margin-top: -5vh;
    color: #14e4c9;
}
.form {
    width: 360px;
    height: 80%;
    padding: 4rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
    margin-right: 0px;
    margin-left: 0px;
}
.form__div {
    position: relative;
    height: 48px;
    margin-bottom: 1rem;
}
.form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: 1px solid #57646f;
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;
}
.form__label {
    position: absolute;
    left: 1rem;
    top: 0.87rem;
    padding: 0 0.25rem;
    background-color: #fff;
    color: #80868b;
    font-size: 1rem;
    transition: 0.3s;
}
.form__button {
    display: block;
    margin-left: auto;
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
    background-color: #14e4c9;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
}
.form__button:hover {
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}
/*Input focus move up label*/
.form__input:focus + .form__label {
    top: -0.5rem;
    left: 0.8rem;
    color: #14e4c9;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
}
/*Input focus sticky top label*/
.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
}
/*Input focus*/
.form__input:focus {
    border: 1.5px solid #14e4c9;
}
@media (max-width: 1460px) {
    .form {
        height: 90%;
    }
}
@media (max-width: 437px) {
    #particles-js {
        margin-top: 20vh;
    }
}
@media (max-width: 766px) {
    .jumbotron h1 {
        font-size: 1.2em;
    }
    #mevn {
        max-width: 60px;
        max-height: 60px;
    }
}
@media (max-width: 436px) {
    section {
        margin-bottom: 2vh;
    }
    .jumbotron h1 {
        font-size: 1em;
    }
}
</style>
