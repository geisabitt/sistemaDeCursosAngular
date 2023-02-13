import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/cursos';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      //delay(5000),
      tap((cursos) => console.log(cursos))
    );
  }

  save(record: Curso) {
    return this.httpClient.post<Curso>(this.API, record);
  }
}
