# ng-kamishibai
Page transition library for Angular

## Installation
Using npm:

```bash
$ npm install ng-kamishibai
```

Using yarn:

```bash
$ yarn add ng-kamishibai
```

## Usage
Import KamishibaiModule

```typescript
import { KamishibaiModule, KAMISHIBAI_PAGES } from 'ng-kamishibai';

@NgModule({
  declarations: [
    StartPageComponent, // example page component
    EndPageComponent, // example page component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KamishibaiModule, // import here
  ],
  providers: [
    {
      provide: KAMISHIBAI_PAGES, // Set up initial pages (optional)
      useValue: [
        StartPageComponent,
        EndPageComponent,
      ]
    },
  ],
  entryComponents: [
    StartPageComponent, // example page component
    EndPageComponent, // example page component
  ]
})
export class YourModule { }
```

Use KamishibaiComponent
```html
<kamishibai></kamishibai>
```

Use KamishibaiService
```typescript
import { Component } from '@angular/core';
import { KamishibaiService } from 'ng-kamishibai';

@Component({
  selector: 'your-selector',
  template: `
    <button type="button" (click)="previous()">previous</button>
    <button type="button" (click)="next()">next</button>
  `,
})
export class YourComponent {
  constructor(private kamishibaiService: KamishibaiService) { }

  previous() {
    this.kamishibaiService.previous();
  }

  next() {
    this.kamishibaiService.next();
  }
}
```

## API

### KamishibaiService
- previous()
- next()
- add(component)
