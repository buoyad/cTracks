import {Component} 											from 'angular2/core';
import {Http, HTTP_PROVIDERS}								from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}	from 'angular2/router';
import {TracksService} 										from './tracks.service';
import {TrackListComponent} 								from './track-list.component';
import {TrackViewerComponent}								from './track-viewer.component';

@Component ({
	selector: 'cTracks',
	templateUrl: 'app/templates/app.component.html',
	providers: [Http, TracksService, HTTP_PROVIDERS, ROUTER_PROVIDERS],
	directives: [TrackListComponent, ROUTER_DIRECTIVES],
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
	}
])

export class AppComponent { }