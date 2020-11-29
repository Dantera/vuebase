
const MyMessage = {

	//mounted: function() { console.log(`MOUNTED VueMessage`); },

	data () {
		return {
		  text: 'Hello World',
		  position: 'bottom',
		  duration: 3000,
		  background: 'rgba(7,17,27,0.8)'
		};
	},

	template: `
	<div>
		<transition name=fade-up>
		<!-- <div class="vue-Message ' + opt.position + '" style="background:' + opt.background + '" v-show="isShow"> -->
		</transition>
	</div>
	`

}

export { MyMessage }