<template>
	<div class="card-container">
		<div class="card h-full flex flex-col justify-end relative shadow-2xl rounded-large cursor-pointer">
			<div :style="{ backgroundImage: `url(${backgroundUrl})` }" class="image rounded-t-large bg-center bg-no-repeat bg-cover">
				<!-- <img v-if="type === 'leveling'" class="image h-full object-cover rounded-large" src="~/assets/img/leveling.jpg">
				<img v-if="type === 'selling'" class="image object-cover rounded-large" src="~/assets/img/selling.jpg"> -->
			</div>
			<h2 class="text absolute text-gray-300 text-xl mb-12">
				{{ title }}
			</h2>
			<div class="w-full flex-1 flex flex-col items-center justify-around bottom-0 bg-orange text-grey text-xl rounded-b-large">
				LEARN MORE
				<!-- <a href="#" class="text-xl px-8 py-4 leading-none border rounded-lg text-orange border-orange hover:border-transparent hover:text-gray-100 hover:bg-orange">Learn more</a> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: { type: String, required: true, default: '' },
		title: { type: String, required: true, default: '' }
	},
	computed: {
		backgroundUrl() {
			return require(`~/assets/img/${this.type}.jpg`)
		}
	}
}
</script>

<style scoped>
.card-container {
	height: 550px;
}
@media(max-width: 767px) {
	.card-container {
		height: 300px;
	}
}
.card {
	transition: box-shadow .5s;
}
.card:hover {
	box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 25px 5px;
}
.text {
	left: 5%;
	bottom: 5%;
}
.image {
	flex: 7 7 0;
}
</style>
