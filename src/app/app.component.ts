import { Component } from '@angular/core';
import { Observable, combineLatest, concat, concatMap, concatMapTo, forkJoin, from, interval, map, merge, mergeMap, of, range, switchMap, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';


  ngOnInit() {
    const s = of( 1 , 2 , 3 );
    const s2 = of( 7, 8, 9 );

    s.pipe(map((val) => val * 2))
    .subscribe((val) => {
    console.log(val);
    });
 
}


}
