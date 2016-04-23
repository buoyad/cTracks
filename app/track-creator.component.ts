import {Component}		from 'angular2/core';
import {TracksService}	from './tracks.service';
import {cTrack}			from './c-track';
import {Item}			from './item';
import {Article}		from './article';
import {Router}			from 'angular2/router';
import {Cookie} 		from 'ng2-cookies/ng2-cookies';

@Component ({
	selector: 'creator',
	templateUrl: 'app/templates/track-creator.component.html'
})

export class TrackCreatorComponent {

	topic: string;
	description: string;
	items: Item[] = [];

	constructor(private _trackssService: TracksService, private _router: Router) {
		let savedTrack: string = Cookie.getCookie('WIP');
		if (savedTrack) {
			let save: any = JSON.parse(savedTrack);
			this.topic = save.topic;
			this.description = save.description;
			this.items = save.items;
		}
	}

	title: string;
	url: string;
	comment: string = "";
 	
 	pushTrack() {
	  let newTrack = new cTrack(null, this.topic, this.items, this.description);
	  console.log(newTrack);
	  let sid = this._trackssService.pushTrack(newTrack);
	  this._router.navigate(['ViewTrack', { id: sid }]);
	  this.topic = ""; this.description = ""; this.items = new Array<Item>();
 	}

	addArticle(){
		this.items.push(new Article(this.title, this.url, this.comment));
		this.title = "";
		this.url = "";
		this.comment = "";
	}

	saveTrack() {
		let save: any = {
			"topic": this.topic,
			"items": this.items,
			"description": this.description
		};
		save = JSON.stringify(save);
		Cookie.setCookie('WIP', save);
	}
}