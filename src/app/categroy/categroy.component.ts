import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { category } from '../categroy';

@Component({
  selector: 'app-categroy',
  templateUrl: './categroy.component.html',
  styleUrls: ['./categroy.component.css']
})
export class CategroyComponent implements OnInit {
  cat:category = new category(0,"Zara");

  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.service.sayHello(" categroy")
  }

  onSubmit() {
    console.log('Form submitted'&& this.cat);
  }

}
