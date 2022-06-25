<template>
    <button @click="listNotes">List Notes</button>
    <br><br>
    <table v-if="notes.length > 0">
      <tr>
        <!--th>id</th-->
        <th>noteId</th>
        <th>title</th>
        <th>description</th>
        <th>note</th>
        <th>update</th>
      </tr>
      <tr v-for="(note, index) in notes" :key="index">
        <!--td>{{note.id}}</td-->
        <td>{{ note.noteId }}</td>
        <td>{{ note.title }}</td>
        <td>{{ note.description }}</td>
        <td>{{ note.content }}</td>
        <button @click="noteSelected(index)" style="width: 100px;">Select</button>
      </tr>
    </table>
</template>

<script>
import noteService from './NoteService.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoteList',
  setup () {
    const { getAllNotes, noteItemJson, notes } = noteService()
    return {
      notes,
      noteItemJson,
      async listNotes () {
        await getAllNotes()
      },
      noteSelected (idx) {
        noteItemJson.id = notes.value[idx].id
        noteItemJson.noteId = notes.value[idx].noteId
        noteItemJson.title = notes.value[idx].title
        noteItemJson.description = notes.value[idx].description
        noteItemJson.content = notes.value[idx].content
      }
    }
  }
})

</script>

<style>
table,
th,
td,
ul,
li {
  border: 1px solid black;
}

table {
  width: 300px;
}
</style>
