import { stardust } from "@nebula.js/stardust";

export type SizeBehavior = "responsive" | "relative" | "fixed";
export type Align = "center" | "right" | "left";
export type Size = "auto" | "alwaysFit" | "fitWidth" | "fitHeight" | "fill" | "alwaysFill";
export type Mode = "none" | "media";
export type IconPosition = "right" | "left";
export type Position =
  | "topLeft"
  | "centerLeft"
  | "bottomLeft"
  | "topCenter"
  | "centerCenter"
  | "bottomCenter"
  | "topRight"
  | "centerRight"
  | "bottomRight"
  | "top-left"
  | "center-left"
  | "bottom-left"
  | "top-center"
  | "center-center"
  | "top-right"
  | "center-right"
  | "bottom-right";

export interface Color {
  color: string;
  index: number;
}

export interface Url {
  qStaticContentUrlDef: {
    qUrl: string;
  };
  qStaticContentUrl: {
    qUrl: string;
  };
}

export interface Font {
  fontFamily: string;
  useColorExpression: boolean;
  color: {
    color: string;
    index: number;
  };
  colorExpression: string;
  size: number;
  sizeFixed: number;
  sizeBehavior: SizeBehavior;
  style: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };
  align: Align;
}

export interface Background {
  useColorExpression: boolean;
  color: Color;
  colorExpression: string;
  useImage: boolean;
  mode: Mode;
  url: Url;
  size: Size;
  position: Position;
}

export interface Border {
  useColorExpression: boolean;
  color: Color;
  colorExpression: string;
  useBorder: boolean;
  radius: number;
  width: number;
}

export interface Icon {
  useIcon: boolean;
  iconType: string;
  position: IconPosition;
}

export interface Style {
  label: string;
  font: Font;
  background: Background;
  border: Border;
  icon: Icon;
}

export interface GetStyle {
  style: Style;
  disabled: boolean;
  theme: stardust.Theme;
  element: HTMLElement;
  app?: EngineAPI.IApp;
}

export interface HandleSetStyle {
  button: HTMLElement;
  theme: stardust.Theme;
  style: Style;
  isSense: boolean;
}
