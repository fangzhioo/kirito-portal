<template>
  <div>
    <TiptapEditor v-model="content" />

    <v-card :elevation="4" class="mb-4">
      <div v-html="content"></div>
    </v-card>
    <v-card :elevation="4" class="mb-4">
      {{ content }}
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TiptapEditor from '@/components/TiptapEditor/index.vue';

@Component({
  name: 'ArticlePublishPage',
  layout: 'studioLayout',
  components: { TiptapEditor },
})
export default class name extends Vue {
  content: string = ``;

  mounted() {
    // setTimeout(() => {
    //   this.content = '<p>reset</p>';
    // }, 3000);
  }
}
</script>
