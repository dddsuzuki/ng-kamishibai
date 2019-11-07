import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KAMISHIBAI_PAGES } from './page.service';
import { KamishibaiService } from './kamishibai.service';
import { ContainerComponent } from './container.component';
import { KamishibaiComponent } from './kamishibai.component';

@NgModule({
  declarations: [
    ContainerComponent,
    KamishibaiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    KamishibaiComponent,
  ],
  entryComponents: [
    ContainerComponent,
  ],
})
export class KamishibaiModule {
  static forRoot(pages: any[]): ModuleWithProviders {
    return {
      ngModule: KamishibaiModule,
      providers: [
        KamishibaiService,
        {
          provide: KAMISHIBAI_PAGES,
          useValue: pages,
        },
      ],
    };
  }
}

