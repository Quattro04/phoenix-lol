<template>
	<div id="particles-js" />
</template>

<script>
export default {
	mounted () {
		require('particles.js')
		this.$nextTick(() => {
			this.initParticlesJS()
		})
	},

	methods: {
		initParticlesJS() {
			window.particlesJS('particles-js', {
				'particles': {
					'number': {
						'value': 200,
						'density': {
							'enable': false,
							'value_area': 789.1476416322727
						}
					},
					'color': {
						'value': '#f75402'
					},
					'shape': {
						'type': 'circle',
						'stroke': {
							'width': 0,
							'color': '#000000'
						},
						'polygon': {
							'nb_sides': 5
						},
						'image': {
							'src': 'img/github.svg',
							'width': 100,
							'height': 100
						}
					},
					'opacity': {
						'value': 0.48927153781200905,
						'random': false,
						'anim': {
							'enable': false,
							'speed': 0.2,
							'opacity_min': 0,
							'sync': false
						}
					},
					'size': {
						'value': 5,
						'random': true,
						'anim': {
							'enable': true,
							'speed': 2,
							'size_min': 0,
							'sync': false
						}
					},
					'line_linked': {
						'enable': false,
						'distance': 150,
						'color': '#ffffff',
						'opacity': 0.4,
						'width': 1
					},
					'move': {
						'enable': true,
						'speed': 2,
						'direction': 'top',
						'random': true,
						'straight': false,
						'out_mode': 'out',
						'bounce': false,
						'attract': {
							'enable': true,
							'rotateX': 600,
							'rotateY': 1200
						}
					}
				},
				'interactivity': {
					'detect_on': 'canvas',
					'events': {
						'onhover': {
							'enable': false,
							'mode': 'repulse'
						},
						'onclick': {
							'enable': false,
							'mode': 'push'
						},
						'resize': true
					},
					'modes': {
						'grab': {
							'distance': 400,
							'line_linked': {
								'opacity': 1
							}
						},
						'bubble': {
							'distance': 83.91608391608392,
							'size': 1,
							'duration': 3,
							'opacity': 1,
							'speed': 3
						},
						'repulse': {
							'distance': 50,
							'duration': 1
						},
						'push': {
							'particles_nb': 4
						},
						'remove': {
							'particles_nb': 2
						}
					}
				},
				'retina_detect': false
			})
		}
	}
}
</script>
