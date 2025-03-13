import { Show, createEffect, JSXElement } from "solid-js"
import { ui } from "@la/shared"
import clsx from "clsx"
import { css } from "solid-styled"

interface Props {
  onClick: () => void
  children: JSXElement
  active?: boolean
  loading?: boolean
}

export function FancyButton(props: Props) {
  createEffect(() => {
    // const CONTROLS = document.querySelectorAll("button")
    // @ts-ignore
    const UPDATE = ({ x, y }) => {
      const ELEMENT = document.elementFromPoint(x, y)
      if (ELEMENT) {
        const CONTROL = ELEMENT.closest(".control")
        if (CONTROL) {
          const BOUNDS = CONTROL.getBoundingClientRect()
          // @ts-ignore
          CONTROL.style.setProperty("--rx", (x - BOUNDS.x) / BOUNDS.width)
          // @ts-ignore
          CONTROL.style.setProperty("--x", (x - BOUNDS.x) / BOUNDS.width)
          // @ts-ignore
          CONTROL.style.setProperty("--y", (y - BOUNDS.y) / BOUNDS.height)
        }
      }
    }

    document.body.addEventListener("pointermove", UPDATE)
  })

  css`
    button {
      --radius: 4px;
      --text-padding: 4px 8px;
      --border: 1px;
      --padding: 1px;
      border-radius: var(--radius);
      border: 0;
      background: hsl(0 0% 90%);
      box-shadow:
        inset 0 1px 0px 0px hsl(0 0% 100% / 0.5),
        inset 0 -1px 0px 0px hsl(0 0% 0% / 0.5);

      font-family: sans-serif, system-ui;

      font-weight: 300;
      position: relative;
      display: grid;
      place-items: center;
      padding: var(--padding);
      border: var(--border) solid hsl(0 0% 80%);
      transform: translate(
        calc(var(--active, 0) * -2px),
        calc(var(--active, 0) * 2px)
      );
      transition: transform 0.1s;
      color: hsl(0 0% 20%);
    }

    button:is(:hover, :focus-visible) {
      --hover: 1;
    }
    #activeControl {
      --hover: 1;
    }
    button:active {
      --active: 1;
    }

    button:before {
      content: "";
      position: absolute;
      inset: 0px;

      border-radius: calc(var(--radius) - var(--border));

      background: hsl(0 0% 100% / calc(1 - var(--hover, 0) * 0.25));
      background: grey;
      background: conic-gradient(
        from calc(var(--rx, 0) * 180deg) at calc(var(--x, 0) * 100%)
          calc(var(--y, 0) * 100%),
        hsl(10 90% 70%),
        hsl(140 80% 70%),
        hsl(320 80% 70%),
        hsl(210 80% 70%),
        hsl(10 80% 70%)
      );
      filter: saturate(0.7);
      opacity: var(--hover, 0);
      transition: opacity 0.2s;
    }
    .backdrop {
      position: relative;
      width: 100%;
      height: 100%;
      background: hsl(0 0% 98% / 0.2);
      border-radius: calc(var(--radius) - var(--padding));
      display: block;
      grid-column: 1;
      grid-row: 1;
      backdrop-filter: blur(20px) brightness(1.5);
    }
    .text {
      padding: var(--text-padding);
      grid-row: 1;
      grid-column: 1;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
    }
    @media (prefers-color-scheme: dark) {
      button {
        border-color: hsl(0 0% 20%);
        color: hsl(0 0% 98%);
        background: hsl(0 0% 10%);
      }
      button .backdrop {
        background: hsl(0 0% 10% / 0.7);
        backdrop-filter: blur(20px) brightness(1.2) saturate(1);
      }
      button:after {
        background: hsl(0 0% 10% / calc(1 - var(--hover, 0) * 0.25));
      }
    }
  `

  return (
    <button
      onClick={() => {
        if (props.loading) return
        props.onClick()
      }}
      id={props.active ? "activeControl" : ""}
      class={clsx(
        "control h-full w-full",
        props.active && "transition-all border-[0.5px] border-black"
      )}
    >
      <span class="backdrop"></span>
      <span class="text">
        <Show when={props.loading} fallback={props.children}>
          <ui.Icon width="16" height="16" name="Loader" border="white" />
        </Show>
      </span>
    </button>
  )
}
