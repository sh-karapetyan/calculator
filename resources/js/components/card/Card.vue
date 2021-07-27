<template>
    <div class="card" :style="{ 'max-width': `${cardWidth}px` }">
        <div class="card__inner">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        width: {
            type: [String, Number],
            default: 740
        },
    },
    computed: {
        cardWidth () {
            return parseInt(this.width, 10) || 740
        }
    }
}
</script>

<style scoped>
    @import "./style.css";
</style>
