<template>
    <div class="button__wrapper">
        <button
            v-bind="$attrs"
            v-on="$listeners"
            class="button">
            <span class="button__content">
                <slot />
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style scoped>
    @import './style.css';
</style>
