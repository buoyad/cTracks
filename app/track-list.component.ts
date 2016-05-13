import {Component, OnInit, OnDestroy}	from 'angular2/core';
import {cTrack}							from './c-track';
import {TracksService}					from './tracks.service';
import {Router, ROUTER_DIRECTIVES}		from 'angular2/router';
import {Observable}						from 'rxjs/Observable';

@Component ({
	selector: 'tracklist',
	templateUrl: 'app/templates/track-list.component.html',
	directives: [ROUTER_DIRECTIVES]
})

export class TrackListComponent implements OnInit, OnDestroy {
	constructor(private _tracksService: TracksService, private _router: Router) {}

	tracks: Array<cTrack> = [];
	rawTracks: Object = {};
	selectedTrack: cTrack;
	ngOnInit() {
		this._tracksService.getTracks().subscribe(obj => {
			this.tracks.unshift(obj);
			this.rawTracks[obj.id] = obj;
		});
	}

	ngOnDestroy() {

	}

	onSelect(sid: string) {
		this.selectedTrack = this.rawTracks[sid];
		this._router.navigate(['ViewTrack', { id: sid }]);
		// Edge cases
	}

}