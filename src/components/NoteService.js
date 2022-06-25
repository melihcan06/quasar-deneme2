import axios from 'axios'
import { ref, reactive } from 'vue'

const noteApiLink = 'http://localhost:8081/note/'
const notes = ref([])
const noteItemJson = reactive({ id: '', noteId: 1, title: '', description: '', content: '' })

const NoteService = () => {
  const getAllNotes = async () => {
    await axios.get(noteApiLink + 'list').then((resp) => {
      notes.value = resp.data
    })
  }

  const saveNoteItem = async () => {
    await axios.post(noteApiLink + 'save', noteItemJson)
  }

  return {
    getAllNotes,
    saveNoteItem,
    notes,
    noteItemJson
  }
}
export default NoteService
