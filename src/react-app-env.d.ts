/// <reference types="react-scripts" />
import "styled-components";
import { Theme } from "./interface/CommonInterface";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
