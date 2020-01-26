<template>
  <v-dialog
    v-model="show"
    width="300"
  >
    <v-card >
      <v-card-title
        height="30"
        class=" grey lighten-2"
      >
        {{title}}
      </v-card-title>
      <v-card-text height="200">{{message}}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click.stop="show=false"
        >
          确定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    title: String,
    message: String
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
