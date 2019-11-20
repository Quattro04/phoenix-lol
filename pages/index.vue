<template>
	<div class="main w-full flex flex-col items-center overflow-auto font-fugaz">
		<hero />
		<div class="container flex flex-col p-10">
			<h1 class="title font-medium text-2xl text-orange">
				TIRED OF GRINDING?
			</h1>
			<h2 class="subtitle text-md text-gray-400">
				YOU'VE COME TO THE RIGHT PLACE. WHAT ARE YOU LOOKING FOR TODAY?
				<!-- You've come to the right place. Explore our options below! -->
			</h2>
			<div class="flex justify-between flex-wrap pt-6">
				<card type="leveling" title="ACCOUNT LEVELING" class="w-full md:w-1/2 xl:w-1/3 p-6" />
				<card type="selling" title="BUY AN ACCOUNT" class="w-full md:w-1/2 xl:w-1/3 p-6" />
				<card type="selling" title="NORMAL MATCHES" class="w-full md:w-1/2 xl:w-1/3 p-6" />
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
