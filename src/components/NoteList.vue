<template>
    <q-btn @click="listNotes">List Notes</q-btn>
    <br><br>
    <!--q-table
      title="Note List"
      :rows="notes"
      :columns="[{name:'noteId',label:'Note Id',field:'noteId'},{label:'Title',field:'title'},{label:'Description',field:'description'},{label:'Content',field:'content'},{label:'Update',field:''}]"
      row-key="name"
      dark
      color="amber"
      v-if="notes.length > 0"
    >
    </q-table-->

    <!--q-table color="amber">
      <q-tr><q-th>a</q-th><q-th>b</q-th></q-tr>
      <q-tr><q-td>c</q-td><q-td>d</q-td></q-tr>
      <q-tr><q-td>e</q-td><q-td>f</q-td></q-tr>
      <q-tr><q-td>e</q-td></q-tr>
    </q-table-->
    <div class="q-pa-md">
    <q-table
    :rows="notes"
    :columns="Columns"
    row-key="id"
    v-if="notes.length > 0"
    >
    <!--template #body-cell="notes">
      <q-td><q-btn></q-btn></q-td>
    </template-->
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
      </q-td>
    </template-->
    <!--template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense round flat color="grey" @click="listNotes" icon="edit"></q-btn>
              <q-btn dense round flat color="grey" @click="listNotes" icon="delete"></q-btn>
            </q-td>
          </template-->
    <!--template v-slot:header-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template-->

      <!--template v-slot:body-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template-->
      <template #body="props">
      <q-td :props="props.rows"></q-td>
      </template>
  </q-table>
</div>
    <!--table v-if="notes.length > 0">
      <tr>
        <th>noteId</th>
        <th>title</th>
        <th>description</th>
        <th>note</th>
        <th>update</th>
      </tr>
      <tr v-for="(note, index) in notes" :key="index">
        <td>{{ note.noteId }}</td>
        <td>{{ note.title }}</td>
        <td>{{ note.description }}</td>
        <td>{{ note.content }}</td>
        <q-btn @click="noteSelected(index)" style="width: 100px;">Select</q-btn>
      </tr>
    </table-->
</template>

<script>
import noteService from './NoteService.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoteList',
  setup () {
    const { getAllNotes, noteItemJson, notes } = noteService()
    const Columns = [{ name: 'noteId', label: 'Note Id', field: 'noteId' }, { label: 'Title', field: 'title' }, { label: 'Description', field: 'description' }, { label: 'Content', field: 'content' }, { label: 'Update', field: '' }]
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
