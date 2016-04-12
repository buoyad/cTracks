import {Item} from './item';

export class Article extends Item {
	title: string;
	url: string;
	comment: string;
	constructor(title: string, url: string, comment: string) {
		super();
		this.title = title;
		this.url = url;
		this.comment = comment;
	}
}