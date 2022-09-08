<template>
    <v-card max-width="100%" min-height="100%" class="pa-5" elevation="10">
        <v-img class="" max-height="200" contain :src="image">
        </v-img>
        <v-card-title primary-title>
            <h3 class="headline mb-0">{{name}}</h3>
        </v-card-title>
        <v-row>
            <v-col cols="6" class="">
                <div class="text-center">
                    <v-progress-circular size="40" class="" :value="abv"><small>{{abv}}</small></v-progress-circular>
                    <h6 class="mt-1">ABV</h6>
                </div>  
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center">
                    <v-progress-circular size="40" class="" :value="attenuation_level"><small>{{attenuation_level}}</small></v-progress-circular>
                    <h6 class="mt-1">Attenuation Level</h6>
                </div>  
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center">
                    <v-progress-circular size="40" class="" :value="ebc"><small>{{ebc}}</small></v-progress-circular>
                    <h6 class="mt-1">EBC</h6>
                </div>  
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center">
                    <v-progress-circular size="40" class="" :value="ibu"><small>{{ibu}}</small></v-progress-circular>
                    <h6 class="mt-1">IBU</h6>
                </div>  
            </v-col>
        </v-row>
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
        description: String,
        abv: Number,
        attenuation_level: Number,
        ebc: Number,
        ibu: Number
    },
    computed:{

    }
})

</script>
<style scoped>
    
</style>