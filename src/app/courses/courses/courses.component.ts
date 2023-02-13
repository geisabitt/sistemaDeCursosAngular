import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Curso } from '../model/Curso';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Curso[]>; //ou
  //displayedColumns = ['name', 'category', 'actions'];

  //coursesService: CoursesService;

  constructor(
    public dialog: MatDialog,
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.courses = []
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os dados do sistema');
        return [];
      })
    );
  }
  onAdd() {
    console.log('OnAdd Button');
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
