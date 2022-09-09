<template>
    <v-card max-width="400" min-height="100%" class="pa-5" elevation="10">
        <div class="d-flex justify-end">
            <div class="">
                <p class="caption text-center ma-0">First Brewed</p>
                <v-chip  small class="">{{first_brewed}}</v-chip>
            </div>
        </div>
        <v-img class="" max-height="200" contain v-if="!!image" :src="image">
        </v-img>
        <v-img class="filter-beer" max-height="200" contain v-if="!image" src="@/assets/beer.png">
        </v-img>
        <v-card-title primary-title class="justify-center">
            {{name}}
        </v-card-title>
        <v-row>
            <v-col cols="6" class="">
                <v-tooltip top>
                    <template v-slot:activator="{on, attrs}">
                        <div class="text-center" v-if="abv" v-bind="attrs" v-on="on">
                            <v-progress-circular size="45" class="" :value="abv"><small>{{abv}}</small></v-progress-circular>
                            <h6 class="mt-1">ABV</h6>
                        </div>
                    </template>    
                    <span>ABV is the most common measurement of alcohol content in beer</span>
                </v-tooltip>
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center" v-if="attenuation_level">
                    <v-progress-circular size="45" class="" :value="attenuation_level"><small>{{attenuation_level}}</small></v-progress-circular>
                    <h6 class="mt-1">Attenuation Level</h6>
                </div>  
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center" v-if="ebc">
                    <v-progress-circular size="45" class="" :value="ebc"><small>{{ebc}}</small></v-progress-circular>
                    <h6 class="mt-1">EBC</h6>
                </div>  
            </v-col>
            <v-col cols="6" class="">
                <div class="text-center" v-if="ibu">
                    <v-progress-circular size="45" class="" :value="ibu"><small>{{ibu}}</small></v-progress-circular>
                    <h6 class="mt-1">IBU</h6>
                </div>  
            </v-col>
        </v-row>
        <v-card-text>
            <div class="grey--text text-justify ms-4">
                <p v-snip="{lines:5}">{{description}}</p>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="primary" @click.prevent="reveal =true">
                See More
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height:100%">
                <v-card-title primary-title>
                    {{name}}
                </v-card-title>
                <v-card-text class="bold" v-if="tagline">
                    "{{tagline}}"
                </v-card-text>
                <v-card-text>
                    {{description}}
                </v-card-text>
                
                <v-card-actions>
                    <v-btn text color="primary" @click.prevent="reveal = false">
                Close
            </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    name: 'BeerCard',
    data(){
        return{
            reveal : false
        }
    },
    props: {
        name: String,
        image: String,
        first_brewed: String,
        description: String,
        abv: Number,
        attenuation_level: Number,
        ebc: Number,
        ibu: Number,
        food_pairing: Array,
        ingredientes: Object,
        ph: Number,
        srm: Number,
        tagline : String
    },
    computed:{

    }
})

</script>
<style scoped>
    .filter-beer{
        filter: brightness(0%);
    }
    .v-card--reveal {
        bottom: 0;
        opacity: 1 !important;
        position: absolute;
        width: 100%;
    }
</style>