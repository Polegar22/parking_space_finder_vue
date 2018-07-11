<template>
<div id="app">
  <router-view name="toolbar"></router-view>
  <main>
    <router-view class="container"></router-view>
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
