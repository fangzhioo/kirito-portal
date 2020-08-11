<template>
  <v-skeleton-loader type="image" :loading="initLoading" class="mx-auto">
    <div class="upload-wapper" @click.stop="handleWapperClick">
      <slot>
        <div class="vue-oss-upload-input">
          <v-progress-circular
            v-if="loading || progressVal === 100"
            :indeterminate="indeterminate"
            :value="progressVal"
            :size="50"
            :color="progressVal === 100 ? 'success' : 'primary'"
          >
            {{ `${progressVal === 100 ? 'OK' : progressVal}` }}
          </v-progress-circular>
          <template v-else>
            <i class="icon">+</i>
            <p>{{ label }}</p>
          </template>
        </div>
      </slot>
      <input :id="id" ref="input" type="file" class="file-input" hidden @change="upload" />
    </div>
  </v-skeleton-loader>
</template>

<script>
import md5 from 'blueimp-md5';
const aliossConfig = {
  accessKeyId: 'LTAI4G94S3v2QKcvky1Ft8ht',
  endpoint: 'oss-cn-hangzhou.aliyuncs.com',
  secret: 'zQgNdz6qYCV0H7yJVizyk8jCDptoBR',
  bucket: 'fangzhioo',
};
export default {
  name: 'AliossUploader',
  props: {
    debug: {
      type: Boolean,
      default: true,
    },
    path: {
      type: String,
      default: 'images/',
    },
    nameMode: {
      type: String,
      default: 'token', // name token
    },
    name: {
      type: String,
      default: '',
    },
    fileSuffix: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '请选择文件',
    },
  },
  data() {
    return {
      id: 'upload-input-file',
      error: false,
      success: false,
      initLoading: true,
      loading: false,
      client: null,
      localKeySet: { ...aliossConfig },
      fileReg: /\.(png|jpe?g|gif|svg|flv|mp4|wav|mp3|pcm)(\?.*)?$/,
      tempCheckpoint: undefined,
      progress: 0,
    };
  },
  computed: {
    indeterminate() {
      return this.progress === 0;
    },
    progressVal() {
      return Math.floor(this.progress * 100);
    },
  },
  created() {
    if (process.client) {
      if (typeof window === 'undefined') {
        this.error = true;
        console.error('找不到window！');
        return;
      }
      this.id = 'upload-input-file' + Math.random();
      // https://help.aliyun.com/document_detail/32069.html 控制台需要设置这些
      this.LoadJS('js_aliyun_oss', 'https://gosspublic.alicdn.com/aliyun-oss-sdk-6.8.0.min.js');
      this.preInit();
    }
  },
  methods: {
    preInit() {
      this.progress = 0;
      this.tempCheckpoint = undefined;
      let timer = setInterval(() => {
        if (window && window.OSS) {
          this.init();
          clearInterval(timer);
          timer = null;
          this.debug && window.console.log('阿里云oss初始化完成');
          this.initLoading = false;
          this.error = false;
        } else {
          this.debug && window.console.log('阿里云oss初始化中...');
          this.initLoading = true;
        }
      }, 500);
    },
    init() {
      if (!this.localKeySet.bucket) {
        this.error = true;
        this.$emit('error', { msg: '请设置bucket' });
        return;
      }
      if (!this.localKeySet.secret) {
        this.error = true;
        this.$emit('error', { msg: '请设置secret' });
        return;
      }
      if (!this.localKeySet.accessKeyId) {
        this.error = true;
        this.$emit('error', { msg: '请设置accessKeyId' });
        return;
      }
      if (!this.localKeySet.endpoint) {
        this.error = true;
        this.$emit('error', { msg: '请设置区域' });
        return;
      }
      // eslint-disable-next-line no-undef
      this.client = new OSS({
        endpoint: this.localKeySet.endpoint,
        accessKeyId: this.localKeySet.accessKeyId,
        accessKeySecret: this.localKeySet.secret,
        // https时需要设置为true
        // secure: true,
        bucket: this.localKeySet.bucket,
      });
    },
    upload(e) {
      if (this.error) {
        return;
      }
      if (e.target.files.length === 0) {
        return;
      }
      if (!this.client) {
        this.$emit('error', { msg: 'oss初始化未完成' });
        return;
      }
      const file = e.target.files[0];
      let ossPath = '';
      if (!file) {
        this.$emit('error', { msg: '您未选择上传文件' });
        return;
      }
      // 清空input内容,以便重复触发change
      e.target.value = '';
      if (!this.fileReg.test(file.name.toLowerCase())) {
        this.$emit('error', { msg: '此组件只支持 png|jpeg|jpg|gif|svg|flv|mp4|wav|mp3|pcm 类型的文件' });
        return;
      }
      const suffix = this.get_suffix(file.name);
      if (this.fileSuffix !== '' && !this.fileSuffix.includes(suffix)) {
        this.$emit('error', { msg: '不支持的文件类型(' + suffix + ')' });
        return;
      }

      if (file.size >= 200000000) {
        this.$emit('error', { msg: '当前文件超出200M，无法上传' });
        return;
      }

      if (this.nameMode === 'name') {
        ossPath = `${this.path}${this.name}${file.name}`;
      } else {
        // 防止同一文件多次上传造成的空间浪费
        const token = file.name + file.lastModifiedDate + file.size + file.type;
        ossPath = `${this.path}${this.name}${md5(token)}.${suffix}`;
      }
      this.debug && console.log(file.name + ' => ' + ossPath);
      this.$emit('beforeUpload', ossPath);
      this.loading = true;
      this.client
        .multipartUpload(ossPath, file, {
          progress: (p, checkpoint) => {
            // 断点记录点。浏览器重启后无法直接继续上传，您需要手动触发上传操作。
            this.tempCheckpoint = checkpoint;
            // 进度条
            this.progress = p;
            this.$emit('progress', p);
          },
        })
        .then((result) => {
          this.debug && console.log('put success: %j', result);
          // eslint-disable-next-line prefer-const
          let { url } = result;
          // 处理错误的情况
          if (!url) {
            url = result.res.requestUrls[0].split('?')[0];
          }
          this.success = true;
          this.$emit('success', {
            path: ossPath,
            url,
            name: file.name,
          });
        })
        .catch((err) => {
          this.debug && console.error('error: %j', err);
          this.$emit('error', err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleCancelUpload() {
      // 可以暂停上传 https://www.alibabacloud.com/help/zh/doc-detail/64047.htm?spm=a2c63.p38356.b99.738.24f54916yBnQSS
      if (this.client) {
        this.client.cancel();
      }
    },
    handleWapperClick() {
      if (this.$refs.input && this.$refs.input.click) {
        this.$refs.input.click();
      }
    },
    LoadJS(sId, fileUrl, callback) {
      const dom = document.querySelector(sId);
      if (!dom) {
        const script = document.createElement('script');
        script.src = fileUrl;
        if (callback) {
          script.onload = callback;
        }
        script.id = sId;
        document.body.appendChild(script);
      }
    },
    get_suffix(filename) {
      const pos = filename.lastIndexOf('.');
      if (pos !== -1) {
        return filename.substring(pos + 1);
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
.upload-wapper {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.vue-oss-upload-input {
  position: relative;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  i.icon {
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 5px;
    border: 2px dashed #aaa;
    line-height: 66px;
    font-style: normal;
    font-size: 36px;
    color: #aaa;
    margin-bottom: 6px;
  }
}
</style>
