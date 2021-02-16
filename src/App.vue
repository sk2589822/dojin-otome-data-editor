<template>
  <div id="app">
    <TheHeader class="header" />
    <keep-alive>
      <transition
        :name="transitionName"
      >
        <router-view />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      transitionName: '',
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = from.name === 'Main' ? 'slide-left' : 'slide-right'
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  position: relative;
  background-color: #f3f6f9 !important;
  padding: 0;
  color: #222;
}

th,
td {
  border: 1px solid #000;
}

table {
  border-collapse: collapse;
}

a:hover {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  position: fixed;
  transition: 0.5s;
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(-100%);
}
</style>
