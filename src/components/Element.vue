<template>
  <div>
    <p>{{$store.state.indiceElement}}</p>

    <div style="height: 100%" v-if="Element.type === 'empty'">
      <Empty :Element="Element"></Empty>
    </div>
    <div style="height: 100%" v-if="Element.type === 'trafic'">
      <Trafic :Element="Element"></Trafic>
    </div>
  </div>
</template>
<script>

import Trafic from "@/components/Trafic";
import Empty from "@/components/Empty";

export default {
  name: "Element",
  components: {Trafic,Empty},
  props: {
    Element : {
      type: Object,
    }
  },
  methods: {
  },
  computed: {
    style() {
      if (this.Element.hover){
        return "outline : 1px solid black"
      }
      else {
        return ""
      }
    }
  }
}
</script>
