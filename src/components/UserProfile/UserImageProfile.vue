<template>
<figure class="image is-128x128">
  <img v-if="url" class="is-rounded" :src="url">
  <img  v-else class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
</figure>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-1/p320x320/30726761_1970031726371383_6648528360297617395_n.jpg?_nc_cat=0&oh=1a37afe320e8913d7035c529fc0a37fd&oe=5BA48D35'
    }
  }
}
</script>

<style>
</style>
