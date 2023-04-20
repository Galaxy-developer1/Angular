import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    template: `
    <div>
        <input type="text" (keyup.enter)="oNKeyUp()">
    </div>
    `
})
export class CoursesComponent{
    oNKeyUp(){
        console.log('enter is pressed.')
    }
}  