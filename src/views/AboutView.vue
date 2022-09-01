<template>
  <v-container class="about">
  <v-data-iterator
    :items="data"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    
  >
    <template v-slot:default="props">
      <v-row>
        <v-col  
          cols="12"
          sm="4"
          md="3"
          class="" v-for="beer in props.items" :key="beer.id">
          <BeerCard :image="beer.image_url" :name="beer.name" :first_brewed="beer.first_brewed" :description="beer.description"></BeerCard>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
  </v-container>
  
</template>

<script>

import { defineComponent } from "vue";

import { useApi } from "@/use/useApi";
import BeerCard from "@/components/BeerCard.vue";

const {make} = useApi()
export default defineComponent({
    name: "AboutView",
    data() {
        return {
            msj: "Hi",
            data: [],
            itemsPerPageArray: [5, 10, 15],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 10,
            sortBy: 'name',
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let data = await make("/beers");
            this.data = data;
        }
    },
    components: { BeerCard }
})
</script>
