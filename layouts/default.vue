<template>
  <v-app>
    <app-navbar />
      <v-layout fill-height>
        <v-main>
          <v-row justify="center" class="fill-height ma-0">
            <v-col cols="8">
              <Nuxt />
            </v-col>
          </v-row>
        </v-main>
      </v-layout>
    <app-footer />
  </v-app>
</template>
