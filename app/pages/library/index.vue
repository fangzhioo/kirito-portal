<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    <div v-for="pantal in links" :key="pantal.idx" class="py-2">
      <div class="py-2">{{ pantal.title }}</div>
      <v-row>
        <v-col
          v-for="i in pantal.chilren"
          :key="i.idx"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="mx-xs-auto"
        >
          <v-card max-width="344">
            <v-list-item three-line>
              <v-list-item-avatar tile size="80" color="grey">
                <v-img
                  :src="i.logo || `https://cdn.vuetifyjs.com/images/cards/mountain.jpg`"
                  contain
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{ i.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ i.desc }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn text :href="i.url" target="_blank" color="deep-purple accent-4">Read</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// import BookmarkCard from '~/components/LibraryCard/BookmarkCard.vue';

export default {
  // components: { BookmarkCard },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      links: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get('/signs/design').then((res) => {
        const result = res.data;
        if (result && result.code === 200) {
          this.links = result.data;
        }
      });
      // .catch((err) => {
      //   console.error(err);
      // });
    },
  },
};
</script>
