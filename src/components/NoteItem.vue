<template>
    <h4>Note:{{ noteItemJson.noteId }}</h4>
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="noteItemJson.title">
    <br><br>
    <label for="descrip">Description:</label>
    <input type="text" id="descrip" v-model="noteItemJson.description">
    <br><br>
    <label for="note">Note:</label>
    <input type="text" id="note" v-model="noteItemJson.content">
    <br><br>
    <q-btn @click="saveNote">Save</q-btn>
</template>

<script>

import { onMounted, defineComponent } from 'vue'
import noteService from './NoteService.js'

export default defineComponent({
  name: 'NoteItem',
  setup () {
    onMounted(() => {
      // debugger;
    })
    const { saveNoteItem, noteItemJson, getAllNotes } = noteService()
    return {
      noteItemJson,
      async saveNote () {
        await saveNoteItem()
        await getAllNotes()
      }
    }
  },
  mounted () {
    // debugger;
  }
})
</script>

<style>
label {
  font-family: Verdana;
  font-size: 20px;
  width: 200px;
}

input {
  width: 200px;
}
</style>
