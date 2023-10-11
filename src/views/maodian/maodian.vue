<template>
    <Anchor :sections="sections" @click="handleClick" scrollBehavior="{ behavior: 'smooth', block: 'start' }">
      <section  class="boxsd" v-for="section in sections" :key="section.id" :id="section.id">
        <h3>{{ section.title }}</h3>
         ...
      </section>
    </Anchor>
  </template>
  
  <script>
  import Anchor from '/@/components/Anchor.vue'
  
  export default {
    components: {
      Anchor,
    },
    data() {
      return {
        sections: [
          {
            id: 'section1',
            title: 'Section 1',
          },
          {
            id: 'section2',
            title: 'Section 2',
          },
          {
            id: 'section3',
            title: 'Section 3',
          },
        ],
      }
    },
    methods: {
      handleClick(id) {
        console.log(id) // 当前激活的锚点 ID
      },
    },
  }
  </script>
  <style>
    .boxsd{
        height: 1800px;
    }
  </style>