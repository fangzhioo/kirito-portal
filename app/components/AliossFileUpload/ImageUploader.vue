<template>
  <div class="img-upload">
    <AliossFileUpload
      file-suffix="png|jpeg|jpg|gif|svg"
      label="点击添加文章封面"
      @beforeUpload="handleBeforeUpload"
      @success="handleSuccess"
      @error="handleError"
      @progress="handleProgress"
    >
      <div v-if="!!url">
        <v-img height="300" :src="url" />
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
.img-upload {
  padding: 20px;
  background-color: aliceblue;
}
</style>
