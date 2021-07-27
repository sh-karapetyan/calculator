<template>
    <div class="form">
        <div class="container-1">
            <div class="form__title text-center">
                <span class="form__text">Enter the numbers</span>
            </div>
            <Input
                class="input--space-top"
                :is-valid="isValidNumber1"
                @focus="isValidNumber1 = true"
                type="number"
                placeholder="Number 1"
                v-model="number_1" />
            <Input
                class="input--space-top"
                :is-valid="isValidNumber2"
                @focus="isValidNumber2 = true"
                type="number"
                placeholder="Number 2"
                v-model="number_2" />
            <Button
                class="button--space-top"
                @click="send">Sum</Button>
        </div>
        <HorizontalLine />
        <div class="container-1">
            <div class="form__title text-center">
                <span class="form__text">Results</span>
            </div>
            <div class="results results--space-top">
                <span class="results__text">{{ results }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { calculate } from '../../services/api/calculate'

export default {
    components: {
        Input: () => import('../input/Input'),
        Button: () => import('../button/Button'),
        HorizontalLine: () => import('../line/Line')
    },

    data () {
        return {
            results: '',
            number_1: null,
            number_2: null,

            isValidNumber1: true,
            isValidNumber2: true
        }
    },

    methods: {
        async send () {
            if (!this.number_1) {
                this.isValidNumber1 = false
            }
            if (!this.number_2) {
                this.isValidNumber2 = false
            }
            if (!this.number_1 || !this.number_2) return

            try {
                const { result } = await calculate({
                    number_1: parseFloat(this.number_1, 10),
                    number_2: parseFloat(this.number_2, 10)
                })
                this.results = result
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style scoped>
    @import "./style.css";
</style>
