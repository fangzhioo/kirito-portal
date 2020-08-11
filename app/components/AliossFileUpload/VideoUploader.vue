<template>
  <div class="video-upload">
    <AliossFileUpload
      path="/videos"
      file-suffix="flv|mp4|wav|mp3|pcm"
      label="点击上传视频"
      @beforeUpload="handleBeforeUpload"
      @success="handleSuccess"
      @error="handleError"
      @progress="handleProgress"
    >
      <div v-if="!!url">
        <video :src="url" controls></video>
      </div>
    </AliossFileUpload>
  </div>
</template>

<script>
import AliossFileUpload from './index';
export default {
  components: { AliossFileUpload },
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      url: this.value,
      progress: 0,
      loading: false,
    };
  },
  watch: {
    value(newV) {
      this.url = newV;
    },
  },
  methods: {
    handleBeforeUpload() {
      this.loading = true;
    },
    handleProgress(p) {
      this.progress = Math.floor(p * 100);
    },
    handleSuccess({ url }) {
      this.url = url;
      this.loading = false;
      this.$emit('input', url);
    },
    handleError({ msg }) {
      this.loading = false;
      alert(msg);
    },
  },
};
</script>

<style lang="scss">
.video-upload {
  padding: 20px;
  background-color: aliceblue;
  video {
    width: 100%;
    max-width: 100%;
  }
}
</style>
