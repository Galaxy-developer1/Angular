import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

    authors;
  constructor(authorsList : AuthorService){
    this.authors = authorsList.GetAuthors();
  }
}
