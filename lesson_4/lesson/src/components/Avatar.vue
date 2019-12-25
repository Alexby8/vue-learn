<template lang="html">
  <div>
    <input ref="file" type="file" class="hidden" @change="upload" />
    <button type="button" class="btn btn-primary m-t-10 m-b-10" @click="selectFile">
      Select file
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AvatarUploader',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    setNewAvatar(url) {
      this.$emit('input', url)
    },
    selectFile() {
      this.$refs.file.click()
    },
    upload() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.file.files[0])

      const config = {
        headers: {
          Authorizaton: 'Client-ID: b39f08aeaec36d1'
        }
      }

      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.file.value = ''
        })
    }
  }
}
</script>
