import { Magic } from "magic-sdk";

const magic =
  typeof window !== "undefined" && new Magic("pk_live_AC3FEC6614ADA1C9");

export default magic;
