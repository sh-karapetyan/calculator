<template>
    <div
        class="line"
        :style="{ 'height': `${thickness}px`, 'background-color': color }"></div>
</template>

<script>
export default {
    props: {
        thickness: {
            type: [String, Number],
            default: 1
        },
        color: {
            type: String,
            default: '#C10708'
        },
    }
}
</script>

<style scoped>
@import "./style.css";
</style>
