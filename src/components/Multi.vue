<template>
  <q-table
  :rows="rows"
  :columns="columns"
  row-key="id"
>
  <template #body-cell-name="props">
    <q-td
      class="bg-blue-1"
      :props="props"
    >
      {{ props.value }}
    </q-td>
  </template>

  <template #body-cell-email="props">
    <q-td
      class="bg-blue-2"
      :props="props"
    >
      {{ props.value }}
    </q-td>
  </template>

  <template
    #body-cell-age="props"
  >
    <q-td
      class="bg-blue-1"
      :props="props"
    >
      {{ props.value }}
    </q-td>
  </template>
</q-table>
</template>

<script>
import { copyToClipboard } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const rows = ref([
      {
        id: 1,
        name: 'Panda',
        email: 'panda@chihuahua.com',
        age: 6
      },
      {
        id: 2,
        name: 'Lily',
        email: 'lily@chihuahua.com',
        age: 5
      }
    ])

    const columns = ref([
      { label: 'name', field: 'name', name: 'name', align: 'left' },
      { label: 'email', field: 'email', name: 'email', align: 'left' },
      { label: 'age', field: 'age', name: 'age', align: 'center' }
    ])

    return {
      copyToClipboard,
      rows,
      columns
    }
  }
}
</script>
