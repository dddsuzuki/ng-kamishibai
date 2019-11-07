import { Injectable } from '@angular/core';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})
export class KamishibaiService {

  constructor(
    private pageService: PageService
  ) { }

  next() {
    this.pageService.next();
  }

  add(component: any) {
    this.pageService.add(component);
  }

}
