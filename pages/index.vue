import { Dropdown } from '../.nuxt/components';

<script lang="ts" setup>
	const img = useImage()
</script>

<template>
	<div class="mx-auto my-20 flex flex-col gap-20 w-[500px]">


		<h1 class="text-xl text-red">Hello</h1>
		
		<Icon name="uil:github" color="black" />
		
		<NuxtImg src="/images/1.jpg" :placeholder="img(`/images/1.jpg`, { h: 30, f: '`png`', blur: 2, q: 80 })"  />

		<Dropdown title="Color mode" containerClass="border border-primary">

			<template #trigger>
				<button class="btn btn-primary">Dropdown</button>
			</template>

			<template #content>
				<p>Value : {{ $colorMode.value }}</p>
				<select v-model="$colorMode.preference">
					<option value="system">System</option>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="sepia">Sepia</option>
				</select>
			</template>
		</Dropdown>

	</div>

</template>


<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

</style>