<template>
  <div class="main-contactpage">
    <div class="container-fluid contactpage-container w-100">
      <div class="row">
        <!-- contact form -->
        <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
          <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
            <!-- Name -->
            <div class="form-group label-floating">
              <label class="control-label" for="name">Name</label>
              <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name">
              <div class="help-block with-errors"></div>
            </div>
            <!-- email -->
            <div class="form-group label-floating">
              <label class="control-label" for="email">Email</label>
              <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email">
              <div class="help-block with-errors"></div>
            </div>
            <!-- Subject -->
            <div class="form-group label-floating">
              <label class="control-label">Subject</label>
              <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject">
              <div class="help-block with-errors"></div>
            </div>
            <!-- Message -->
            <div class="form-group label-floating">
              <label for="message" class="control-label">Message</label>
              <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
              <div class="help-block with-errors"></div>
            </div>
            <!-- Form Submit -->
            <div class="form-submit mt-5">
              <button class="bttn-dark" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
            </div>
          </form>
        </div>
        <div id="map" class="col-md-6">
        </div>
      </div>
    </div>
    <!--[ footer ] -->
    <vue-footer></vue-footer>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  mounted () {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuZG9iYmUiLCJhIjoiY2pzZGwxbmttMHYxYzN6bWw4c3Y1eDllaSJ9.h_awGMrprXjPMxaxtpZHFg';
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bendobbe/cjsdme5bm12zb1fqjxrfqpp6m',
    center: [3.726710, 51.041052],
    zoom: 15.5
    });
  }
}
</script>

<style lang="scss">
// .navbar a {
//   color: $darkgrey !important;
// }

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

form {
  padding-left: 75px;
  padding-right: 75px;
}
</style>