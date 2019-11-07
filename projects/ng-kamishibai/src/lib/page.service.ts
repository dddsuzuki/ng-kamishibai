import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const KAMISHIBAI_PAGES = new InjectionToken<any[]>('Kamishibai Pages');

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pageIndex = new BehaviorSubject(0);
  private pages: BehaviorSubject<any[]>;
  private currentPage: BehaviorSubject<any>;

  get pageIndex$(): Observable<number> {
    return this.pageIndex.asObservable();
  }

  get pages$(): Observable<any> {
    return this.pages.asObservable();
  }

  get currentPage$(): Observable<any> {
    return this.currentPage.asObservable();
  }

  constructor(@Optional() @Inject(KAMISHIBAI_PAGES) pages: any[]) {
    if (pages === null) {
      pages = [];
    }

    this.pages = new BehaviorSubject(pages);
    this.currentPage = new BehaviorSubject(pages[this.pageIndex.getValue()]);
  }

  next() {
    if (this.pageIndex.getValue() >= this.pages.getValue().length - 1) {
      return;
    }

    this.pageIndex.next(this.pageIndex.getValue() + 1);
    this.currentPage.next(this.pages.getValue()[this.pageIndex.getValue()]);
  }

  add(component: any) {
    const pages = [ ...this.pages.getValue(), component ];
    this.pages.next(pages);
  }

}
