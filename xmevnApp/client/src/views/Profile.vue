<template>
    <!-- about page -->
    <div>
        <header-title title="Profile |MixPersonal" />
        <br />
        <section class="about container">
            <div class="container title">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container-fluid">
                        <h5 class="display-4">Profile</h5>
                        <p class="lead"></p>
                    </div>
                    <hr />
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <img id="me" :src="`/assets/post/image_1621598127981_me1.jpg`" alt="" />
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Web Developer</h3>
                        <span class="text-e">"I have no special talents. I am only passionatelly curious."
                            -A.Einstein</span>
                        <p>My job is developing website app, Front-End and Back-End you can call me Full Stack developer
                            if I deserve it. Focus on one programming language, JavaScript</p>
                        <br />
                        <div class="row d-flex">
                            <div class="col-lg-6" style="text-align: start">
                                <ul style="list-style-type: none">
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Name: </strong>
                                        Rivane Rasetiansyah
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Date of Birth:</strong>
                                        February 18, 2001
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Education:</strong>
                                        Jenderal Achmad Yani University
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Majors:</strong>
                                        Informatics
                                    </li>
                                    <hr id="none" />
                                </ul>
                            </div>
                            <div class="col-lg-6 right" style="text-align: start">
                                <ul style="list-style-type: none">
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Address:</strong>
                                        Bandung, Indonesia
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Zip code:</strong>
                                        40394
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Email:</strong>
                                        rasetiansyah@outlook.com
                                    </li>
                                    <li>
                                        <strong><i class="fas fa-angle-right"></i><span style="color: white"> | </span>
                                            Phone:</strong>
                                        +62 851-6110-3325
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="particles-js"></div>
                        <div class="container" style="margin-top: 20px; margin-bottom: 5px">
                            <a id="contact" target="_blank" href="https://discordapp.com/users/742543110856507482"><i
                                    class="fab fa-discord"></i></a>
                            <a id="contact" target="_blank" href="https://github.com/xaaphrodite"><i
                                    class="fab fa-github"></i></a>
                            <a id="contact" target="_blank" href="https://www.instagram.com/rasetnsyh"><i
                                    class="fab fa-instagram"></i></a>
                            <a id="contact" target="_blank"
                                href="https://www.linkedin.com/in/rivane-rasetiansyah-b55199212"><i
                                    class="fab fa-linkedin"></i></a>
                            <a id="contact" target="_blank" href="https://www.facebook.com/xaaphrodite"><i
                                    class="fab fa-facebook-square"></i></a>
                        </div>
                        <a @click="alert"><button class="btn btn-outline-success btn-sm">Download CV</button></a>
                        <img id="undraw10" src="/assets/undraw/undraw10.svg" />
                        <div style="margin-top: 20px" v-if="alertT" class="alert alert-success" role="alert">CV is not
                            yet available</div>
                    </div>
                </div>
            </div>
        </section>

        <section style="margin-top: 28px">
            <skills />
        </section>

        <section style="margin-top: 28px">
            <br />
            <div class="container title">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container-fluid">
                        <h5 class="display-4">Collection</h5>
                        <p class="lead"></p>
                    </div>
                    <hr />
                </div>
            </div>
            <p style="margin-top: -10px; margin-bottom: 30px">
                My certifications and other achievements <br />
                "Let us cultivate our garden." -Voltaire
            </p>

            <div class="container">
                <div>
                    <h4 id="title"><b>JavaScript Algorithms and Data Structures</b></h4>
                    <p class="text">Issued May 15 2021 No Expiration Date</p>
                    <img :src="`/assets/certificate/JavaScriptAlgorithmsandDataStructures.jpg`" id="cer" alt="" />
                    <br />
                    <p id="credential">
                        https://freecodecamp.org/certification/xaaphrodite/javascript-algorithms-and-data-structures</p>
                    <a target="_blank"
                        href="https://freecodecamp.org/certification/xaaphrodite/javascript-algorithms-and-data-structures">
                        <p style="margin-bottom: 30px; margin-top: -15px; color: #80bc01">See credential</p>
                    </a>
                </div>
                <div>
                    <h4 id="title"><b>Responsive Web Design</b></h4>
                    <p class="text">Issued May 23 2021 No Expiration Date</p>
                    <img :src="`/assets/certificate/ResponsiveWebDesign.jpg`" id="cer" alt="" />
                    <br />
                    <p id="credential">https://freecodecamp.org/certification/xaaphrodite/responsive-web-design</p>
                    <a target="_blank" href="https://freecodecamp.org/certification/xaaphrodite/responsive-web-design">
                        <p style="margin-bottom: 30px; margin-top: -15px; color: #80bc01">See credential</p>
                    </a>
                </div>
            </div>
        </section>
    </div>

    <!-- end of about page -->
</template>

<script>
// import henllomevn from "./@henllomevn";
import headerTitle from "../components/header-title";
import progress from "nprogress";
import Skills from "../components/skills";
export default {
    components: { headerTitle, Skills },
    data() {
        return {
            mevn: [],
            alertT: false,
        };
    },
    async created() {
        progress.start();
        // this.mevn = await henllomevn.getOwner();
        progress.done();
    },
    methods: {
        alert() {
            this.alertT = true;
        },
    },
};
</script>
<style scoped>
#undraw10 {
    max-width: 60%;
    max-height: 60%;
    z-index: -2;
    opacity: 0.9;
}
#none {
    display: none;
}
#particles-js {
    position: absolute;
    z-index: -1;
    width: 45%;
    height: 35%;
}
#me {
    max-width: 150px;
    border-radius: 15px;
    margin-top: 25px;
    margin-bottom: 20px;
    box-shadow: 10px 7px 10px rgba(0, 0, 0, 0.3);
}

#contact {
    font-size: 40px;
    color: #80bc01;
    margin-right: 8px;
    z-index: 1;
}

.col-md-4 {
    transition: all 0.5s ease-in-out;
    margin-left: 200px;
}

.col-md-8 {
    transition: all 0.5s ease-in-out;
    margin-left: -300px;
}

#cer {
    transition: all 0.5s ease-in-out;
    margin-bottom: 20px;
    box-shadow: 10px 7px 10px rgba(0, 0, 0, 0.5);
}

div {
    text-align: center;
}

.container {
    width: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.jumbotron {
    color: #57646f;
}

#email {
    margin-left: 151px;
}
.about .row-left {
    width: 50%;
}
.about-content {
    display: flex;
    width: 100%;
    margin-right: -20px;
}

.about-content li {
    display: flex;
    text-align: start;
    margin: 0.5rem 1rem;
}
.about-content li span {
    flex: 1;
}
.about-content li span:first-child {
    color: #57646f;
    font-weight: 600;
}

.about .col h3 {
    color: #80bc01;
    font-size: 1.5rem;
}
.about .col h3 span {
    color: #57646f;
    font-weight: 400;
}

#cer {
    width: 50%;
}

@media (max-width: 1400px) {
    #particles-js {
        width: 50%;
    }
    ul li a::before {
        display: none;
    }
    ul li a:hover {
        color: #57646f;
    }

    #email {
        margin-left: 151px;
    }
}

@media (max-width: 1390px) {
    #email {
        margin-left: 151px;
    }

    .col-md-4 {
        margin-left: 100px;
    }

    .col-md-8 {
        margin-left: -100px;
    }
}

@media (max-width: 990px) {
    #none {
        display: block;
    }
}

@media (max-width: 768px) {
    p {
        font-size: 0.9em;
    }
    li {
        font-size: 0.8em;
    }
    h3 {
        font-size: 1em;
    }
    .col-md-4 {
        margin-left: 0px;
    }

    .col-md-8 {
        margin-left: 0px;
    }

    #me {
        margin-top: 0px;
        max-width: 115px;
    }
}

@media (max-width: 440px) {
    #particles-js {
        width: 90%;
        height: 270px;
    }
    p {
        font-size: 0.6em;
    }
    .text-e {
        font-size: 0.5em;
    }
    li {
        font-size: 0.55em;
    }
    h3 {
        font-size: 1em;
    }
    h4 {
        font-size: 1em;
    }
    #credential {
        font-size: 0.6em;
    }
    .jumbotron h5 {
        font-size: 1.3em;
    }
    .jumbotron p {
        font-size: 0.7em;
    }
}
</style>
