import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  onAdd() {
    console.log('OnAdd Button');
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
