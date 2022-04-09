import { Directive, HostBinding, Inject, Input, NgModule } from "@angular/core";
import { ChangraSpacingKey, ChangraTheme, CHANGRA_THEME } from "./changraTheme";

@Directive({
  selector: "[cuiStyled]",
})
export class ChangraStylePropsDirective {
  constructor(@Inject(CHANGRA_THEME) private theme: ChangraTheme) {
  }

  // MARGIN

  @HostBinding("style.margin") get hostMargin(): string | undefined {
    const key = this.margin ?? this.m;

    if (key) {
      const val = this.theme.space[key];
      if (val) return val;
      else return `${key}`;
    } else {
      return undefined;
    }
  }

  @Input() margin?: ChangraSpacingKey | string;
  @Input() m?: ChangraSpacingKey | string;
}

@NgModule({
  declarations: [ChangraStylePropsDirective],
  exports: [ChangraStylePropsDirective],
})
export class ChangraStylePropsDirectiveModule {}
