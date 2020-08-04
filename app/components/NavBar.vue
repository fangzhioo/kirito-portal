<template>
  <nav id="navbar">
    <v-app-bar class="white" flat app clipped-left hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"
        ><router-link to="/" class="black--text" style="text-decoration: none;">VueTube</router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchKeyword"
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
              <v-btn icon v-on="{ ...tooltip, ...menu }"><v-icon size="25">mdi-video-plus</v-icon></v-btn>
            </template>
            <span>Create a video and more</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item router to="/studio/dashboard">
            <v-list-item-icon class="mr-3"><v-icon>mdi-play-box-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Upload video</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon class="mr-3"><v-icon>mdi-access-point</v-icon></v-list-item-icon>
            <v-list-item-title>Go live</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on"> <v-icon size="25">mdi-apps</v-icon></v-btn>
        </template>
        <span>VueTube apps</span>
      </v-tooltip>

      <v-menu offset-y left>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon class="mr-7" v-on="{ ...tooltip, ...menu }"> <v-icon size="25">mdi-bell</v-icon></v-btn>
            </template>
            <span>Notifications</span>
          </v-tooltip>
        </template>
        <Notifications />
      </v-menu>

      <HeaderAvatar />
    </v-app-bar>

    <v-navigation-drawer
      id="nav"
      v-model="drawer"
      app
      :clipped="$route.name !== 'Watch'"
      :temporary="$route.name === 'Watch'"
    >
      <div v-bar tag="div" class="v-navigation-drawer__content">
        <v-list dense nav class="py-0" tag="div">
          <v-list-item
            :class="{
              'hidden-lg-and-up': $route.name === 'Watch' ? false : true,
            }"
          >
            <v-app-bar-nav-icon class="mr-5" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold">VueTube</v-toolbar-title>
          </v-list-item>
          <v-divider class="hidden-lg-and-up"></v-divider>
          <div v-for="parentItem in items" :key="parentItem.header">
            <v-subheader v-if="parentItem.header" class="pl-3 py-4 subtitle-1 font-weight-bold text-uppercase">
              {{ parentItem.header }}
            </v-subheader>
            <v-list-item
              v-for="item in parentItem.pages"
              :key="item.title"
              link
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
            <v-divider class="mt-2 mb-2"></v-divider>
          </div>

          <span v-for="link in links" :key="link.text">
            <span v-if="link.text === 'Terms'" class="mb-2 d-block"> </span>
            <v-btn href router :to="link.link" text class="text-capitalize px-1" small>{{ link.text }}</v-btn>
          </span>
        </v-list>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Notifications from './Notifications';
import HeaderAvatar from './HeaderAvatar';

export default {
  components: { Notifications, HeaderAvatar },
  data() {
    return {
      drawer: false,
      searchKeyword: '',
      items: [
        {
          header: null,
          pages: [
            { title: 'Home', link: '/', icon: 'mdi-home' },
            { title: 'Trending', link: '/trending', icon: 'mdi-fire' },
            {
              title: 'Subscriptions',
              link: '/subscriptions',
              icon: 'mdi-youtube-subscription',
            },
          ],
        },
        {
          header: null,
          pages: [
            {
              title: 'Library',
              link: '#l',
              icon: 'mdi-play-box-multiple',
            },
            {
              title: 'History',
              link: '/history',
              icon: 'mdi-history',
            },
            {
              title: 'Your videos',
              link: '#yv',
              icon: 'mdi-play-box-outline',
            },

            {
              title: 'Watch later',
              link: '#wl',
              icon: 'mdi-clock',
            },

            {
              title: 'Liked videos',
              link: '#lw',
              icon: 'mdi-thumb-up',
            },
          ],
        },
        {
          header: 'Subscriptions',
          pages: [
            {
              title: '音乐',
              link: '#tm',
              icon: 'mdi-music-box',
            },
            {
              title: '游戏',
              link: '#tn',
              icon: 'mdi-gamepad-variant',
            },
            {
              title: '体育',
              link: '#nn',
              icon: 'mdi-football',
            },
            {
              title: '电影',
              link: '#ch',
              icon: 'mdi-movie',
            },
          ],
        },
        {
          header: 'MORE FROM VUETUBE',
          pages: [
            {
              title: 'VueTube Premium',
              link: '#vp',
              icon: 'mdi-youtube',
            },
            {
              title: 'Gaming',
              link: '#g',
              icon: 'mdi-youtube-gaming',
            },
            {
              title: 'Live',
              link: '#li',
              icon: 'mdi-access-point',
            },
          ],
        },
        {
          header: null,
          pages: [
            {
              title: 'Setting',
              link: '#sg',
              icon: 'mdi-cog',
            },
            {
              title: 'Report history',
              link: '#rh',
              icon: 'mdi-flag',
            },
            {
              title: 'Help',
              link: '#hp',
              icon: 'mdi-help-circle',
            },
            {
              title: 'Send feedback',
              link: '#f',
              icon: 'mdi-message-alert',
            },
          ],
        },
      ],
      links: [
        { text: 'About', link: '#' },
        { text: 'Press', link: '#' },
        { text: 'Copyrignt', link: '#' },
        { text: 'Contact us', link: '#' },
        { text: 'Creators', link: '#' },
        { text: 'Advertise', link: '#' },
        { text: 'Developers', link: '#' },
        { text: 'Terms', link: '#' },
        { text: 'Privacy', link: '#' },
        { text: 'Policy & Safety', link: '#' },
        { text: 'Test new features', link: '#' },
      ],
    };
  },
  mounted() {
    this.drawer = !this.$vuetify.breakpoint.mdAndDown;
    this.drawer = this.$route.name === 'Watch' ? false : this.drawer;
  },
  methods: {
    search() {
      console.log('search', this.searchKeyword);
    },
  },
};
</script>

<style lang="scss">
#navbar {
  .active-item {
    .v-list-item__icon {
      color: red !important;
    }
  }
  .v-navigation-drawer__border {
    width: 0 !important;
  }

  .vuebar-element {
    height: 250px;
    width: 100%;
    max-width: 500px;
    background: #dfe9fe;
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
    -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
    transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
  }

  .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
  }

  .vb > .vb-dragger:hover > .vb-dragger-styler {
    margin: 0;
    width: 10px;
  }

  .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244, 0.5);
    margin: 0;
    height: 100%;
  }

  .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244, 0.5);
  }

  .v-navigation-drawer__content:hover .vb > .vb-dragger > .vb-dragger-styler {
    width: 10px;
    background-color: #e0e0e0;
  }
}
</style>
