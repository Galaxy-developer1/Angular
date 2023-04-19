import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    template: `

    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'red'" >Save</button>
    `
})
export class CoursesComponent{
    title = 'This is discord which will help you connect with our community!!'
    
    courses; 

    isActive = true;
    
    constructor(services: CoursesService){
        this.courses = services.getCourses();
    }
             
} 