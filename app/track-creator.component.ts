import {Component}		from 'angular2/core';
import {TracksService}	from './tracks.service';
import {cTrack}			from './c-track';
import {Item}			from './Item';

@Component ({
	selector: 'creator',
	templateUrl: 'app/templates/track-creator.component.html'
})

export class TrackCreatorComponent {

	constructor(private _trackssService: TracksService) { }

	newTrack: cTrack;
	topic: string;
	description: string;
	items: Item[];
 	
 	pushTrack() {
		  this.newTrack = new cTrack(null, this.topic, this.items, this.description);
		  this._trackssService.pushTrack(this.newTrack);
		  this.topic = ""; this.description = ""; this.items = new Array<Item>();
 	}
}