<template>
    <q-btn @click="listNotes">List Notes</q-btn>
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="notes"
      :columns="Columns"
      row-key="name"
      v-model:selected="selected"
      selection="single"
      v-if="notes.length > 0"
    >

    <template #body-cell-update="props">
      <q-td :props="props">
        <q-btn dense round flat color="grey" @click="noteSelected(props.rowIndex)" icon="edit"></q-btn>
      </q-td>
    </template>

    </q-table>
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
</template>

<script>
import noteService from './NoteService.js'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NoteList',
  setup () {
    const { getAllNotes, noteItemJson, notes } = noteService()
    const Columns = [{ name: 'noteId', label: 'Note Id', field: 'noteId' }, { label: 'Title', field: 'title' }, { label: 'Description', field: 'description' }, { label: 'Content', field: 'content' }, { label: 'Update', field: '', name: 'update' }]
    const selected = ref([])
    return {
      notes,
      noteItemJson,
      Columns,
      async listNotes () {
        await getAllNotes()
      },
      noteSelected (idx) {
        noteItemJson.id = notes.value[idx].id
        noteItemJson.noteId = notes.value[idx].noteId
        noteItemJson.title = notes.value[idx].title
        noteItemJson.description = notes.value[idx].description
        noteItemJson.content = notes.value[idx].content
      },
      selected
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
