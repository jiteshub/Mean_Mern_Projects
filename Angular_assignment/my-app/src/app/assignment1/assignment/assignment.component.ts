import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  imgPath:string="../../../assets/images/batman 2.jpg"
  name:string="It's not who I am underneath, but what I do that defines me."

//../../../assets/images/batman 1.jpg"
//"The world only makes sense if you force it to"
  show:boolean=true
  
  change(){
    if(this.show==false){
      this.imgPath="../../../assets/images/batman 1.jpg"
      this.name=" The world only makes sense if you force it to"
      this.show=true
    }
    else{
        this.show=false
        this.imgPath="../../../assets/images/batman 2.jpg"
        this.name="It's not who I am underneath, but what I do that defines me."
    }
  }
  
}

  

