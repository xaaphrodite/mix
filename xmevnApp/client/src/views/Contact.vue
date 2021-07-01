<template>
    <main>
        <br />
        <div class="container">
            <header-title title="Contact |MixPersonal" />
            <br>
            <div class="container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container-fluid">
                        <div id="particles-js"></div>
                        <br />
                        <h5 class="display-4">Get in touch</h5>
                    </div>
                    <hr />
                    <p class="lead" id="text">Apart from being able to contact us on the profile page, you can also
                        contact us here.</p>
                </div>
            </div>
            <section id="contact" class="contact">
                <div class="container">
                    <div class="row" data-aos="fade-in">
                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">

                                <div class="email">
                                    <i class="fas fa-envelope"></i>
                                    <h4>Email :</h4>
                                    <p>rasetiansyah@outlook.com</p>
                                    <p style="margin-top: -37px">rasetiansyah@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="fas fa-mobile-alt"></i>
                                    <h4>Call or WhatsApp :</h4>
                                    <p>+62 851-6110-3325</p>
                                </div>

                                <div class="address">
                                    <i class="fas fa-map-marked-alt"></i>
                                    <h4>Location :</h4>
                                    <p>Bandung, Indonesia</p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253497.13516734913!2d107.50307079265457!3d-6.90342901505421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1624242867838!5m2!1sen!2sid"
                                    frameborder="0" style="border: 0; width: 100%; height: 300px;"
                                    allowfullscreen></iframe>
                            </div>
                        </div>

                        <div @submit.prevent="submitMessage"
                            class="col-lg-7 mt-3 mb-3 mt-lg-0 d-flex align-items-stretch">
                            <form name="submit-to-google-sheet" role="form" class="formContact">
                                <div class="form-row">

                                    <div class="text-end">
                                        <img id="undraw11" src="/assets/undraw/undraw11.png" alt="">
                                    </div>

                                    <div class="fieldEntry">
                                        <div class="form-group col-md-6">
                                            <label for="name">Name</label>
                                            <input v-model="form.name" type="text" name="name" class="form-control"
                                                id="name" placeholder="Your fullname"
                                                oninvalid="this.setCustomValidity('Required, minimal 4 character')"
                                                oninput="setCustomValidity('')" />
                                            <div class="validate"></div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="name">Email</label>
                                            <input v-model="form.email" type="email" class="form-control" name="email"
                                                id="email" placeholder="Your email"
                                                oninvalid="this.setCustomValidity('Please Enter valid email')"
                                                oninput="setCustomValidity('')" />
                                            <div class="validate"></div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="name">Subject</label>
                                        <input v-model="form.subject" type="text" class="form-control" name="subject"
                                            id="subject" placeholder="Subject"
                                            oninvalid="this.setCustomValidity('Subject required')"
                                            oninput="setCustomValidity('')" />
                                        <div class="validate"></div>
                                    </div>

                                    <div class="form-group">
                                        <label for="name">Message</label>
                                        <textarea v-model="form.message" class="form-control" name="message" rows="10"
                                            placeholder="Hello!"></textarea>
                                        <div class="validate"></div>
                                    </div>

                                    <div class="text-end mt-2">
                                        <button class="send" type="submit">Send message</button>
                                        <button class="load none btn btn-success" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status"
                                                aria-hidden="true"></span>
                                            Sending...
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div v-if="successAlert" class="alert alert-success mt-3" role="alert">
                            The message has been sent, be patient, it will be replied to your email soon
                        </div>
                        <div v-if="failAlert" class="alert alert-danger" role="alert">
                            Failure, temporarily please contact me via the link provided <a style="color: #80bc01"
                                href="/profile">here.</a>
                        </div>
                        <hr style="margin-top: 15px">
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import headerTitle from "../components/header-title.vue";
import {
    required,
    email,
    numeric,
    minLength,
    maxLength,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import progress from "nprogress";
export default {
    components: { headerTitle },
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                subject: null,
                message: null,
            },
            successAlert: false,
            failAlert: false,
        };
    },
    validations() {
        return {
            form: {
                name: { required, minLength: minLength(4) },
                email: { required, email },
                subject: { required },
                message: { required, minLength: minLength(4) },
            },
        };
    },
    mounted() {
        const formControl = document.querySelectorAll(".form-control");
        formControl.forEach((el) => {
            el.required = true;
        });
    },
    methods: {
        submitMessage() {
            this.v$.$validate();
            if (this.v$.$error) {
                return;
            }

            let send = document.querySelectorAll(".send");
            send.forEach((el) => {
                el.classList.add("none");
            });
            let load = document.querySelectorAll(".load");
            load.forEach((el) => {
                el.classList.remove("none");
            });

            progress.start();

            const scriptURL =
                "https://script.google.com/macros/s/AKfycbz-ScbVvgyTn4fooRGll5ms8kXvvRvnEnaWhjNwPgmCB2_T_wjM8IBMWCT0AxzpGE7fJA/exec";
            const form = document.forms["submit-to-google-sheet"];

            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    console.log("Success");
                    this.successAlert = true;
                    this.failAlert = false;

                    let send = document.querySelectorAll(".send");
                    send.forEach((el) => {
                        el.classList.remove("none");
                    });
                    let load = document.querySelectorAll(".load");
                    load.forEach((el) => {
                        el.classList.add("none");
                    });
                    progress.done();
                })
                .catch((error) => {
                    this.failAlert = true;
                    this.successAlert = false;

                    let send = document.querySelectorAll(".send");
                    send.forEach((el) => {
                        el.classList.remove("none");
                    });
                    let load = document.querySelectorAll(".load");
                    load.forEach((el) => {
                        el.classList.add("none");
                    });
                    progress.done();
                });
        },
    },
};
</script>

<style scoped>
.none {
    display: none;
}
#particles-js {
    width: 100%;
    height: 15vh;
    margin-bottom: -155px;
}
.jumbotron {
    /* color: #edf0f1; */
    /* margin-top: 20px; */
    color: #57646f;
    transition: all 0.5s ease 0s;
}

#undraw11 {
    max-width: 320px;
    margin-bottom: -65px;
}

.row {
    height: 0;
}

.col-lg-7 {
    height: 635px;
}

.fieldEntry {
    margin-top: -106px;
}

.col-lg-5 {
    height: 635px;
}

textarea {
    min-height: 270px;
    max-height: 270px;
}

.contact {
    padding-bottom: 130px;
}

.contact .info {
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .info i {
    font-size: 20px;
    color: #80bc01;
    float: left;
    width: 44px;
    height: 44px;
    background: #dff3fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
}

.contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #050d18;
}

.contact .info p {
    padding: 0 0 10px 60px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #173b6c;
}

.contact .info .email p {
    padding-top: 5px;
}

.contact .info .social-links {
    padding-left: 60px;
}

.contact .info .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #333;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    margin-right: 10px;
}

.contact .info .social-links a:hover {
    background: #80bc01;
    color: #fff;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
    background: #80bc01;
    color: #fff;
}

.contact .formContact {
    width: 100%;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .formContact .form-group {
    padding-bottom: 8px;
}

.contact .formContact .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
}

.contact .formContact .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
}

.contact .formContact .error-message br + br {
    margin-top: 25px;
}

.contact .formContact .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .formContact .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
}

.contact .formContact .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
}

.contact .formContact input,
.contact .formContact textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
}

.contact .formContact input {
    height: 44px;
}

.contact .formContact textarea {
    padding: 10px 12px;
}

.contact .formContact button[type="submit"] {
    background: #80bc01;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 4px;
}

.contact .formContact button[type="submit"]:hover {
    background: orange;
}

.btn {
    cursor: pointer;
}

#message {
    color: red;
    font-size: 0.7em;
    margin-top: -5px;
    margin-bottom: 5px;
}

@media (max-width: 1399px) {
    #undraw11 {
        max-width: 280px;
    }
}
@media (max-width: 1199px) {
    #undraw11 {
        max-width: 230px;
        margin-top: 20px;
    }
    .fieldEntry {
        margin-top: -88px;
    }
}

@media (max-width: 991px) {
    .row {
        height: 135vh;
    }
    #undraw11 {
        max-width: 300px;
        margin-top: 0px;
    }
    .fieldEntry {
        margin-top: -110px;
    }
}

@media (max-width: 767px) {
    .fieldEntry {
        margin-top: 0px;
    }

    #undraw11 {
        display: none;
    }

    #text {
        font-size: 1em;
    }
}

@-webkit-keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
