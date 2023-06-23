import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-categroy',
  templateUrl: './categroy.component.html',
  styleUrls: ['./categroy.component.css']
})
export class CategroyComponent implements OnInit {

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.service.sayHello(" categroy")
  }

}
