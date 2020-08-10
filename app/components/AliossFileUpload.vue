<template>
  <client-only>
    <div class="vue-oss-upload-input" :style="initSize">
      <v-progress-circular
        v-if="loading"
        :indeterminate="indeterminate"
        :value="progressVal"
        :size="swidth - 20"
        color="primary"
      >
        {{ `${progressVal}` }}
      </v-progress-circular>
      <i v-else class="icon">+</i>
      <input :id="id" type="file" @change="upload" />
    </div>
  </client-only>
</template>

<script>
import md5 from 'blueimp-md5';

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
    fileType: {
      type: String,
      default: 'img',
    },
    fileSuffix: {
      type: String,
      default: '',
    },
    swidth: {
      type: Number,
      default: 70,
    },
    sheight: {
      type: Number,
      default: 70,
    },
    keySet: {
      type: Object,
      default() {
        return {
          accessKeyId: 'LTAI4G94S3v2QKcvky1Ft8ht',
          endpoint: 'oss-cn-hangzhou.aliyuncs.com',
          secret: 'zQgNdz6qYCV0H7yJVizyk8jCDptoBR',
          bucket: 'fangzhioo',
        };
      },
    },
  },
  data() {
    return {
      id: 'upload-input-file',
      error: false,
      success: false,
      loading: true,
      client: null,
      localKeySet: {},
      fileReg: /\.(png|jpe?g|gif|svg|flv|mp4|wav|mp3|pcm)(\?.*)?$/,
      tempCheckpoint: undefined,
      progress: 0,
    };
  },
  computed: {
    initSize() {
      const style = {
        width: this.swidth + 'px',
        height: this.sheight + 'px',
        lineHeight: this.sheight - 4 + 'px',
      };
      return style;
    },
    indeterminate() {
      return this.progress === 0;
    },
    progressVal() {
      return Math.floor(this.progress * 100);
    },
  },
  watch: {
    keySet: {
      handler(_val, _old) {
        this.preInit();
      },
      deep: true,
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
  mounted() {
    if (this.keySet && this.keySet.accessKeyId) {
      this.localKeySet = this.keySet;
    } else if (window._AliossUploaderConfig) {
      this.localKeySet = {
        accessKeyId: window._AliossUploaderConfig.accessKeyId,
        endpoint: window._AliossUploaderConfig.endpoint,
        secret: window._AliossUploaderConfig.secret,
        bucket: window._AliossUploaderConfig.bucket,
      };
    } else {
      console.error('oss配置信息缺失');
      this.error = true;
      this.$emit('error', { msg: 'oss配置信息缺失' });
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
          this.loading = false;
          this.error = false;
        } else {
          this.debug && window.console.log('阿里云oss初始化中...');
          this.loading = true;
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
        alert('您未选择上传文件');
        return;
      }
      // 清空input内容,以便重复触发change
      e.target.value = '';
      if (!this.fileReg.test(file.name.toLowerCase())) {
        alert('此组件只支持 png|jpeg|jpg|gif|svg|flv|mp4|wav|mp3|pcm 类型的文件');
        return;
      }
      if (this.fileSuffix !== '' && '.' + this.fileSuffix !== this.get_suffix(file.name)) {
        alert('必须选择类型为的' + this.fileSuffix + '文件');
        return;
      }
      if (this.nameMode === 'name') {
        ossPath = `${this.path}${this.name}${file.name}`;
      } else {
        // 防止同一文件多次上传造成的空间浪费
        const token = file.name + file.lastModifiedDate + file.size + file.type;
        ossPath = `${this.path}${this.name}${md5(token)}${this.get_suffix(file.name)}`;
      }
      this.debug && console.log(file.name + ' => ' + ossPath);
      this.loading = true;
      this.client
        .multipartUpload(ossPath, file, {
          progress: (p, checkpoint) => {
            // 断点记录点。浏览器重启后无法直接继续上传，您需要手动触发上传操作。
            this.tempCheckpoint = checkpoint;
            // 进度条
            this.progress = p;
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
      let suffix = '';
      if (pos !== -1) {
        suffix = filename.substring(pos);
      }
      return suffix;
    },
  },
};
</script>

<style lang="scss">
.vue-oss-upload-input {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  border: 2px dashed #aaa;
  line-height: 66px;
  i.icon {
    font-style: normal;
    font-size: 36px;
    color: #aaa;
    display: block;
  }
  input {
    width: 100%;
    height: 100%;

    /* margin-top: -66px; */
    opacity: 0;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
  }
}
</style>
