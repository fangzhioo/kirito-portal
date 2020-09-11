<template>
  <div>
    <v-breadcrumbs :items="links"></v-breadcrumbs>
    <v-row>
      <v-col v-for="i in 10" :key="i" cols="12" sm="6" md="4" lg="3" class="mx-xs-auto">
        <BookmarkCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookmarkCard from '~/components/LibraryCard/BookmarkCard.vue';

export default {
  components: { BookmarkCard },
  data() {
    return {
      links: [
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
    };
  },
  mounted() {},
  methods: {},
};
</script>
