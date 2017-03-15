import { provide, Component, ViewChild } from '@angular/core';
import { 
    FormGroup, 
    FormControl,
    REACTIVE_FORM_DIRECTIVES, 
    Validators, 
    FormBuilder,
    FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { CirclesListComponent} from './circles-list';
import { Circle } from './circles-list/circle'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, CirclesListComponent]
  //providers: [Circles]
})
export class AppComponent {
  circleForm: FormGroup; 
  //radius = this.circleForm.controls['radius'].value;
  radius = 10;
  @ViewChild(CirclesListComponent) childView: CirclesListComponent;

 constructor(private formBuilder: FormBuilder) {
    this.circleForm = formBuilder.group({
      'radius':['', [Validators.required, this.numberValidator]]
    });
    this.circleForm.valueChanges.subscribe(
      (data: any) => {
        console.log(JSON.stringify(data))
        console.log(data.radius)
        if (this.childView) { this.childView.reset(data.radius);}
      }
    );

    this.circleForm.statusChanges.subscribe(
      (data: any) => {
       // console.log(data)
        }
    );
   }


  onKeyup() {
    //update the list of circles in another component
   
    console.log(this.circleForm);
  }

  numberValidator(control: FormControl): {[s: string]: boolean} {
    if (isNaN(control.value)) {
      return { isNotNumber: true};
    } 
    return null;
  }
}
