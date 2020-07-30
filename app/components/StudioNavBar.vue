<template>
  <nav id="studioBar">
    <v-app-bar class="white" app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"
        ><router-link to="/studio/dashboard" class="black--text" style="text-decoration: none;"
          >Studio</router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-text-field
        flat
        hide-details
        append-icon="mdi-magnify"
        placeholder="Search"
        outlined
        dense
        class="hidden-sm-and-down"
        @click:append="search"
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn class="mr-8 createVideoBtn" outlined v-on="{ ...tooltip, ...menu }"
                ><v-icon size="25" class="red--text small">mdi-video-plus</v-icon> Create</v-btn
              >
            </template>
            <span>Create a video and more</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="modal">
            <v-list-item-icon class="mr-3"><v-icon>mdi-play-box-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Upload video</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon class="mr-3"><v-icon>mdi-access-point</v-icon></v-list-item-icon>
            <v-list-item-title>Go live</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y left>
        <template v-slot:activator="{ on }">
          <v-btn small color="red" depressed fab class="white--text" v-on="on">
            <v-avatar>
              <img :src="avatar" :alt="nickName" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img :src="avatar" :alt="nickName" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ nickName }}</v-list-item-title>
                <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item router to="/channels/10">
              <v-list-item-icon>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Your channel</v-list-item-title>
            </v-list-item>
            <v-list-item router to="/studio/dashboard">
              <v-list-item-icon>
                <v-icon>mdi-youtube-studio</v-icon>
              </v-list-item-icon>
              <v-list-item-title>VueTube Studio</v-list-item-title>
            </v-list-item>
            <v-list-item router to="/signin">
              <v-list-item-icon>
                <v-icon>mdi-login-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer id="nav" v-model="drawer" clipped app>
      <div v-bar tag="div" class="v-navigation-drawer__content">
        <v-list tile class="py-0">
          <v-list-item
            v-for="item in items[0].pages"
            :key="item.title"
            href
            tile
            class="mb-0"
            router
            :to="item.link"
            exact
            active-class="active-item"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-medium subtitle-2">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <template v-slot:append>
        <div class="pa-2">
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="item in items[1].pages"
              :key="item.title"
              link
              class="mb-0"
              :to="item.link === '' ? '' : item.link"
              exact
              active-class="active-item"
              @click="settingsMoal(item.title)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="font-weight-medium subtitle-2">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
      <template v-slot:prepend>
        <div class="pa-2 text-center">
          <v-list class="text-center">
            <v-list-item class="px-2">
              <v-btn height="95" width="95" href x-large depressed fab to="/channels/222" class="white--text mx-auto">
                <v-avatar :size="90">
                  <img :src="avatar" :alt="nickName" />
                </v-avatar>
              </v-btn>
            </v-list-item>

            <v-list-item link to="/channels/222">
              <v-list-item-content>
                <v-list-item-title class="title">{{ nickName }}</v-list-item-title>
                <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>
    <upload-video-modal :open-dialog="dialog" @closeDialog="dialog = false" />
    <settings-modal :open-dialog="settingsDialog" @closeDialog="settingsDialog = false" />
  </nav>
</template>

<script>
import UploadVideoModal from '@/components/UploadVideoModal';
import SettingsModal from '@/components/SettingsModal';
export default {
  name: 'StudioNavBar',
  components: {
    UploadVideoModal,
    SettingsModal,
  },

  data: () => ({
    drawer: false,
    items: [
      {
        header: 'scroll',
        pages: [
          { title: 'Dashboard', link: '/studio/dashboard', icon: 'mdi-view-dashboard' },
          {
            title: 'Videos',
            link: '/studio/videos',
            icon: 'mdi-play-box-multiple',
          },
          {
            title: 'Articles',
            link: '/studio/articles',
            icon: 'mdi-puzzle',
          },
          {
            title: 'Playlists',
            link: '#p',
            icon: 'mdi-playlist-play',
          },
          {
            title: 'Analytics',
            link: '#a',
            icon: 'mdi-poll-box',
          },
          {
            title: 'Comments',
            link: '#c',
            icon: 'mdi-message-reply-text',
          },

          {
            title: 'Subtitles',
            link: '#s',
            icon: 'mdi-subtitles',
          },
          {
            title: 'Monetization',
            link: '#m',
            icon: 'mdi-currency-usd',
          },
          {
            title: 'Audio library',
            link: '#al',
            icon: 'mdi-music-box-multiple',
          },
        ],
      },
      {
        header: 'fixed',
        pages: [
          {
            title: 'Settings',
            link: '',
            icon: 'mdi-cog',
          },
          {
            title: 'Send feedback',
            link: '#sf',
            icon: 'mdi-history',
          },
          {
            title: 'Creator Studio Classic',
            link: '#cs',
            icon: 'mdi-play-box-outline',
          },
        ],
      },
    ],
    dialog: false,
    settingsDialog: false,
  }),
  computed: {
    token: {
      get() {
        return this.$store.getters['global/token'];
      },
    },
    avatar: {
      get() {
        return this.$store.getters['global/avatar'];
      },
    },
    email: {
      get() {
        return this.$store.getters['global/email'];
      },
    },
    nickName: {
      get() {
        return this.$store.getters['global/nickName'];
      },
    },
  },
  mounted() {
    this.drawer = !this.$vuetify.breakpoint.mdAndDown;
  },
  methods: {
    search() {
      console.log('hello');
    },
    modal() {
      this.dialog = true;
    },
    settingsMoal(title) {
      if (title !== 'Settings') return;
      this.settingsDialog = true;
    },
  },
};
</script>

<style lang="scss">
#studioBar {
  .active-item {
    // border-radius: 0 !important;
    border-left: 3px solid #cc0202;
    .v-list-item__icon,
    .subtitle-2 {
      color: #cc0202 !important;
    }
  }
  .createVideoBtn {
    border-color: rgb(185, 181, 181);
  }
  // .v-navigation-drawer__border {
  //   width: 0 !important;
  // }

  .vuebar-element {
    height: 250px;
    width: 100%;
    max-width: 500px;
    background-color: #8d8a8a !important;
  }

  .vb > .vb-dragger {
    z-index: 5;
    width: 10px;
    right: 0;
  }

  .vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
    -webkit-transition: margin 100ms ease-out, height 100ms ease-out;
    transition: margin 100ms ease-out, height 100ms ease-out;
    margin: 5px 5px 5px 0;
    height: calc(100% - 10px);
    display: block;
    width: 10px;
    background-color: #8d8a8a;
  }

  .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: #8d8a8a;
  }

  .vb > .vb-dragger:hover > .vb-dragger-styler {
    // margin: 0px;
    // width: 10px;
    background-color: #8d8a8a;
  }

  .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: #8d8a8a;
    margin: 0;
    height: 100%;
  }

  .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: #8d8a8a;
  }

  .v-navigation-drawer__content:hover .vb > .vb-dragger > .vb-dragger-styler {
    width: 10px;
    background-color: #8d8a8a;
  }
}
</style>