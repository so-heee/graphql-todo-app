<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
