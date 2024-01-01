
<script lang="ts" setup>
import datas from '~/static/meteo.json'
const ville = datas.meteo.bulletin.ville;

</script>

<template>
	<div class="mx-auto my-20 px-16">


		<h1 class="text-xl text-red mb-10">Météo Réunion</h1>

		<h2 class="text-lg text-red mb-4 font-bold">Bulletin</h2>
		
		<table class="text-left">
			<tr class="text-md border-b border-white">
				<th class="pb-2">Ville</th>
				<th class="pb-2">Température min</th>
				<th class="pb-2">Température max</th>
			</tr>
			<tr class="text-sm font-semibold" v-for="data in ville">
				<td class="p-2">{{ data["-id"] }}</td>
				<td class="p-2 text-cyan-400">{{ data["-temperature_mini"] }}</td>
				<td class="p-2 text-red-400">{{ data["-temperature_maxi"] }}</td>
			</tr>
		</table>

	</div>

</template>


<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

</style>