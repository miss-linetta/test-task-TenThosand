import { Fonts, FontSizes } from '../typography/types';
import { Palette } from '../palette/types';

export interface Theme {
  palette: Palette;
  typography: {
    fonts: Fonts;
    fontSizes: FontSizes;
  };
}
