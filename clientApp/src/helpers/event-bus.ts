import mitt, { Emitter } from "mitt";

export class EventBus {
	private static instance: EventBus;
	private readonly emitter: Emitter = mitt();

	constructor() {
		this.emitter = mitt();
	}

	public static getInstance(): EventBus {
		if (!EventBus.instance) {
			EventBus.instance = new EventBus();
		}
		return EventBus.instance;
	}

	public on<T = any>(eventName: EventName, handler: (event?: T) => void) {
		this.emitter.on<T>(eventName, handler);
	}

	public emit<T = any>(eventName: EventName, eventArgs?: T) {
		this.emitter.emit<T>(eventName, eventArgs);
	}
}

export enum EventName {
	TestEvent = "test-event",
}
