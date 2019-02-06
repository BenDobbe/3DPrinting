<template>
  <div class="wrapper">
    <!-- add some info at the top of the page -->
    <div style='position: fixed; top: 10px; width:100%; text-align: center; z-index: 1;'>
      <a href="" target="_blank">Continue to website</a>
    </div>
    <!-- Define your 3d scene and enabled ar.js -->
    <a-scene embedded arjs='trackingMethod: best;'>
      <!-- Create a anchor to attach your augmented reality -->
      <a-anchor hit-testing-enabled='true'>
          <!-- Add your augmented reality here -->
          <a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
          <a-torus-knot radius='0.26' radius-tubular='0.05'>
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
          </a-torus-knot>
        </a-box>
      </a-anchor>

      <!-- Define a static camera -->
      <a-camera-static/>
    </a-scene>
  </div>
</template>

<script>
  export default {
    components: {
    },
    mounted() {
    let aframeScript = document.createElement('script')
    aframeScript.setAttribute('src', 'https://aframe.io/releases/0.8.0/aframe.min.js')
    document.head.appendChild(aframeScript)
    let aframeARScript = document.createElement('script')
    aframeARScript.setAttribute('src', 'https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js')
    document.head.appendChild(aframeARScript)
    /*let threeScript = document.createElement('script')
     threeScript.setAttribute('src', '../../node_modules/three/build/three.min.js')
    document.head.appendChild(threeScript)*/
    }
  }
</script>

<style>
body{
  margin: 0px !important;
  overflow: hidden;
}
/*a-scene {
  height: 300px;
  width: 600px;
}

a-scene.fullscreen canvas.a-canvas {
  position: absolute !important;
}

.a-canvas {
  display: inline-block !important;
}

video {
  /*margin-top: 100px !important;
  width: 300px !important;
  height: 600px !important;*/
  /*position: relative !important;
  z-index: 0 !important;
}

a, a:link, a:visited, a:focus, a:hover, a:active{
  color:olive;
  text-decoration:none; 
  cursor: pointer;
}

p {
  display: inline-block;
}*/
</style>