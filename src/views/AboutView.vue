<template>
  <v-container class="about">
  <h1>{{total}}</h1>
  <LoadingSpinner v-if="loading"></LoadingSpinner>
  <v-data-iterator
    :items="data"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    
  >
    <template v-slot:header>
      <v-toolbar dark color="secondary" class="my-2">
        <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="gary"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="gray"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
      </v-toolbar>
    </template>
    <template v-slot:default="props">
      <v-row>
        <v-col  
          cols="12"
          sm="4"
          md="3"
          class="" v-for="beer in props.items" :key="beer.id">
          <BeerCard 
            :image="beer.image_url" 
            :name="beer.name" 
            :first_brewed="beer.first_brewed" 
            :description="beer.description"
            :abv="beer.abv"
            :attenuation_level="beer.attenuation_level"
            :ebc="beer.ebc"
            :ibu="beer.ibu"
          ></BeerCard>
        </v-col>
      </v-row>
    </template>
    <template v-slot:footer>
      <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            <!-- Page {{ page }} of {{ numberOfPages }} -->
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
    </template>
  </v-data-iterator>
  </v-container>
  
</template>

<script>

import { defineComponent } from "vue";


import BeerCard from "@/components/BeerCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

import { useStore, } from '@/use/useStore';

const {getBeers} = useStore()
export default defineComponent({
    name: "AboutView",
    components: { BeerCard, LoadingSpinner },
    data() {
        return {
            data: [],
            itemsPerPageArray: [5, 10, 15],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 10,
            sortBy: 'name',
            loading: false
        };
    },
    created() {
        // this.getData();
        this.data = getBeers()
    },
    methods: {
        

        nextPage(){

        }
    },
    computed: {
      numberOfPages(){
        return Math.ceil(this.data.length / this.itemsPerPage)
      },
      total(){
        return `${this.data.length} beers`;
      }
    },
})
</script>
