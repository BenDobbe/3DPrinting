<template>
  <!--<a-scene id="scene" embedded arjs='sourceType: webcam;'>
    <vue-dino>

    </vue-dino>
    <a-entity camera></a-entity>
  </a-scene> -->
  <div></div>
</template>

<script>
export default {
  name: 'ARView',
  mounted () {
    let divWrapper = document.createElement('div')
    divWrapper.setAttribute('class', 'arWrapper')
    divWrapper.setAttribute('id', 'arWrapper')
    document.body.appendChild(divWrapper)
    let divLink = document.createElement('div')
    divLink.setAttribute('class', 'arLink')
    divLink.setAttribute('id', 'arLink')
    divWrapper.appendChild(divLink)
    let link = document.createElement('a')
    link.setAttribute('href', 'https://www.gdm.gent/#/home')
    link.innerHTML = "Continue to website"
    divLink.appendChild(link)
    let aScene = document.createElement('a-scene')
    aScene.setAttribute('id', 'scene')
    aScene.setAttribute('arjs', 'sourceType: webcam;')
    aScene.setAttribute('embedded')
    document.body.appendChild(aScene)
    let aMarker = document.createElement('a-marker')
    //--aMarker.setAttribute('type', 'pattern')
    aMarker.setAttribute('preset', 'hiro')
    //aMarker.setAttribute('url', './assets/pattern-marker.patt')
    aScene.appendChild(aMarker)
    let aEntity = document.createElement('a-entity')
    aEntity.setAttribute('gltf-model', 'url(./assets/suzanna.glb)')
    aMarker.appendChild(aEntity)
    let aEntityCamera = document.createElement('a-entity')
    aEntityCamera.setAttribute('camera')
    aScene.appendChild(aEntityCamera)
  }

}
</script>

<style>
.arWrapper {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
  color: grey;
}
.arLink {
  color: rgba(0, 0, 0, 0.9);
  background-color: rgba(127, 127, 127, 0.5);
  display: inline-block;
  padding: 0.5em;
  margin: 0.5em;
  text-align: left;
}

.arLink a{
  display: block;
}
</style>