# knockout-typings-demo
Demo of changes to knockout typings in Definitely Typed

With the existing typings for knockout, it is not possible to extend any of the subscribable and observable interfaces.

Given this code:

```typescript
import * as ko from 'knockout';

export interface MySubscribable extends KnockoutSubscribable<any> {
    isBeautiful?: boolean;
}

export interface MyObservable extends KnockoutObservable<any> {
    isBeautiful?: boolean;
}

export interface MyObservableArray extends KnockoutObservableArray<any> {
    isBeautiful?: boolean;
}

export interface MyComputed extends KnockoutComputed<any> {
    isBeautiful?: boolean;
}
```

The TypeScript compiler will fail with the following messages:

```
index.ts(4,5): error TS2411: Property 'isBeautiful' of type 'boolean' is not assignable to string index type 'KnockoutBindingHandler'.
index.ts(8,5): error TS2411: Property 'isBeautiful' of type 'boolean' is not assignable to string index type 'KnockoutBindingHandler'.
index.ts(12,5): error TS2411: Property 'isBeautiful' of type 'boolean' is not assignable to string index type 'KnockoutBindingHandler'.
index.ts(16,5): error TS2411: Property 'isBeautiful' of type 'boolean' is not assignable to string index type 'KnockoutBindingHandler'.
```

To see this in action run:

```sh
npm install
npm test
```
