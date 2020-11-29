
import { MyMessage }  from './message.js'

const Message = {
	showMessage: false,
	showMessageNew: null,
	time: null,
	colors: {
		SUCCESS: "#34a853",
		ERROR: "#db4437",
		WARNING: "#f4b400",
		INFO: "#4285f4"
	},
	install (Vue, options) {
		
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue;
		}

		Vue.component('Message', MyMessage)

		Vue.prototype.$msg = (obj, callBack) => {
			
			let opt = MyMessage.data()

			for (let property in options) {
				opt[property] = options[property];
			}

			if (!obj instanceof Object) {
				if (obj) {
					opt.text = obj;
				} else {
					for (let property in obj) {
						opt[property] = obj[property];
					}
				}
			} else {
				if (typeof obj === 'string') {
					opt.text = obj;
				} else {
					for (let property in obj) {
						opt[property] = obj[property];
					}
				}
			}

			/*
			// Dantera - if the value matches use the predefined color
			if (this.colors.hasOwnProperty(opt[background])) {
				opt[background] = this.colors[opt[background]];
			}
			*/

			if (Message.showMessage || Message.showMessageNew) {
				clearTimeout(Message.time);
				Message.showMessage = false;
				document.body.removeChild(Message.showMessageNew.$mount().$el);
				Message.showMessageNew = null;
			}

			if (!Message.showMessageNew) {
				let MessageT = Vue.extend({
					template: `
					<transition name=fade-up>
						<div class="vue-Message ${ opt.position }" v-show="isShow">
							<div class="vue-Message-Detail" style="background: ${ opt.background }">${ opt.text }</div>
							<Message></Message>
						</div>
					</transition>`,
					data () {
						return {
							isShow: Message.showMessage
						}
					}
				})
				Message.showMessageNew = new MessageT();
				let tpl = Message.showMessageNew.$mount().$el;
				document.body.appendChild(tpl);
				Message.showMessageNew.isShow = Message.showMessage = true;
			}

			Message.time = setTimeout(function () {
				Message.showMessageNew.isShow = Message.showMessage = false;
				if (typeof callBack === 'function') {
					callBack();
				}
			}, opt.duration);
		}
	}
}

export default Message
