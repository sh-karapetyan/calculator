<template>
    <div :class="['text-input', { 'text-input--danger': !isValid }]">
        <input
            :type="type"
            v-bind="$attrs"
            v-on="listeners"
            :value="value"
            class="text-input__input"/>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        value: {},
        isValid: Boolean,
        type: {
            type: String,
            default: 'text'
        }
    },

    computed: {
      listeners () {
          return {
              ...this.$listeners,
              input: this.onInput
          }
      }
    },

    methods: {
        onInput (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style scoped>
    @import './style.css';
</style>
