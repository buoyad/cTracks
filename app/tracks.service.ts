import {Injectable} 		from 'angular2/core';
import {Item}		from './item.component';
import {cTrack}	from './c-track';
import {Http}				from 'angular2/http';
import 'rxjs/Rx';
import {Article} 			from './article';

@Injectable ()
export class TracksService {

	constructor(public http: Http) { }

	getTrack(id) {
		return this.http.get('/app/data/tracks.json')
			.map((responseData) => { 
				return responseData.json(); })
			.map((ctracks: Array<any>) => {
				return ctracks.ctracks;
			})
			.map((ctracks: Array<any>) => {
				let result = new cTrack(null, null, null, null);
				if (ctracks.length > 0) {
					ctracks.forEach((ctrack) => {
						if (ctrack.id === id) {
							console.log(ctrack.id === id);
							let items: Array<Item> = [];
							let topic = ctrack.topic;
							let desc = ctrack.description;
							ctrack.items.forEach((item) => {
								if (item.type === "article") {
									let a = new Article(item.title, item.url, item.comment);
									//let a_c = new ArticleComponent();
									//a_c.article = a;
									items.push(a);
								}
							});

							result = new cTrack(id, topic, items, desc);
							result.topic = ctrack.topic;
							result.items = items;
							result.id = id;
							console.log(result);
							//return result;
						}
					});
				}
				return result;
			});
	}

	getTracks() {
		return this.http.get('/app/data/tracks.json')
			.map((responseData) => { return responseData.json(); })
			.map((ctracks: Array<any>) => {
				return ctracks.ctracks;
			})
			.map((ctracks: Array<any>) => {
				let result = new Array<cTrack>();
				if (ctracks) {
					ctracks.forEach((ctrack) => {
						let c = new cTrack(ctrack.id, ctrack.topic, ctrack.items, ctrack.description);
						/*let id = ctrack.id;
						let topic = ctrack.topic
						let items: Array<Item> = [];
						ctrack.items.forEach((item) => {
							if (item.type === "article") {
								let a = new ArticleComponent();
								a.title = item.title; a.url = item.url; a.comment = item.comment;
								items.push(a);
							}
						});
						let res = new cTrackComponent(this);
						res.id = id; res.items = items;*/
						result.push(c);
					});
				}
				return result;
			});
	}

}