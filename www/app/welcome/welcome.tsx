import { css } from "styled-system/css";

export function Welcome() {
  return (
    <main className={css({ bg: "red.4", color: "red.11" })}>Hello!</main>
  );
}