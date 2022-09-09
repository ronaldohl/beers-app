<template>
  <v-app>
    <v-navigation-drawer color="secondary" v-model="drawer" app>
      
      <h3 class="white--text text-center my-3">Advanced Search</h3>
      
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
      <v-text-field
            v-model="filters.abv"
            dark
            clearable
            outlined
            hide-details
            label="ABV Value"
          ></v-text-field>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
      <v-text-field
            v-model="filters.attenuation_level"
            dark
            clearable
            outlined
            hide-details
            label="Attenuation Level Value"
          ></v-text-field>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
      <v-text-field
            v-model="filters.ebc"
            dark
            clearable
            outlined
            hide-details
            label="EBC Value"
          ></v-text-field>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="12"
      >
      <v-text-field
            v-model="filters.ibu"
            dark
            clearable
            outlined
            hide-details
            label="IBU Value"
          ></v-text-field>
      </v-col>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <div class="d-flex align-center">
        
        <h1>Beers App</h1>
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://ronaldohl.com"
        target="_blank"
        text
      >
      <div class="d-flex align-center">
        
          <v-img
            alt="Beer Logo"
            class="shrink mr-2 rounded-circle"
            contain
            src="@/assets/rhl-favicon.png"
            transition="scale-transition"
            width="40"
          />
        
      </div>        
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      drawer : null,
      filters : {}
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(filters){
        this.$store.commit('setFilters', filters)
      }
    }
  },
};
</script>
