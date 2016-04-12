import {Item} from './item';
import {Article} from './article';

export class cTrack {
	id: number;
	topic: string;
	items: Item[];
	desc: string;

	constructor(id: number, topic: string, items: Item[], desc: string) {
		this.id = id; this.topic = topic; this.items = items; this.desc = desc;
	}
}