import {Component} 											from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}	from 'angular2/router';
import {TracksService} 										from './tracks.service';
import {TrackListComponent} 								from './track-list.component';
import {TrackViewerComponent}								from './track-viewer.component';
import {TrackCreatorComponent}								from './track-creator.component';

@Component ({
	selector: 'cTracks',
	templateUrl: 'app/templates/app.component.html',
	providers: [TracksService, ROUTER_PROVIDERS],
	directives: [TrackListComponent, ROUTER_DIRECTIVES, TrackCreatorComponent],
})

@RouteConfig ([
	{
		path: '/track/:id',
		name: 'ViewTrack',
		component: TrackViewerComponent
	},
	{
		path: '/',
		name: 'Home',
		component: TrackListComponent,
		useAsDefault: true
	},
	{
		path: '/create',
		name: 'NewTrack',
		component: TrackCreatorComponent
	}
])

export class AppComponent { }