import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  GetAuthors(){

    return ['author1','author2','author3']
  }
}
