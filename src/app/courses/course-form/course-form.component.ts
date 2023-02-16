import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  formulario = this.formBuilder.group({
    name: [''],
    category: [''],
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  onSubmit() {
    this.coursesService.save(this.formulario.value).subscribe({
      next: () => this.onSuccess(),
      error: () => {
        this.onError();
      },
    });
  }
  onCancel() {
    this.location.back();
  }
  onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', 'Fechar', {
      duration: 5000,
    });
    this.onCancel();
  }
  onError() {
    this.snackBar.open('Erro ao salvar curso', 'Fechar', { duration: 5000 });
  }
}
