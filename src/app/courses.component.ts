import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector: 'courses',
    template: `
    <h4>{{title}}</h4>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    
    `
})
export class CoursesComponent{
    title = 'This is discord which will help you connect with our community!!'
    
    courses; 
    
    constructor(services: CoursesService){
        this.courses = services.getCourses();
    }
             
} 