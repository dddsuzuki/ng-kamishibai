import { Component } from '@angular/core';
import { animate, style, trigger, transition } from '@angular/animations';
import { PageService } from './page.service';

@Component({
  selector: 'kamishibai',
  template: `
    <div class="Container">
      <ng-container *ngFor="let page of (pages$ | async); index as i">
        <div class="Page" @slideInOut *ngIf="i === (pageIndex$ | async)">
          <kamishibai-container></kamishibai-container>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `.Container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }`,
    `.Page {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }`,
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('250ms ease-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
        }),
        animate('250ms ease-out', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class KamishibaiComponent {
  pages$ = this.pageService.pages$;
  pageIndex$ = this.pageService.pageIndex$;

  constructor(private pageService: PageService) { }
}
