import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const KAMISHIBAI_PAGES = new InjectionToken<any[]>('Kamishibai Pages');

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pageIndex = new BehaviorSubject(0);
  private pages: BehaviorSubject<any[]>;

  get pageIndex$(): Observable<number> {
    return this.pageIndex.asObservable();
  }

  get pages$(): Observable<any> {
    return this.pages.asObservable();
  }

  constructor(@Optional() @Inject(KAMISHIBAI_PAGES) pages: any[]) {
    if (pages === null) {
      pages = [];
    }

    this.pages = new BehaviorSubject(pages);
  }

  next() {
    if (this.pageIndex.getValue() >= this.pages.getValue().length - 1) {
      return;
    }

    this.pageIndex.next(this.pageIndex.getValue() + 1);
  }

  previous() {
    if (this.pageIndex.getValue() <= 0) {
      return;
    }

    this.pageIndex.next(this.pageIndex.getValue() - 1);
  }

  add(component: any) {
    const pages = [ ...this.pages.getValue(), component ];
    this.pages.next(pages);
  }

  clear() {
    this.pageIndex.next(0);
    this.pages.next([]);
  }

}
