<template>
  <v-menu v-if="isLogin" offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn small depressed fab v-on="on">
        <v-avatar size="40">
          <img :src="avatar" :alt="nickName" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="avatar" />
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
  <v-btn v-else tile outlined to="/signin"> <v-icon left>mdi-account-circle</v-icon> Login </v-btn>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  name: 'HeaderAvatar',
})
export default class HeaderAvatar extends Vue {
  get isLogin() {
    return this.$store.getters['user/isLogin'];
  }

  get avatar() {
    return this.$store.getters['user/avatar'];
  }

  get email() {
    return this.$store.getters['user/email'];
  }

  get nickName() {
    return this.$store.getters['user/nickName'];
  }
}
</script>
