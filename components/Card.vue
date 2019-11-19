<template>
	<div class="card flex justify-end relative shadow-2xl rounded-large border border-solid border-orange">
		<img v-if="type === 'leveling'" class="absolute w-full h-full object-cover rounded-large" src="~/assets/img/leveling.jpg">
		<img v-if="type === 'selling'" class="absolute w-full h-full object-cover rounded-large" src="~/assets/img/selling.jpg">
		<div class="absolute w-full h-1/2 flex flex-col items-center justify-around bottom-0 p-12">
			<h2 class="text-gray-300 text-2xl mb-12">
				{{ title }}
			</h2>
			<a href="#" class="text-xl px-8 py-4 leading-none border rounded-lg text-orange border-orange hover:border-transparent hover:text-gray-100 hover:bg-orange">Learn more</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: { type: String, required: true, default: '' },
		title: { type: String, required: true, default: '' }
	}
}
</script>

<style>
.card {
	height: 500px;
}
</style>
