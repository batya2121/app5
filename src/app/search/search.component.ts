import { ParseSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
valueForSearch:any="";
// value2:any="";
//  form :NgForm
  constructor() { }

  ngOnInit(): void {
  }
//   search(e:any){
// this.valueForSearch=e.target.value;
// console.log(this.valueForSearch)

//   }
//   dpvalue(e:any){
//     console.log(e.target.value)
//   }
}
