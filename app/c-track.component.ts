import {Component, OnInit, Input} 	from 'angular2/core';
import {Http} 						from 'angular2/http';
import {Item}						from './item';
import {Article}					from './article.ts';
import {TracksService}				from './tracks.service';
import {cTrack}						from './c-track';

@Component ({
	selector: 'ctrack',
	templateUrl: 'app/templates/c-track.component.html',
})

export class cTrackComponent implements OnInit{
	cTrack: cTrack;
	id: number;

	constructor(private _tracksService: TracksService) {

	}

	ngOnInit() {
		this._tracksService.getTrack(this.id).subscribe((res) => { 
			this.cTrack = res;});
	}

	//@Input() ctrack: cTrack;
}