import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Progress Bar';

  normalPB: boolean = false; 
  progressValue:any;
  labels = 'Project status';

  @Input() value = 80;
  @Input() label = 'Progress';
  @Input() max = 100;
  @Output() progressClick = new EventEmitter();


  onChange() {
    console.log("Progress is " + this.progressValue +"%")
  }
  showProgressBar(value: number){
    this.normalPB=false;    
    value ==1 ? this.normalPB=true : value ==2
  }
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.progressClick.emit(this.value);
    this.progressValue = this.value;
    console.log("Progress is " + this.progressValue +"%")
  }
}

