import {Injectable} 		from 'angular2/core';
import {Item}				from './item.component';
import {cTrack}				from './c-track';
import 'rxjs/Rx';
import {Observable} 		from 'rxjs/Observable';
import {Article} 			from './article';
import {observableFirebaseObject, observableFirebaseArray, NgWhen} from 'angular2-firebase';
import {URL} from './url';

@Injectable ()
export class TracksService {
	database: Firebase;

	constructor() { 
		this.database = new Firebase(URL);
	}

	pushTrack(newTrack: cTrack) {
		let ref = this.database.push();
		ref.set({ id: ref.key() });
		ref.set(newTrack);
		return ref.key();
	}

	getTracks(): Observable<cTrack> {
		return Observable.create(observer => {
			let listener = this.database.on('child_added', snapshot => {
				let data = snapshot.val();
				observer.next(new cTrack(snapshot.key(), data.topic, data.items, data.desc));
			}, observer.error);

			return () => {
				this.database.off('child_added', listener);
			}
		});
	}

	getTrack(id: string) {
		return Observable.create(observer => {
			let listener = this.database.on('value', snapshot => {
				let target = snapshot.val()[id];
				observer.next(new cTrack(id, target.topic, target.items, target.desc));
			}, observer.error);

			return () => {
				this.database.off('value', listener);
			}
		});
	}

}