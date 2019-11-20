<template>
	<div class="hero relative w-full flex items-center">
		<particles class="absolute w-full h-full z-20" />
		<img class="absolute w-full h-full z-10" src="~assets/img/hero_bg.jpg">
		<img class="absolute h-full z-30 ml-0 md:ml-32" src="~assets/img/hero_front.png">
		<div class="hero-text absolute right-0 w-1/2 p-5 z-40">
			<p class="text-2xl md:text-6xl text-orange font-fugaz">WELCOME TO PHOENIX</p>
			<p class="text-sm md:text-xl text-gray-400 font-fugaz">CHEAP AND FAST LEAGUE OF LEGENDS ACCOUNT LEVELING, ACCOUNT SELLING, NORMAL MATCHES AND MORE!</p>
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
@media(max-width: 767px) {
	.hero {
		flex: 0 0 300px;
	}
}
</style>
