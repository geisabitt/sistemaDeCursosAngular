import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.formulario = this.formBuilder.group({
      name: [''],
      category: [''],
    });
  }
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
