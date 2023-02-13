import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from '../model/Curso';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Curso[] = [];
  readonly displayedColumns = ['nome', 'tipo', 'descricao', 'valor', 'actions'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  onAdd() {
    console.log('OnAdd Button');
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
