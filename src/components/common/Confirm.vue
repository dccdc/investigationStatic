<template>
  <v-dialog
    v-model="show"
    width="300"
  >
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-text height="200">{{message}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click.stop="cancel"
        >
          取消
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click.stop="ok"
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
    message: String,
    title: String,
    rst: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    result: {
      get () {
        return this.rst
      },
      set (rst) {
        this.$emit('confirmResult', rst)
      }
    }
  },
  methods: {
    // ok: function () {
    //   this.result = true
    //   this.show = false
    // },
    // cancel: function () {
    //   this.result = false
    //   this.show = false
    // },
    ok:function(){
      this.show = false;
      this.$emit('confirmResult');
    },
    cancel:function(){
      this.show = false
    }
  }
}
</script>
