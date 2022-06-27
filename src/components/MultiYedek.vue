<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="notes"
      :columns="Columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      v-if="notes.length > 0"
    >
    <template #body-cell="props">
    <!--template v-slot:body-cell-actions="props"-->
      <q-td :props="props">
        <q-btn dense round flat color="grey" @click="listNotes" icon="edit"></q-btn>
        <q-btn dense round flat color="grey" @click="listNotes" icon="delete"></q-btn>
      </q-td>
    </template>
    <!--template #body-cell="props">
      <q-td
        :props="props"
      >
        <q-btn
          flat
          color="primary"
          :label="props.value"
          @click="listNotes"
        />
        <q-btn
          flat
          color="primary"
          :label="props.value"
          @click="listNotes"
        />
      </q-td>
    </template-->
    </q-table>
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import noteService from './NoteService.js'

export default defineComponent({
  setup () {
    const { getAllNotes, noteItemJson, notes } = noteService()
    const Columns = [{ name: 'noteId', label: 'Note Id', field: 'noteId' }, { label: 'Title', field: 'title' }, { label: 'Description', field: 'description' }, { label: 'Content', field: 'content' }, { label: 'Update', field: '' }]
    const selected = ref([])
    return {
      notes,
      noteItemJson,
      Columns,
      async listNotes () {
        await getAllNotes()
        for (let i = 0; i < notes.length; i++) {
          notes[i].update = '<q-btn @click="noteSelected(index)" style="width: 100px;">Select</q-btn>'
        }
      },
      noteSelected (idx) {
        debugger
        noteItemJson.id = notes.value[idx].id
        noteItemJson.noteId = notes.value[idx].noteId
        noteItemJson.title = notes.value[idx].title
        noteItemJson.description = notes.value[idx].description
        noteItemJson.content = notes.value[idx].content
      },
      selected,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${notes.length}`
      }
    }
  }
})
</script>
