import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    template: `
    <div (click)="onDivClick()" >
    <button class="btn btn-success" (click)="onSave($event)" >Save</button>
    </div>
    `
})
export class CoursesComponent{
    
    onDivClick(){
        console.log("div clicked")
    }

    onSave($event : Event){
        $event.stopPropagation();
        console.log("The button was clicked.",$event)
    }
} 