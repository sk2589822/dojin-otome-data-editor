<template>
  <header>
    <b-navbar
      toggleable="md"
      type="dark"
    >
      <b-navbar-brand>
        Dojin Otome Data Editor
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">
          主頁
        </b-nav-item>
        <b-nav-item to="Instruction">
          關於 & 教學
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-brand
        href="https://github.com/sk2589822/dojin-otome-data-editor"
        class="ml-4 mr-2 link-github"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
        Github
      </b-navbar-brand>
    </b-navbar>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #222;
}

.nav-item {
  text-align: center;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.link-github {
  font-size: 1rem;
}
</style>