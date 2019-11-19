<template>
	<div class="hero relative w-full">
		<particles class="absolute w-full h-full z-20" />
		<img class="absolute w-full h-full z-10" src="~assets/img/hero_bg.jpg">
		<img class="absolute h-full z-30" src="~assets/img/hero_front.png">
		<div class="hero-text absolute right-0 w-1/2 z-40">
			<p class="text-6xl text-orange font-trade">Welcome to Phoenix</p>
			<p class="text-xl text-gray-300">Cheap and fast League of Legends accout leveling, accout selling, normal matches and more!</p>
		</div>
	</div>
</template>

<script>
import Particles from '~/components/Particles.vue'

export default {
	components: {
		Particles
	}
}
</script>

<style>
.hero {
	flex: 0 0 600px;
}
.z-30 {
	margin-left: 200px;
}
.hero-text {
	top: 30%;
}
</style>
