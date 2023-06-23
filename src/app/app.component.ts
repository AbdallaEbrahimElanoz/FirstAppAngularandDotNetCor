import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors=[' Red','Green','purple','Yellow','White','Black']
  title = 'FirstAppAngularandDotNetCor';
  name='Abdullah Elanouz';
  Twoway='';
  Age=23;
  source='https://th.bing.com/th/id/OIP.nmY2o1MdUEMRBhFkRVxkyAHaGF?pid=ImgDet&rs=1';
  color:any;

  myFunction() {
    alert("Hello");
    console.log('hello');
  }
  changeColor(color:any=this.colors) {

    console.log(this.colors=[color]);

  }
}
