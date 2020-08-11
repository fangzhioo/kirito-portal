<template>
  <div id="video-publish" class="pa-4">
    <v-container>
      <!-- <div class="d-flex justify-space-between mb-5"> -->
      <v-btn text small class="pl-0" @click="$router.go(-1)"><v-icon left>mdi-arrow-left</v-icon>Videos</v-btn>
      <h2 class="mt-5">Video Publish</h2>
      <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
        <form @submit.prevent="handleSubmit(submit)" @reset.prevent="reset">
          <v-row>
            <v-col cols="12">
              <VideoUploader v-model="formData.content" />
            </v-col>
            <v-col xl="12" sm="12" md="4" lg="4">
              <ImageUploader v-model="formData.thumb" />
            </v-col>
            <v-col xl="12" sm="12" md="8" lg="8">
              <ValidationProvider v-slot="{ errors }" name="Title" rules="required|min:3">
                <v-text-field
                  v-model="formData.title"
                  :error-messages="errors"
                  label="Title (required)"
                  class="mb-3"
                  filled
                  dense
                  counter="100"
                  max-length="100"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="Description" rules="required|min:3">
                <v-textarea
                  v-model="formData.desc"
                  filled
                  auto-grow
                  :error-messages="errors"
                  label="Description"
                  placeholder="Tell viewers about your video"
                  rows="5"
                  counter="5000"
                  max-length="5000"
                  row-height="20"
                ></v-textarea>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <div class="mt-6 d-flex justify-space-between">
                <v-btn type="submit" class="primary" depressed>Submit</v-btn>
              </div>
            </v-col>
          </v-row>
        </form>
      </ValidationObserver>
    </v-container>
  </div>
</template>

<script>
import ImageUploader from '@/components/AliossFileUpload/ImageUploader.vue';
import VideoUploader from '@/components/AliossFileUpload/VideoUploader.vue';

export default {
  layout: 'studioLayout',
  name: 'VideoPublishPage',
  components: { ImageUploader, VideoUploader },
  data() {
    return {
      formData: {
        title: '',
        content: '',
        desc: '',
        thumb: '',
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      if (!this.formData.content) {
        alert('请选择上传的视频');
        return;
      }
      if (!this.formData.thumb) {
        alert('请选择视频封面');
        return;
      }
      this.$store.dispatch({
        type: 'studioVideo/submitPublishVideo',
        payload: {
          ...this.formData,
        },
        callback: () => {
          this.$router.push('/');
        },
      });
    },
  },
};
</script>

<style lang="scss">
.video-publish {
  // yemian
}
</style>
