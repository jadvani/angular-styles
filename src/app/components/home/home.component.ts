import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("OnInit");
  }
  
  ngOnChanges() {
    console.log("OnChanges");
  }
  ngDoCheck() {
    console.log("DoCheck");
  }
  ngAfterContentInit() {
    console.log("AfterContent");
  }
  ngAfterContentChecked() {
    console.log("AfterContent");
  }
  ngAfterViewInit() {
    console.log("AfterViewIni");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChe");
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }

}
