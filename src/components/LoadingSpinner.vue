<template>
    <div class="loading-container">
        <div class="text-center">
            <v-progress-circular :size="50" color="primary" indeterminate>
            </v-progress-circular>
            <p class="mt-2">Cargando ...</p>
        </div>
    </div>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    name: 'LoadingSpinner',
    props: {
    },
    computed:{

    }
})

</script>
<style scoped lang="scss">
    .loading-container{
        position: absolute;
        min-width: 100%;
        min-height: 100vh;
        top: 0;
        left: 0;
        background-color: #cacaca;
        display: flex;
        z-index: 9999999;
        align-items: center;
        justify-content: center;
    }
</style>