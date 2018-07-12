<template>
<div id="app" class="container">
  <header>
    <router-view name="toolbar"></router-view>
  </header>

  <main>
    <router-view class="content"></router-view>
  </main>
</div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './assets/css/general.scss';
</style>
