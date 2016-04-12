import {Component, OnInit}	from 'angular2/core';
import {cTrack}	from './c-track';
import {TracksService}		from './tracks.service';
import {Router}				from 'angular2/router';

@Component ({
	selector: 'tracklist',
	templateUrl: 'app/templates/track-list.component.html'
})

export class TrackListComponent implements OnInit {
	constructor(private _tracksService: TracksService, private _router: Router) {}

	tracks: Array<cTrack>;
	selectedTrack: cTrack;
	ngOnInit() {
		this._tracksService.getTracks().subscribe((cTracks) => {
			console.log(cTracks);
			this.tracks = cTracks;
		});
	}

	onSelect(id: number) {
		this.selectedTrack = this.tracks[id];
		this._router.navigate(['ViewTrack', { id: this.selectedTrack.id }]);
		// Edge cases
	}

}