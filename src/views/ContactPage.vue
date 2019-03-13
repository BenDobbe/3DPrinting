<template>
    <main>
        <section class="section contact m-top">
            <div class="container flex">
                <h2 class="text-center lowercase">Nog een vraag? Laat het ons weten!</h2>
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Tom Neuttiens</h4>
                        <p>
                            <span>Docent 3D Modeling</span>
                            <br> 
                            <a class="orange">mail@example.be</a> 
                        </p>
                    </div>
                    <div class="contact__block">
                        <h4>Inge Sintobin</h4>
                        <p>
                            <span>Docent 3D Modeling</span>
                            <br> 
                            <a class="orange">mail@example.be</a> 
                        </p>
                    </div>
                </div>
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Contact</h4>
                        <p>
                            Campus Kantienberg
                            <br>
                            Voetweg 66
                            <br>
                            9000 Gent
                        </p>
                        <p class="orange">
                            +32 45 41 25 21
                            <br>
                            <a>mail@example.com</a>
                        </p>
                    </div>
                </div>
                <div class="contact__column col-4">
                    <div class="contact__block">
                        <h4>Sociale Media</h4>
                        <p>
                            Volg ons en kom meer te weten
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section map">
            <img src="../assets/images/map--gray.png" style="width: 100%">
        </section>
        <section class="section contact-form">
            <h3>Contactformulier</h3>
            <form class="form">
                <div class="form-group">
                    <label for="name">Naam</label>
                    <input type="text" class="form-control" name="name">
                </div>
                <div class="form-group">
                    <label for="subject">Onderwerp</label>
                    <input type="text" class="form-control" name="subject">
                </div>
                <div class="form-group">
                    <label for="message">Bericht</label>
                    <textarea class="form-control" name="message" rows="10"></textarea>
                </div>
                <button class="btn btn--primary">Schrijf je in</button>
            </form>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'ContactPage',
    }
</script>

<style style="scss" scoped>
    .orange {
        color: orange;
    }
    .contact {
        margin-top: 7.5rem;
    }
    .lowercase {
        text-transform: inherit;
    }
    .contact-form {
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;
    }
    .contact-form > h3 {
        margin-bottom: 4rem;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
    }
    .form-group > label {
        margin-bottom: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: left;
    }
    .form-control {
        background: #EBEBEB;
        border-radius: 8px;
    }
    .form-control[type="text"] {
        height: 40px;
    }
    .form {
        text-align: center;
    }
</style>
