import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
colors = [' Red', 'Green', 'purple', 'Yellow', 'White', 'Black'];
  name = 'Abdullah Elanouz';
  currentDate=new Date();
  Twoway = '';
  Age = 23;
  source =
    'https://th.bing.com/th/id/OIP.nmY2o1MdUEMRBhFkRVxkyAHaGF?pid=ImgDet&rs=1';
  color: any;
  isAuth: boolean = false;
  logSate: string = 'Login';

  toggle() {
    this.isAuth = !this.isAuth;
    this.logSate = this.isAuth ? 'logout' : 'Login';
  }

  myFunction() {
    alert('Hello');
    console.log('hello');
  }
  changeColor(color: any = this.colors) {
    console.log((this.colors = [color]));
  }
}
