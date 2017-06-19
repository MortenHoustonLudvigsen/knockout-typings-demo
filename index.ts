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
