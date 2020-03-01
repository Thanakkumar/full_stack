import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Angular 7 Project!';
  username : String;
  response : String;
 Heroes= [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
   constructor(private http: HttpClient) {}
   ngOnInit() {
      // console.log("hi");
      // this.http.get("http://localhost:8981/rest/message/1?name=thana",{responseType: 'text'}).subscribe((data) => {
      //   this.response = data.toString();
      //   console.log("hi2");
      //    console.log(data);
      // });
      const greetingPoster = new Promise((resolve, reject) => {
        console.log('Inside Promise (proof of being eager)');
        resolve(this.Heroes[0]);
        resolve(this.Heroes[0]);

      });
      
      console.log('Before calling then on Promise');
      
      greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));
      
      // const greetingLady$ = new Observable(observer => {
      //   console.log('Inside Observable (proof of being lazy)');
      //   observer.next('Hello! I am glad to get to know you.');
      //   observer.complete();
      // });
      
      // console.log('Before calling subscribe on Observable');
      
      // greetingLady$.subscribe({
      //   next: console.log,
      //   complete: () => console.log('End of conversation with preety lady')
      // });
    }

    clickfunc(){
      console.log("values : "+ this.username);
    }
}
