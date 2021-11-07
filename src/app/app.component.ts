import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progress Bar';

  error: any;
  currentProg = 0;
  txtRateValue: any;
  max = 0;
  inputMax: any;
  updateRating(){
    if(this.txtRateValue <= this.max){
      this.currentProg = this.txtRateValue;
    }else{
      this.error = "Do not exceed maximum value"
    }
  }

  enterMax(){
    if(this.inputMax<=100){
      this.max = this.inputMax;
    }else{
      this.error = "Please enter value 100 below"
    }
    
   

  }
}

