<template>
  <div class="demo-page">
    <div>custom - 定制</div>

    <v-divider></v-divider>
    <div>
      <h1>Icon</h1>
      <ul>
        <li v-for="(item, name) in $vuetify.icons.values" :key="name">
          <v-icon v-text="item"></v-icon>
          <span> - {{ name }} </span>
        </li>
      </ul>
    </div>
    <v-divider></v-divider>
    <div>
      <p>
        {{ `noDataText: ` }}
      </p>
      <v-radio-group :value="$vuetify.lang.current" @change="handLangChange">
        <v-radio
          v-for="n in langs"
          :key="n"
          :label="`Lang - ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </div>
    <v-divider></v-divider>
    <p>Vuetify 支持 RTL (右至左) 语言</p>
    <v-switch v-model="$vuetify.rtl"></v-switch>
    <v-divider></v-divider>
    <p>切换主题</p>
    <v-switch
      v-model="$vuetify.theme.dark"
      hide-details
      inset
      label="Theme Dark"
    ></v-switch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    langs: ['en', 'ja', 'zhHans'],
  }),
  mounted() {
    this.getVuetify()
  },
  methods: {
    handLangChange(val: any) {
      this.$vuetify.lang.current = val
      this.getVuetify()
    },
    getVuetify() {
      console.log(this.$vuetify)
    },
  },
})
</script>

<style>
.demo-page {
  height: 3000px;
  background-color: rgba(194, 182, 182, 0.2);
}
</style>
