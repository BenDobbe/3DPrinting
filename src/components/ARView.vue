<template>
<a-scene id="scene" embedded arjs='sourceType: webcam;'>
  <a-marker preset='hiro'>
    <a-entity gltf-model="url(./assets/suzanna.glb)" scale=""></a-entity>
  </a-marker>
  <a-entity camera></a-entity>
  </a-scene>
</template>

<script>
export default {
  name: 'ARView',
  data () {
    return {
      models: [
    ]
    }
  },
  mounted () {
  }

}
</script>
