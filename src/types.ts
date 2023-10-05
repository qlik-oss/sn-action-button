import { stardust } from "@nebula.js/stardust";
type Color = {
  index: number;
  color: string;
};
type FontAlign = "right" | "center" | "left";
type FontStyle = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};
type FontSizeBehavior = "responsive" | "fluid" | "fixed";
type BkgImageSize = "auto" | "alwaysFit" | "fitWidth" | "fitHeight" | "stretchFit" | "alwaysFill";
// type Position =
//   | "topLeft"
//   | "centerLeft"
//   | "bottomLeft"
//   | "topCenter"
//   | "centerCenter"
//   | "bottomCenter"
//   | "topRight"
//   | "centerRight"
//   | "bottomRight"
//   | "top-left"
//   | "center-left"
//   | "bottom-left"
//   | "top-center"
//   | "center-center"
//   | "top-right"
//   | "center-right"
//   | "bottom-right";

export interface Font {
  fontFamily: string;
  useColorExpression: boolean;
  color: Color;
  colorExpression: string;
  size: number;
  sizeFixed: number;
  sizeBehavior: FontSizeBehavior;
  style: FontStyle;
  align: FontAlign;
}

export interface Background {
  useColorExpression?: boolean;
  color?: Color;
  colorExpression?: string;
  mode?: "none" | "media";
  useImage?: boolean;
  url?: {
    qStaticContentUrlDef?: {
      qUrl: string;
    };
    qStaticContentUrl?: {
      qUrl: string;
    };
  };
  size?: BkgImageSize;
  position?: string; // Add all the positions
}

export interface Border {
  useColorExpression: boolean;
  color: Color;
  colorExpression: string;
  useBorder: boolean;
  radius: number;
  width: number;
}

// TODO: Move the component into Styling panel
export interface Icon {
  useIcon?: boolean;
  iconType?: string;
  position?: "left" | "right";
}

export interface Style {
  label: string;
  showLabel: boolean;
  font?: Font;
  background?: Background;
  border?: Border;
  icon?: Icon;
}

export interface ButtonLayout extends EngineAPI.IGenericObjectLayout {
  style: Style;
}

export interface Galaxy {
  flags: stardust.Flags;
  theme: stardust.Theme;
  translator: stardust.Translator;
}
