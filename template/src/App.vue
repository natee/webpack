<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <hello/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import hello from './pages/hello'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    hello
  }{{/router}}
}
</script>

<style>

</style>
