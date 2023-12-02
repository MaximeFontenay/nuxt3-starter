<script setup lang="ts">
defineProps<{
	title: string,
	containerClass?: string,
	titleClass?: string,
}>()

const slotElement = ref<HTMLElement | null>(null)
const activeDropdown = ref<boolean>(false)
const slotHeight = ref<number | null>(null);

const toggleDropdown = () => {
	activeDropdown.value = !activeDropdown.value;
}

const calculateSlotHeight = () => {
	if(slotElement.value) {
		slotHeight.value = slotElement.value.clientHeight + 60;
	}
}
onMounted(() => {
	if(slotElement.value) {
		calculateSlotHeight();
		window.addEventListener('resize', calculateSlotHeight);
	}
})
</script>

<template>

	<div class="flex flex-col overflow-hidden" :class="containerClass">
		<button
			type="button"
			class="flex justify-between items-center gap-2 cursor-pointer outline-none p-4"
			@click="toggleDropdown"
		>
			<span class="font-bold text-lg" :class="titleClass">{{ title }}</span>
			<slot name="indicator" :open="activeDropdown"></slot>
		</button>
		<div class="slot w-full h-full px-4"
		     :class="[activeDropdown ? `active` : ``]"
		     :style="{maxHeight: activeDropdown ? `${slotHeight}px` : '0px'}"
		>
			<div ref="slotElement" class="block mt-2 duration-150 pr-4">
				<slot name="content"></slot>
			</div>
		</div>
	</div>

</template>

<style lang="scss" scoped>

svg, path {
	transition: .3s ease-in-out;
}

.slot {
	transition: .3s ease-in-out max-height;

	&:not(.active) {
		transition: .1s .3s ease-in-out padding, .3s ease-in-out max-height;
	}

	&.active > div {
		padding-bottom: 10px;
	}
}

</style>