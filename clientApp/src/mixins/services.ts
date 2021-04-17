import {Vue} from 'vue-property-decorator';

export class MixinSample extends Vue {
	consoleMessage(message) {
		console.log(message);
	}
}
