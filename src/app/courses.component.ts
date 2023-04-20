import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    template: `
    <div>
        <input type="text" (keyup.enter)="onKeyUp()">
    </div>
    `
})
export class CoursesComponent{
    onKeyUp(){
        console.log('enter is pressed.')
    }
}  