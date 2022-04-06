import { Directive, HostBinding, Inject, Input } from "@angular/core";
import { ChangraSpacingKey, ChangraTheme, CHANGRA_THEME } from "./changraTheme";

@Directive({
  selector: "[cuiStyled]",
})
export class ChangraStylePropsDirective {
  constructor(@Inject(CHANGRA_THEME) private theme: ChangraTheme) {
    console.log("IM BEING INITIALIZED");
  }

  // MARGIN

  @HostBinding("style.margin") get hostMargin(): string {
    const key = this.margin ?? this.m;

    if (key) {
      const val = this.theme.space[key];
      if (val) return val;
      else return `${key}`;
    } else {
      return undefined;
    }
  }

  @Input() margin?: ChangraSpacingKey | string | "px";
  @Input() m?: ChangraSpacingKey | string | "px";
}
