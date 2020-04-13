import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private templateRef: TemplateRef<any>
    ) { }

    @Input('appTimes') set render(times: number) {
      this.viewContainer.clear();
      for(let i =0; i < times; i++){
        this.viewContainer.createEmbeddedView(this.templateRef,{});
      }
    }
}
