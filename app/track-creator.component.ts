import {Component}		from 'angular2/core';
import {TracksService}	from './tracks.service';
import {cTrack}			from './c-track';
import {Item}			from './item';
import {Article}		from './article';
import {Router}			from 'angular2/router';

@Component ({
	selector: 'creator',
	templateUrl: 'app/templates/track-creator.component.html'
})

export class TrackCreatorComponent {

	constructor(private _trackssService: TracksService, private _router: Router) { }

	topic: string = "";
	description: string = "";
	items: Item[] = [];

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
}