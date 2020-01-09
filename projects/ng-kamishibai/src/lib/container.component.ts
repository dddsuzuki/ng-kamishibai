import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'kamishibai-container',
  template: `
    <ng-template #page></ng-template>
  `,
  styleUrls: []
})
export class ContainerComponent implements OnInit {
  @ViewChild('page', { read: ViewContainerRef, static: true }) ref: ViewContainerRef;

  @Input() set page(page: any) {
    if (!page) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(page);
    this.ref.createComponent(componentFactory);
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

}
