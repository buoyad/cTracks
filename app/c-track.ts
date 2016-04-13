import {Item} from './item';
import {Article} from './article';

export class cTrack {
	id: string;
	topic: string;
	items: Item[];
	desc: string;

	constructor(id: string, topic: string, items: Item[], desc: string) {
		this.id = id; this.topic = topic; this.items = items; this.desc = desc;
	}
}