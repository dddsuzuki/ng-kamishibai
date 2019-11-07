import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { first } from 'rxjs/operators';
import { PageService } from './page.service';

@Component({
  selector: 'kamishibai-container',
  template: `
    <ng-template #page></ng-template>
  `,
  styleUrls: []
})
export class ContainerComponent implements OnInit {
  @ViewChild('page', { read: ViewContainerRef, static: true }) page: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private pageService: PageService,
  ) { }

  ngOnInit() {
    this.pageService.currentPage$.pipe(first()).subscribe(page => {

      if (!page) {
        return;
      }

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(page);
      this.page.createComponent(componentFactory);
    });
  }
}
