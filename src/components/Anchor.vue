<template>
    <div class="anchor-scrollspy">
      <nav class="sticky-top">
        <ul class="nav nav-pills flex-column">
          <li v-for="(section, index) in sections" :key="section.id" class="nav-item">
            <a :href="`#${section.id}`" :class="{ active: activeIndex === index }" @click="handleClick(section)">
              {{ section.title }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="content">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, onUnmounted, ref } from 'vue'
  
  export default {
    props: {
      sections: {
        type: Array,
        required: true,
        default: () => [],
      },
      activeClass: {
        type: String,
        default: 'active',
      },
      scrollBehavior: {
        type: Object,
        default: () => ({ behavior: 'smooth' }),
      },
    },
    emits: ['click'],
    setup(props, { emit }) {
      const activeIndex = ref(0)
      const observer = ref(null)
      const handleClick = (section) => {
        const index = props.sections.findIndex((s) => s.id === section.id)
        if (index !== -1) {
          activeIndex.value = index
          emit('click', section.id)
        }
      }
  
      onMounted(() => {
        observer.value = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = props.sections.findIndex((s) => s.id === entry.target.id)
              if (index !== -1) {
                activeIndex.value = index
                emit('click', entry.target.id)
                window.location.hash = `#${entry.target.id}`
              }
            }
          })
        })
        props.sections.forEach((section) => {
          const target = document.getElementById(section.id)
          if (target) {
            observer.value.observe(target)
          }
        })
  
        window.addEventListener('hashchange', () => {
          const id = window.location.hash.slice(1)
          if (id) {
            const section = props.sections.find((s) => s.id === id)
            if (section) {
              activeIndex.value = props.sections.indexOf(section)
              const target = document.getElementById(id)
              if (target) {
                target.scrollIntoView(props.scrollBehavior)
              }
            }
          }
        })
      })
  
      onUnmounted(() => {
        observer.value.disconnect()
      })
  
      return {
        activeIndex,
        handleClick,
      }
    },
  }
  </script>
  
  <style>
  .anchor-scrollspy {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-height: calc(100vh - 3rem);
    margin-bottom: 16px;
  }
  
  .anchor-scrollspy .sticky-top {
    top: 3rem;
    max-width: 275px;
    overflow-y: auto;
    height: 100%;
    position: fixed;
  }
  
  .anchor-scrollspy .nav-pills .nav-link {
    color: #041e42;
    border-radius: 0.25rem;
  }
  
  .anchor-scrollspy .nav-pills .nav-link:hover {
    color: #041e42;
    background-color: #e9ecef;
  }
  
  .anchor-scrollspy .nav-pills .active .nav-link {
    color: #fff;
    background-color: #0d6efd;
  }
  
  .anchor-scrollspy .content {
    flex-grow: 1;
    margin-left: 16px;
  }
  </style>