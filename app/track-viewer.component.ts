import {Component, OnInit} 			from 'angular2/core'
import {Http} 						from 'angular2/http';
import {Item}						from './item';
import {Article}					from './article.ts';
import {TracksService}				from './tracks.service';
import {cTrack}							from './c-track';
import {RouteParams, ROUTER_DIRECTIVES} 				from 'angular2/router';

@Component ({
	selector: 'ctrack',
	templateUrl: 'app/templates/track-viewer.component.html',
	directives: [ROUTER_DIRECTIVES],
})

	export class TrackViewerComponent implements OnInit{
	ctrack: cTrack;
	found: boolean;

	constructor(private _tracksService: TracksService, private _routeParams: RouteParams) {

	}

	ngOnInit() {
		let id = this._routeParams.get('id');
		this.found = true;
		this._tracksService.getTrack(id).subscribe((res) => {
			this.ctrack = res;
			if (this.ctrack instanceof cTrack) this.found = true;
			else this.found = false;
			//console.log(this.found);
		});
	}
}