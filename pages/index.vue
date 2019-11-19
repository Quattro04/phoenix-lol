<template>
	<div class="main w-full flex flex-col items-center overflow-auto">
		<hero />
		<div class="container flex flex-col p-10">
			<h1 class="title font-medium text-3xl text-orange">
				Tired of grinding?
			</h1>
			<h2 class="subtitle text-xl text-gray-400">
				You've come to the right place. Explore our options below!
			</h2>
			<div class="flex justify-between pt-12">
				<card class="w-1/3" type="leveling" title="Account leveling" />
				<card class="w-1/3" type="selling" title="Buy an account" />
			</div>
		</div>
	</div>
</template>

<script>
import Card from '~/components/Card.vue'
import Hero from '~/components/Hero.vue'
export default {
	components: {
		Card,
		Hero
	}
}
</script>

<style scoped>
.main {
	height: calc(100vh - 70px);
}
</style>
