<script setup lang="ts">
import { Coin } from '~/types/Coin'
const route = useRoute()
const { data: coinArray } = await useFetch<Coin[] | null>('/api/ticker?id=' + route.params.id)


const coin =  coinArray.value? coinArray.value[0] : null
</script>

<template>
  <div v-if="coin">
    <h2>{{ coin?.name }} Detail page</h2>
    <table border="1 px solid">
      <thead>
        <th>Symbol</th>
        <th>Rank</th>
        <th>Price - US $</th>
        <th>Market Cap - US $</th>
      </thead>
      <tr>
        <td>{{ coin?.symbol }}</td>
        <td>{{ coin?.rank }}</td>
        <td>{{ coin?.price_usd }}</td>
        <td>{{ coin?.market_cap_usd }}</td>
      </tr>
    </table>
    <p>
        <NuxtLink to="/">Back to home</NuxtLink>
    </p>
  </div>
</template>
