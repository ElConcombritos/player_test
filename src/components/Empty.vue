<template>
  <div :id="Element.json.name_media" class="empty_media" style="width: 100%;height: 100%">
    <p>empty</p>
  </div>
</template>

<script>
import $ from 'jquery'
//import "../../scripts/plugin_trafic"
export default {
  name: "Trafic",
  props: {
    Element: Object
  },
  data() {
    return {

    }
  },
  mounted: function () {
    console.log(this.Element);
    this.init_plugin_empty()
  },
  methods: {
    init_plugin_empty(div, json) {
      console.log("empty");
    }

  }
}
</script>

<style scoped>
.trafic_media {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height:100%
}
</style>
