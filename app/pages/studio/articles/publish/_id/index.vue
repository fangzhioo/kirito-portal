<template>
  <div class="pb-10 article-publish-page">
    <v-skeleton-loader :loading="loading" type="list-item-three-line" class="mx-auto">
      <v-text-field v-model="title" class="page-title" placeholder="Title" full-width counter="50"></v-text-field>
      <TiptapEditor ref="tiptapEditor" v-model="content" />
      <v-btn color="primary" @click="handleSubmit">Submit</v-btn>
    </v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import TiptapEditor from '@/components/TiptapEditor/index.vue';

@Component({
  name: 'ArticlePublishPage',
  layout: 'studioLayout',
  components: { TiptapEditor },
})
export default class name extends Vue {
  title: string = ``;
  content: string = ``;
  loading: boolean = true;

  handleSubmit() {
    if (isEmpty(this.title)) {
      alert('标题不能为空！');
      return;
    }
    if (isEmpty(this.content)) {
      alert('正文不能为空');
      return;
    }
    const payload = {
      title: this.title,
      content: this.content,
    };
    console.log(payload);
    this.$store.dispatch({
      type: 'article/postPublishArticle',
      payload,
      callback: (res: any) => {
        if (res && res.code === 200) {
          this.$router.push('/');
        } else {
          alert(res.msg);
        }
      },
    });
  }

  mounted() {
    setTimeout(() => {
      this.content = '<p>This is some inserted text. 👋</p><pre><code>console.log("1111")</code></pre><p></p>';
      this.loading = false;
    }, 3000);
  }
}
</script>

<style lang="scss">
.article-publish-page {
  min-height: 600px;
  .page-title {
    font-size: 36px;
    line-height: 1.389;
  }
}
</style>
