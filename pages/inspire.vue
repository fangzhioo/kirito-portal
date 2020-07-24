<template>
  <v-layout>
    <v-flex class="text-center">
      <!--  -->
      <Calendars />
      <v-divider></v-divider>
      <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
      </v-parallax>
      <v-divider></v-divider>
      <div class="wrapper">
        <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline>
        <v-divider></v-divider>
        <v-timeline>
          <v-timeline-item>timeline item</v-timeline-item>
          <v-timeline-item class="text-right">timeline item</v-timeline-item>
          <v-timeline-item>timeline item</v-timeline-item>
        </v-timeline>
        <v-divider></v-divider>
        <div class="text-center">
          <v-rating v-model="rating"></v-rating>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Calendars from '~/components/Calendars.vue';
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];

export default {
  components: { Calendars },
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    rating: 4,
  }),
  head() {
    return {
      title: 'demo',
      meta: [
        { name: 'keywords', content: 'kirito,我是关键字' },
        { name: 'description', content: '我是描述！' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 3000px;
  background-color: aliceblue;
}
</style>
