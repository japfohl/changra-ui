import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ChangraTheme, CHANGRA_THEME, defaultTheme } from './changraTheme';

@NgModule({
  imports: [CommonModule],
})
export class ChangraModule {
  static forRoot(
    theme?: Partial<ChangraTheme>
  ): ModuleWithProviders<ChangraModule> {
    return {
      ngModule: ChangraModule,
      providers: [
        { provide: CHANGRA_THEME, useValue: ChangraModule.extendTheme(theme) },
      ],
    };
  }

  private static extendTheme(theme?: Partial<ChangraTheme>): ChangraTheme {
    return {
      space: {
        ...defaultTheme.space,
        ...(theme?.space ?? {}),
      },
    };
  }
}
