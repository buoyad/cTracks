import {Component}		from 'angular2/core';
import {TracksService}	from './tracks.service';
import {cTrack}			from './c-track';
import {Item}			from './item';
import {Article}		from './article';
import {Router}			from 'angular2/router';
import {CookieService} 	from 'angular2-cookie/core';
import {TimerWrapper}	from 'angular2/src/facade/async'

@Component ({
	selector: 'creator',
	templateUrl: 'app/templates/track-creator.component.html'
})

export class TrackCreatorComponent {

	topic: string;
	description: string;
	items: Item[] = [];
	saving: boolean;

	saveMessage: string;

	constructor(private _trackssService: TracksService, private _router: Router, private _cookieService: CookieService) {
		let savedTrack: any = this._cookieService.getObject('WIP');
		if (savedTrack) {
			this.topic = savedTrack.topic;
			this.description = savedTrack.description;
			this.items = savedTrack.items;
		}
		this.saving = false;
	}

	title: string;
	url: string;
	comment: string = "";
 	
 	pushTrack() {
	  let newTrack = new cTrack(null, this.topic, this.items, this.description);
	  console.log(newTrack);
	  let sid = this._trackssService.pushTrack(newTrack);
	  this._cookieService.remove('WIP');
	  this._router.navigate(['ViewTrack', { id: sid }]);
	  this.topic = ""; this.description = ""; this.items = new Array<Item>();
	  this._cookieService.put(sid, '1');
 	}

	addArticle(){
		this.items.push(new Article(this.title, this.url, this.comment));
		this.title = "";
		this.url = "";
		this.comment = "";
	}

	removeItem(item: Item) {
		let i = this.items.indexOf(item);
		this.items.splice(i, 1);
	}

	saveTrack() {
		this.showSaveMessage();
		let save: any = {
			"topic": this.topic,
			"items": this.items,
			"description": this.description
		};
		this._cookieService.putObject('WIP', save);
	}

	showSaveMessage() {
		this.saving = true;
		TimerWrapper.setTimeout(() => {
			this.saving = false;
		}, 900)
		this.saveMessage = "cTrack saved!";

	}

	clear() {
		if (this.items.length > 0) {
			if (confirm('Warning: This will permanently delete your current cTrack')) {
				this.clearTrack();
			}
		}
		else this.clearTrack();
	}

	clearTrack() {
		this.topic = "";
		this.description = "";
		this.items = new Array<Item>();
		this.title = "";
		this.url = "";
		this.comment = "";
		this._cookieService.remove('WIP');
	}
}