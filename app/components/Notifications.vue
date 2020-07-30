<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list three-line flat avatar>
      <v-subheader>Notifications</v-subheader>
      <v-list-item-group v-model="group" color="primary">
        <v-list-item v-for="(item, i) in list" :key="i">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      group: 5,
    };
  },
  computed: {
    list: {
      get() {
        return this.$store.state.global.notifications || [];
      },
    },
  },
};
</script>
