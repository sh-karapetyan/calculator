<template>
    <div class="calculator-app">
        <Header />
        <Card>
            <Form />
        </Card>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        Header: () => import('./components/header/HeaderComponent'),
        Card: () => import('./components/card/Card'),
        Form: () => import('./components/form/Form')
    }
}
</script>

<style scoped>
    .calculator-app >>> .card {
            margin: 59px auto 0;
        }
</style>
