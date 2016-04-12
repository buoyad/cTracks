import {Component, OnInit} 			from 'angular2/core'
import {Http} 						from 'angular2/http';
import {Item}						from './item';
import {Article}					from './article.ts';
import {TracksService}				from './tracks.service';
import {cTrack}						from './c-track';
import {RouteParams} 				from 'angular2/router';

@Component ({
	selector: 'ctrack',
	templateUrl: 'app/templates/c-track.component.html',
})

	export class TrackViewerComponent implements OnInit{
	ctrack: cTrack;

	constructor(private _tracksService: TracksService, private _routeParams: RouteParams) {

	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		console.log(id);
		this._tracksService.getTrack(id).subscribe((res) => {
			console.log(res);
			this.ctrack = res;
		});
	}
}