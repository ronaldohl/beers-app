<template>
    <v-card max-width="100%" min-height="100%" class="">
        <v-img class="" max-height="200" contain :src="image">
        </v-img>
        <v-card-title primary-title>
            <h3 class="headline mb-0">{{name}}</h3>
        </v-card-title>
        <v-card-text>
            <div class="grey--text ms-4">{{description}}</div>
        </v-card-text>
    </v-card>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    name: 'BeerCard',
    props: {
        name: String,
        image: String,
        first_brewed: String,
        description: String
    },
    computed:{

    }
})

</script>
<style scoped>
    
</style>