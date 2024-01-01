
<script lang="ts" setup>
const steps = ref([
	{title: 'Your info'},
	{title: 'Select plan'},
	{title: 'Add-ons'},
	{title: 'Summary'},
])

const billingPlans = [
	{
		name: 'Arcade',
		price: 9,
		icon: '/images/form/icon-arcade.svg',
	},
	{
		name: 'Advanced',
		price: 12,
		icon: '/images/form/icon-advanced.svg',
	},
	{
		name: 'Pro',
		price: 15,
		icon: '/images/form/icon-pro.svg',
	},
]


const currentStep = ref(1)

const changeStep = (index: number) => {
	currentStep.value = index
}



</script>


<template>

	<div class="flex items-stretch gap-10 bg-white min-h-[500px] max-h-[500px] overflow-clip rounded-xl p-3">

		<nav class="w-1/3 p-4 rounded-lg bg-[url('/images/form/bg-sidebar-desktop.svg')]">
			<ul class="flex flex-col gap-4 ">
				<li v-for="(step, i) in steps">
					<button @click="changeStep(i)" type="button" class="group flex items-center gap-2" :class="step.active ? 'bg-red' : ''">
						<span class="relative font-semibold border border-transparent leading-[28px] w-[30px] h-[30px] after:absolute after:border after:border-white after:inset-0 after:block after:w-full after:aspect-square after:rounded-full">{{ i }}</span>
						<div class="flex flex-col items-start">
							<span class="text-xs">STEP {{ i }}</span>
							<span class="text-sm">{{ step.title }}</span>
						</div>
					</button>
				</li>
			</ul>
		</nav>

		<div class="flex flex-col items-between w-full p-10 text-black">

			<Transition name="slide-fade">
				<div v-if="currentStep === 1 ">
					<h2 class="text-3xl font-bold mb-2">Personal info</h2>
					<p class="text-form-grey">Please provide your name, email address and phone number.</p>

					<ul class="flex flex-col w-full gap-4 mt-6">
						<li>
							<label for="name" class="mb-1 block text-sm text-form-secondary">Name</label>
							<input type="text" id="name" class="w-full p-2 border border-black rounded-lg focus:outline-none" placeholder="Your name">
						</li>
						<li>
							<label for="email" class="mb-1 block text-sm text-form-secondary">Email Adress</label>
							<input type="email" id="email" class="w-full p-2 border border-black rounded-lg focus:outline-none" placeholder="Your email" required>
						</li>
						<li>
							<label for="phone" class="mb-1 block text-sm text-form-secondary">Phone Number</label>
							<input type="tel" id="phone" class="w-full p-2 border border-black rounded-lg focus:outline-none" placeholder="e.g. +1 234 567 890" required>
						</li>
					</ul>
				</div>
			</Transition>
			<Transition name="slide-fade">
				<div v-if="currentStep === 2">
					<h2 class="text-3xl font-bold mb-2">Select your plan</h2>
					<p class="text-form-grey">You have the option of monthly or yearly billing.</p>
					<ul class="billing grid grid-cols-3 w-full gap-4 mt-6 select-none">
						<li v-for="plan in billingPlans">
							<label class="flex flex-col justify-between items-start h-[200px] p-4 border rounded-lg text-center cursor-pointer">
								<input type="radio" name="billingPlan" :value="plan.name" class="sr-only peer" checked>
								<img class="w-[50px] h-auto aspect-square" :src="plan.icon" :alt="plan.name + ' icon'">
								<div class="flex flex-col items-start ">
									<p class="text-xl font-medium text-gray-700">{{ plan.name }}</p>
									<div class="mt-1 text-sm font-semibold">${{ plan.price }}/mo</div>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</Transition>
			<Transition name="slide-fade">
				<div v-if="currentStep === 3">
3
				</div>
			</Transition>
			<Transition name="slide-fade">
				<div v-if="currentStep === 4">
4
				</div>
			</Transition>
		
			<div class="flex justify-between justify-self-end self-end w-full mt-auto">
				<Transition>
					<button v-if="currentStep > 1" @click="currentStep > 1 ? currentStep-- : ''" type="button" class="py-2 rounded-lg bg-red text-slate-500 font-semibold">Go Back</button>
				</Transition>
				<button @click="currentStep++" type="button" class="px-6 py-2 rounded-lg bg-red text-slate-200 bg-sky-800 font-semibold ml-auto">Next Step</button>
			</div>
		</div>


	</div>

</template>


<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

.billing label:has(input:checked) {
	background-color: #F8F9FE;
	border: solid 1px #483FFE;
	cursor: initial;
	pointer-events: none;
} 


</style>