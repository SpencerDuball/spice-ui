import type { Tokens, SemanticTokens } from "@pandacss/dev";

import amber from "../colors/amber.js";
import blue from "../colors/blue.js";
import bronze from "../colors/bronze.js";
import brown from "../colors/brown.js";
import crimson from "../colors/crimson.js";
import cyan from "../colors/cyan.js";
import gold from "../colors/gold.js";
import grass from "../colors/grass.js";
import green from "../colors/green.js";
import indigo from "../colors/indigo.js";
import iris from "../colors/iris.js";
import jade from "../colors/jade.js";
import lime from "../colors/lime.js";
import mauve from "../colors/mauve.js";
import mint from "../colors/mint.js";
import neutral from "../colors/neutral.js";
import olive from "../colors/olive.js";
import orange from "../colors/orange.js";
import pink from "../colors/pink.js";
import plum from "../colors/pink.js";
import purple from "../colors/purple.js";
import red from "../colors/red.js";
import ruby from "../colors/ruby.js";
import sage from "../colors/sage.js";
import sand from "../colors/sand.js";
import sky from "../colors/sky.js";
import slate from "../colors/slate.js";
import teal from "../colors/teal.js";
import tomato from "../colors/tomato.js";
import violet from "../colors/violet.js";
import yellow from "../colors/yellow.js";

export interface IColorPalette {
  name: string;
  tokens: NonNullable<Tokens["colors"]>;
  semanticTokens: NonNullable<SemanticTokens["colors"]>;
}

export const colors: IColorPalette[] = [
  amber,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  green,
  indigo,
  iris,
  jade,
  lime,
  mauve,
  mint,
  neutral,
  olive,
  orange,
  pink,
  plum,
  purple,
  red,
  ruby,
  sage,
  sand,
  sky,
  slate,
  teal,
  tomato,
  violet,
  yellow,
];
