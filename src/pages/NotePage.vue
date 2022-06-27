<template>
<h3>Melo Baba</h3>
  <!--q-page class="flex flex-center">
    <q-layout class="flex flex-center"-->
      <NoteItemVue></NoteItemVue>
      <NoteListVue></NoteListVue>
      <MultiVue></MultiVue>
      <MultiYedekVue></MultiYedekVue>
    <!--/q-layout>
  </q-page-->
</template>

<script>
import { defineComponent } from 'vue'
import NoteItemVue from 'src/components/NoteItem.vue'
import NoteListVue from 'src/components/NoteList.vue'
import MultiVue from 'src/components/Multi.vue'
import MultiYedekVue from 'src/components/MultiYedek.vue'
export default defineComponent({
  name: 'NotePage',

  components: {
    NoteItemVue,
    NoteListVue,
    MultiVue,
    MultiYedekVue
  },

  setup () {

  }
})
</script>
