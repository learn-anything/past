---
title: SolidJS
---

# [SolidJS](https://www.solidjs.com/)

> Simple and performant reactivity for building user interfaces

Using Solid for all my web apps and static sites. Love how it takes all the [best parts](https://www.youtube.com/watch?v=qB5jK-KeXOs) of [React](../js-libraries/react/react.md) (component tree model with one way data flow & JSX) but [does it better](https://www.youtube.com/watch?v=UhGV8yYnvQE) due to [fine grained reactivity ](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf) & avoiding VDOM thus being [much faster than React](https://twitter.com/nikitavoloboev/status/1528479450828087299).

[Ryan Carniato](https://twitter.com/RyanCarniato) does [great YouTube videos on web/solid](https://www.youtube.com/c/RyanCarniato9/videos) ([SolidJS: Past, Present, Future](https://www.youtube.com/watch?v=dOgnQ9SuKYk) is insightful, especially part about [future focus](https://www.youtube.com/watch?v=dOgnQ9SuKYk&t=7555s)).

[Solid Start](https://github.com/solidjs/solid-start) or better [Create JD App](https://github.com/OrJDev/create-jd-app) is great starter template. Trying to [make Solid Start work/deploy on Deno easily](https://github.com/solidjs/solid-start/tree/main/packages/start-deno).

[solid-primitives/fetch](https://www.npmjs.com/package/@solid-primitives/fetch) is great alternative to [React Query](https://react-query.tanstack.com/).

[Hope UI](https://hope-ui.com/) is nice component library. [Motion One for Solid](https://motion.dev/solid/quick-start) is great for animations.

My [personal site](https://github.com/nikitavoloboev/nikitavoloboev) & [LA](https://github.com/learn-anything/learn-anything/) are OSS & built with Solid.

[Solid Dev Tools](https://github.com/thetarnav/solid-devtools) are useful.

Use [Solid URQL](https://github.com/tqwewe/solid-urql) as [GraphQL](../../../networking/graphql/index.md) client.

[Solid Native](https://github.com/tjjfvi/solid-native) is exciting. [Modular Forms](https://github.com/fabian-hiller/modular-forms) is great for forms.

[Nano Store Solid](https://github.com/nanostores/solid) is nice for state. [Solid Lib Starter](https://github.com/solidjs-community/solid-lib-starter) is great starter code.

I'm also exploring [Voby](https://github.com/vobyjs/voby) as [alternative to Solid](https://dev.to/fabiospampinato/voby-simplifications-over-solid-no-babel-no-compiler-5epg).

## OSS apps

- [CodeImage](https://github.com/riccardoperra/codeimage)
- [Solid Hacker News](https://github.com/solidjs/solid-hackernews)
- [Solid Storefront](https://github.com/zaiste/solid-storefront) - Open-source e-commerce storefront in Solid.js with TypeScript, GraphQL, URQL & Tailwind CSS.
- [Chrome Extension Boilerplate with SolidJS + Vite + TypeScript](https://github.com/fuyutarow/solid-chrome-extension-template)
- [Create JD App](https://github.com/OrJDev/create-jd-app) - SolidStart & tRPC Full-Stack TypeScript application template.
- [SolidStart SSR with @tanstack/query v5 preview using tRPC](https://github.com/AshSimmonds/solidstart-17)
- [SolidStart Notes](https://github.com/peerreynders/solid-start-notes-basic)
- [Yal](https://github.com/srsholmes/yal) - Launcher app similar to Alfred, Raycast, ScriptKit, Spotlight, and many others. ([Plugins](https://github.com/srsholmes/yal-plugins))

## Notes

- [To me the biggest difference between React and Solid is that things that can change are wrapped in signals in Solid, and in dependencies arrays in React.](https://twitter.com/fabiospampinato/status/1528537000504184834)
- [Components are rendered only once and are there pretty much to organize the code. The built-in components (Show, For) are awesome and should be used instead of following React-type patterns (multiple dynamic returns, map(), etc).](https://www.youtube.com/watch?v=Ilf34WjMBkU)
- [createResource makes a signal out of a promise](https://discord.com/channels/722131463138705510/722131463889223772/1019343273254465566)
- [Solid has builtin state management system with stores and context, so you don't need to install a third party state manager. Context is fine grained reactive on SolidJS, in React all the components are re-rendered on a provider update.](https://discord.com/channels/722131463138705510/722131463889223772/1037472137792991323)
- [Solid will never "re-render" your component/function. With Solid you will never ever think about optimizing "re-renders" It will out of the box be fully optimized.](https://twitter.com/Axibord1/status/1606106151539687425)
- [On a high level, in case it's useful, in Solid: 1. Signal tells it's parent computations to re-execute. 2. Only things like effects a memos can be re-executed. 3. In Show the condition is calculated in a memo, to account for signals changing but the result staying the same. 4. The condition memo is read inside another memo that does the branching between children and fallback props. 5. The resulting branch is resolved inside the Show, as in Solid children much be called inside their parents, in React it's kinda the other way around. As a summary basically most of Solid is just a signal that keeps track of the computations it's read in, computations (functions) that can be re-executed, calling things in the right order, and "tricks" to cache things.](https://twitter.com/fabiospampinato/status/1617107270554292224)

## Links

- [SolidJS New Docs](https://docs.solidjs.com/) ([Code](https://github.com/solidjs/solid-docs-next))
- [Nano Store Solid](https://github.com/nanostores/solid) - Tiny state manager with many atomic tree-shakable stores.
- [Solid Lib Starter](https://github.com/amoutonbrady/solid-lib-starter)
- [Solid Three, Custom Renderers, and SolidStart w/ Nikhil Saraf (2022)](https://www.youtube.com/watch?v=lsWXyyEsw7E)
- [Solid App Router](https://github.com/solidjs/solid-app-router) - Universal router for Solid inspired by Ember and React Router.
- [Let's do an AMA (2022)](https://www.youtube.com/watch?v=8_YiKUb6DW8)
- [Solid Command Palette](https://github.com/itaditya/solid-command-palette) - UI Library for Command Palette in SolidJS webapps.
- [Solid Start](https://github.com/solidjs/solid-start) - Solid's official starter.
- [A Solid option for building UIs (2022)](https://overcast.fm/+Id5U6EB5M)
- [Solid Select](https://github.com/thisbeyond/solid-select) - Select component for Solid.
- [Solid Docs Code](https://github.com/solidjs/solid-docs)
- [Solid Labels](https://github.com/LXSMNSYC/solid-labels) - Simple, reactive labels for SolidJS.
- [Solid Headless](https://github.com/LXSMNSYC/solid-headless) - Headless UI for SolidJS.
- [Streaming SolidJS: Fine-Grained Reactivity (2021)](https://www.youtube.com/watch?v=b9e7VXs_A4s)
- [solid-firebase](https://github.com/wobsoriano/solid-firebase) - Solid hooks for Firebase.
- [Solid Primitives](https://github.com/davedbase/solid-primitives)
- [solid-ui](https://github.com/solid/solid-ui) - User Interface widgets and utilities for Solid.
- [vite-plugin-solid](https://github.com/solidjs/vite-plugin-solid) - Simple integration to run solid-js with Vite.
- [Solid MultiSelect](https://github.com/DigiChanges/solid-multiselect) - Multi-select implementation for Solid.
- [Solid.js feels like what I always wanted React to be](https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/) ([HN](https://news.ycombinator.com/item?id=30508524))
- [Solid Starter Kit](https://github.com/one-aalam/solid-starter-kit)
- [Solid Styled](https://github.com/LXSMNSYC/solid-styled) - Reactive stylesheets for SolidJS.
- [Solid Search for Community Solid Server](https://github.com/ontola/solid-search-community-server) - Adds full-text search to Community Solid Server. Powered by atomic-server.
- [Blitz](https://github.com/dimensionhq/blitz) - Fast, simple and efficient state management for SolidJS apps.
- [solid-boundaries](https://github.com/everweij/solid-boundaries) - Utility to track the boundaries of html-elements in SolidJS.
- [i18next for Solid](https://github.com/mbarzda/solid-i18next)
- [Solid FLIP](https://github.com/otonashixav/solid-flip) - Lightweight transition library for Solid.
- [Solid Playground](https://playground.solidjs.com/) - Quickly discover what the solid compiler will generate from your JSX template. ([Code](https://github.com/solidjs/solid-playground))
- [solid-utils](https://github.com/amoutonbrady/solid-utils) - Ultimate companion of all your solid-js applications.
- [Solid Slider](https://github.com/davedbase/solid-slider) - Carousel/slider implementation for SolidJS.
- [SolidHack 2022](https://hack.solidjs.com/) ([Code](https://github.com/solidjs/solidhack-submissions))
- [solid-spring](https://github.com/Aslemammad/solid-spring) - Port of react-spring, for SolidJS.
- [Solid Ninja Keys](https://github.com/wobsoriano/solid-ninja-keys) - Add cmd+k interface to your solid site.
- [SolidJS plugin for Preview.js](https://github.com/fwouts/previewjs-solid-plugin)
- [Solid JSX](https://github.com/high1/solid-jsx) - Use mdx or xdm with solid-js.
- [Solid-Blocks](https://github.com/atk/solid-blocks) - UI building blocks for SolidJS.
- [Solid + Netlify Edge functions powered by Deno HN Demo](https://github.com/solidjs/solid-hackernews/tree/netlify-edge) ([Tweet](https://twitter.com/RyanCarniato/status/1516510395787218944))
- [Solid Aria](https://github.com/solidjs-community/solid-aria) - Library of high-quality primitives that help you build accessible user interfaces with SolidJS.
- [Motion One for Solid](https://motion.dev/solid/quick-start) - Combines Solid's amazing performance with declarative WAAPI animations, independent transforms, springs, stagger, and more. ([Tweet](https://twitter.com/motiondotdev/status/1520025108403863554))
- [Solid Services](https://github.com/Exelord/solid-services) - Solid.js library adding a services layer for global shared state.
- [Solid Proxies](https://github.com/Exelord/solid-proxies) - Solid.js library adding signaling to built-in non-primitives.
- [Solid DND](https://github.com/thisbeyond/solid-dnd) - Lightweight, performant, extensible drag and drop toolkit for Solid. ([Web](https://solid-dnd.com/)) ([Web Code](https://github.com/thisbeyond/solid-dnd-site))
- [Turbo Solid](https://github.com/StudioLambda/TurboSolid) - Lightweight asynchronous data management for solid.
- [Solid in 100 Seconds (2022)](https://www.youtube.com/watch?v=hw3Bx5vxKl0)
- [solid-primitives/fetch](https://www.npmjs.com/package/@solid-primitives/fetch) - Creates a primitive to support abortable HTTP requests. If any reactive request options changes, the request is aborted automatically.
- [Praises of SolidJS (2022)](https://twitter.com/andrewgreenh/status/1526908199386988544)
- [Let's Learn SolidJS (2021)](https://www.youtube.com/watch?v=ZZ-a7B761Ds)
- [Hope UI](https://github.com/fabien-ml/hope-ui) - SolidJS component library you've hoped for. ([Docs](https://hope-ui.com/docs/getting-started))
- [Solid DSL Experiments](https://github.com/solidjs-community/solid-dsl)
- [Solid Meta](https://github.com/solidjs/solid-meta) - Asynchronous SSR-ready Document Head management for Solid based on React Head.
- [Early return in Solid](https://twitter.com/Huxpro/status/1526711254928068608)
- [The Quest for ReactiveScript (2021)](https://dev.to/this-is-learning/the-quest-for-reactivescript-3ka3)
- [solid-auto-animate](https://github.com/LXSMNSYC/solid-auto-animate) - SolidJS bindings for FormKit's AutoAnimate.
- [Solid Dev Tools](https://github.com/thetarnav/solid-devtools) - Reactivity Debugger & Devtools Chrome Extension for SolidJS.
- [solid-register](https://github.com/atk/solid-register) - Solid.js execution environment for Node.js. Allows running and testing Solid.js browser code in Node.js.
- [solid-marked](https://github.com/LXSMNSYC/solid-marked) - MDX/Markdown compiler for SolidJS.
- [Solid Native](https://github.com/MrFoxPro/solid-nativescript-experiments) - NativeScript bindings for Solid.JS.
- [Solid Templates (using Vite)](https://github.com/solidjs/templates)
- [Solid Heroicons](https://github.com/amoutonbrady/solid-heroicons)
- [SolidJS - YouTube](https://www.youtube.com/channel/UCXsRnrbzIX8KHdf86PE241Q/videos)
- [Carbon Components (SolidJS Port)](https://github.com/mosheduminer/carbon-components-solid)
- [SolidJS Effector](https://community.effector.dev/core/prerelease-version-of-effector-solid-is-now-available-for-public-use-eei)
- [Solid Native](https://github.com/tjjfvi/solid-native) - Expands the Solid ecosystem to include development of native mobile applications.
- [typesafe-i18n Solid](https://github.com/ivanhofer/typesafe-i18n/tree/main/packages/adapter-solid)
- [Solid-Use](https://github.com/LXSMNSYC/solid-use) - Collection of SolidJS utilities.
- [rollup-preset-solid](https://github.com/amoutonbrady/rollup-preset-solid) - Small opinionated preset for rollup to bundle your solid libraries with rollup.
- [SolidJS: Past, Present, Future (2022)](https://www.youtube.com/watch?v=dOgnQ9SuKYk)
- [Solid JS and How its Different | Ryan Carniato (2022)](https://www.youtube.com/watch?v=O4sgwuMQns0)
- [Solid Virtual Scroll](https://github.com/Supertigerr/solid-virtual-scroll)
- [Solid Cached Resource](https://github.com/yonathan06/solid-cached-resource) - Cache Solidjs resources by key (derived from the resource source).
- [SUID](https://github.com/swordev/suid) - Port of Material-UI (MUI) built with SolidJS.
- [Solid Hotkeys](https://github.com/alekangelov/solid-hotkeys) - Hotkeys library for solid that adds only 2 event listeners.
- [How to Deploy SolidJS (2022)](https://dev.to/brittneypostma/how-to-deploy-solidjs-4hoi)
- [Solid Service API](https://github.com/solidjs/solid-service-api) - Code that powers Solid Service API on Cloudflare Workers.
- [Opinionated Vite Starter Template](https://github.com/olgam4/bat)
- [Solid Custom Scrollbars](https://github.com/diragb/solid-custom-scrollbars)
- [SolidJS: Reactivity Unchained – Ryan Carniato (2022)](https://www.youtube.com/watch?v=UhGV8yYnvQE)
- [JavaScript UI Compilers: Comparing Svelte and Solid (2019)](https://ryansolid.medium.com/javascript-ui-compilers-comparing-svelte-and-solid-cbcba2120cea)
- [Thinking Granular: How is SolidJS so Performant? (2021)](https://dev.to/ryansolid/thinking-granular-how-is-solidjs-so-performant-4g37)
- [Solid Valtio](https://github.com/wobsoriano/solid-valtio) - State management in Solid with valtio.
- [ReScript SolidJS](https://github.com/Fattafatta/rescript-solidjs)
- [Solid Cache](https://github.com/LXSMNSYC/solid-cache) - Resource caching in SolidJS.
- [SolidJS Package Monorepo Starter](https://github.com/solidjs-community/monorepo-starter)
- [Nested Routing, Parallelized Data Fetching, and SolidJS w/ Ryan Turnquist (2022)](https://www.youtube.com/watch?v=-TeXU9UZ_4w)
- [Solid Floating UI](https://github.com/LXSMNSYC/solid-floating-ui)
- [Solid Future Working Group](https://github.com/solidjs/solid-workgroup/discussions)
- [Rigidity](https://github.com/LXSMNSYC/rigidity) - SSR framework for SolidJS. ([Tweet](https://twitter.com/lxsmnsyc/status/1552312144951005185))
- [Rallax](https://github.com/thetarnav/rallax) - Parallax library for SolidJS.
- [Solid-Dexie](https://github.com/faassen/solid-dexie) - Dexie integration for Solid.
- [SolidJS bindings for atomic-router](https://github.com/atomic-router/solid)
- [Introducing SolidStart w/ Nikhil Saraf (2022)](https://www.youtube.com/watch?v=eAwuPvRXNdY)
- [Solid Toast](https://github.com/ardeora/solid-toast) - Customizable Toast Notifications for SolidJS.
- [Solid-Query](https://github.com/ardeora/solid-query) - Tanstack Query Adapter For Solid JS.
- [Solid Jest](https://github.com/solidjs/solid-jest) - Jest preset for SolidJS.
- [Solid Testing Library](https://github.com/solidjs/solid-testing-library) - Simple and complete Solid testing utilities that encourage good testing practices.
- [Solid-Pebble](https://github.com/lxsmnsyc/solid-pebble) - State management library for SolidJS.
- [Streaming SolidJS - First look at Astro (2022)](https://www.youtube.com/watch?v=UPhx3OxUH0w)
- [Solid-React](https://github.com/nanxiaobei/solid-react) - Hooks for a SolidJS-like React.
- [FAQ: When do I use a Solid Signal versus a Store? (2022)](https://www.youtube.com/watch?v=GEu8hc3RKpw)
- [Solid Test Recorder](https://github.com/chris-czopp/solid-test-recorder) - Automated Chrome extension to generate unit/integration tests for SolidJS. ([Demo](https://www.youtube.com/watch?v=t6Gn5-M9Zg8))
- [solid-optimizer](https://github.com/lxsmnsyc/solid-optimizer) - Compile-time optimizer for SolidJS.
- [Voby: Simplifications Over Solid - No Babel, No Compiler (2022)](https://dev.to/fabiospampinato/voby-simplifications-over-solid-no-babel-no-compiler-5epg)
- [SolidJS - World beyond components (2022)](https://www.youtube.com/watch?v=zE8PDM_7xoQ&t=5253s)
- [Solid-Form-Handler](https://github.com/webblocksapp/solid-form-handler) - Lightweight library for building form components and validating forms with them.
- [Solid-Router-Stack](https://github.com/ymzuiku/solid-router-stack) - Solid router use stack like native application.
- [Solid-Error-Overlay](https://github.com/lxsmnsyc/solid-error-overlay) - Unstyled, dev error overlays for SolidJS.
- [Capacitor Templates for SolidJS (and Vite)](https://github.com/ionic-team/capacitor-solidjs-templates)
- [Solid Windowed](https://github.com/titoBouzout/solid-windowed) - Given a list of items, only render what's visible on the screen while allowing scrolling the whole list.
- [Solid Styled Components](https://github.com/solidjs/solid-styled-components) - 1kb Styled Components library for Solid.
- [SolidStart, Server Functions, and the future of Islands (2022)](https://viteconf.org/2022/replay/solid)
- [Building SolidJS v1.6 (2022)](https://www.youtube.com/watch?v=adXqweWZcNA)
- [Workaround for the '100vh' issue in mobile browsers in Solid](https://github.com/TiagoCavalcante/solidjs-div-100vh)
- [Reactivity with SolidJS course](https://github.com/ryansolid/solid-course)
- [Reatom-Solid](https://github.com/skrylnikov/reatom-solid) - Solid bindings package for Reatom store.
- [SolidJS tRPC](https://github.com/OrJDev/solid-trpc) - tRPC Adapter For SolidJS Using Tanstack Solid Query.
- [Solid Future Architecture: Hybrid Routing + Minimal Hydration](https://github.com/solidjs/solid-start/issues/400)
- [Client-side Routing without the JavaScript (2022)](https://dev.to/this-is-learning/client-side-routing-without-the-javascript-3k1i)
- [Solid-Stripe](https://github.com/wobsoriano/solid-stripe)
- [Solid URQL](https://github.com/tqwewe/solid-urql)
- [Finally, the start of something solid? (2022)](https://www.youtube.com/watch?v=DVWu2b7mvFg)
- [Made in Solid](https://github.com/solidjs-community/made-in-solid) - What have people built with it?
- [Solid Start Auth](https://github.com/schweden1997/solid-auth) - Extensible library to support different authentication methods.
- [First look at Solid Start](https://dev.to/ajcwebdev/a-first-look-at-solidstart-2hm7)
- [Simplifying reactivity with solidJS - Dan Jutan (2022)](https://www.youtube.com/watch?v=qB5jK-KeXOs)
- [Kobalte](https://github.com/fabien-ml/kobalte) - UI toolkit for building accessible web apps and design systems with SolidJS.
- [Modular Forms](https://github.com/fabian-hiller/modular-forms) - Modular form library for SolidJS.
- [Babel Plugin Solid Undestructure](https://github.com/orenelbaum/babel-plugin-solid-undestructure) - Babel plugin allows you to destructure your props in your Solid components without losing reactivity.
- [Solid Icons](https://github.com/x64Bits/solid-icons) - Modern solution for use icons on SolidJS.
- [Storeon Solid](https://github.com/storeon/solidjs)
- [Solid-Popper](https://github.com/lxsmnsyc/solid-popper)
- [Solid-Simple-Table](https://github.com/aminya/solid-simple-table) - Blazing fast reactive table component that gives you freedom.
- [Solid-Markdown](https://github.com/andi23rosca/solid-markdown) - Render Markdown as Solid components.
- [Doom Reactive State](https://github.com/AlessioCoser/doom-reactive-state) - Super simple reactive state management with fine-grained reactive DOM elements.
- [Jundao Design](https://github.com/jundaoapp/design) - Enterprise-class fast and modern SolidJS UI library.
- [Sofine UI Solid design library](https://github.com/sofine-ui/sofine-ui)
- [Solid-NanoStores](https://github.com/ctx-core/solid-nanostores)
- [Solid Jotai](https://github.com/wobsoriano/solid-jotai) - Primitive and flexible state management for Solid based on Jotai.
- [Solid Mapbox](https://github.com/modular-mapper/solid-mapbox)
- [SolidJS Uppy](https://github.com/lxsmnsyc/solid-uppy)
- [Solid i18n](https://github.com/SanichKotikov/solid-i18n)
- [Solid Plyr](https://github.com/git-ced/solid-plyr) - Simple HTML5, YouTube, and Vimeo player (Plyr) for SolidJS.
- [Solid Supabase](https://github.com/wobsoriano/solid-supabase) - Simple wrapper around Supabase.js to enable usage within Solid.
- [Storybook Solid](https://github.com/elite174/storybook-solid-js)
- [SolidStart implementation of NextAuth](https://github.com/OrJDev/auth-solid)
- [Fine-grained reactivity - Deep dive into SolidJS](https://github.com/everweij/solidjs-fine-grained-reactivity)
- [create-t3-app gone solid: tRPC, zod, prisma, tailwindcss, unocss; based on SolidStart (2022)](https://www.youtube.com/watch?v=S_czm-Oytns)
- [Solid Auth](https://github.com/OrJDev/solid-auth) - Authentication for Solid & SolidStart.
- [decorock](https://github.com/ddPn08/decorock) - Styled component library for solid.
- [Solid tiptap](https://github.com/lxsmnsyc/solid-tiptap)
- [A React Developer's First Take on Solid (2022)](https://jakelazaroff.com/words/a-react-developers-first-take-on-solid/)
- [Converting a React Component to SolidJS (2022)](https://dev.to/mbarzeev/converting-a-react-component-to-solidjs-5bgj)
- [Testing a SolidJS Component Using Vitest (2022)](https://dev.to/mbarzeev/update-testing-a-solidjs-component-using-vitest-1pj9)
- [Taking SolidJS Dev-Tools for a Spin (2022)](https://dev.to/mbarzeev/taking-solidjs-dev-tools-for-a-spin-44m2)
- [Using SolidJS Dev-Tools Locator Feature (2022)](https://dev.to/mbarzeev/using-solidjs-dev-tools-locator-feature-1445)
- [Convert Your SolidJS Component To TypeScript (2022)](https://dev.to/mbarzeev/convert-your-solidjs-component-to-typescript-1opn)
- [SolidJS Crash Course - Building a REST API Client (2023)](https://dev.to/codewithahsan/solidjs-crash-course-building-a-rest-api-client-part-1-57ee)
- [Solid Query Dev Tools](https://github.com/ardeora/solid-query-devtools)
- [statesolid](https://github.com/riccardoperra/statesolid) - State management library built on the top of SolidJS reactivity.
- [Solid Wrap Balancer](https://github.com/nirtamir2/solid-wrap-balancer) - Simple Solid Component That Makes Titles More Readable.
- [Preset for building your SolidJS package with tsup](https://github.com/solidjs-community/tsup-preset-solid)
- [Solid Navigation](https://github.com/ammarahm-ed/solid-navigation) - Native navigation for SolidJS mobile apps built with NativeScript.
- [Solid Rewind](https://solidrewind.io/) - Redux-style time-travel debugger and component-tree visualizer for apps made with SolidJS.
- [A Comprehensive Guide to SolidJS Stores](https://raqueebuddinaziz.com/blog/comprehensive-guide-to-solid-js-stores/)
- [SolidJS in React? Reconciling Disparate Worlds (2023)](https://www.youtube.com/watch?v=p9pwHyM5Z98)
- [Esbuild Solid Plugin](https://github.com/amoutonbrady/esbuild-plugin-solid) - Plugin to compile solid-js jsx components with esbuild.
- [Demystifying SolidJS' JSX (2023)](https://www.youtube.com/watch?v=5du6jBlryIc)
- [Learn SolidJS Basics in 4 minutes (2023)](https://www.youtube.com/watch?v=8cAEk4mH3pk)
- [Solid Material](https://github.com/ceopaludetto/solid-material) - High quality components built with Tailwind and Kobalte following Material You guidelines.
- [Lexical Solid](https://github.com/mosheduminer/lexical-solid) - Solid port for Lexical text editing component.
- [Solid Mason](https://github.com/lxsmnsyc/solid-mason) - Masonry layout for SolidJS.
- [Solid Refresh](https://github.com/solidjs/solid-refresh) - HMR for Solid for various bundlers.
- [Using Solid Start with GitHub pages (2023)](https://dev.to/lexlohr/using-solid-start-with-github-pages-3iok)
- [HTML To SolidJSX](https://solidjs-community.github.io/html-to-solidjsx/) ([Code](https://github.com/solidjs-community/html-to-solidjsx))
- [Vite Plugin Solid SVG](https://github.com/jfgodoy/vite-plugin-solid-svg) - Vite plugin to Import SVG files as Solid.js Components.
- [Data Fetching in SolidJS: How to Use createResource (2023)](https://www.youtube.com/watch?v=A5_58oenCqk)
- [pRPC](https://github.com/OrJDev/prpc) - Write simple and interactive SolidStart code that will run on the server but will easily be used on the client. ([Tweet](https://twitter.com/OrJDevv/status/1629142063315910657?s=20))
- [Solid Rollup AWS Lambda](https://github.com/Bersaelor/solid-rollup-aws-lambda)
- [Solid Liveblocks](https://github.com/tmns/solid-liveblocks) - Solid hooks and providers to use Liveblocks declaratively.
- [Solid Flow](https://github.com/miguelsalesvieira/solid-flow) - Component for building interactive flow-based diagrams and graphs.
- [3 Patterns to Write Declarative, More Readable SolidJS Components (2023)](https://raqueebuddinaziz.com/blog/3-patterns-to-write-better-and-more-readable-solidjs-components/)
- [SolidJS - The Hard Parts w/ Dan Jutan (2023)](https://www.youtube.com/watch?v=E3jYGTB50LE)
- [Signals in TypeScript: The Road to Solid v1.7 (2023)](https://www.youtube.com/watch?v=2fW6JaJHoCE)
- [Strict Mode in SolidJS?! (2023)](https://www.youtube.com/watch?v=2bkuEIa3Nwk)
- [Solid-Presence-Signal](https://github.com/EthanStandel/solid-presence-signal) - Animate the presence of an element. ([Reddit](https://www.reddit.com/r/solidjs/comments/12ft18u/i_made_a_lightweight_presence_animation_library/))
- [Solid Transition Group](https://github.com/solidjs-community/solid-transition-group) - SolidJS components for applying animations when children elements enter or leave the DOM.
- [Solid Next Docs](https://github.com/solidjs/solid-docs-next-next)
- [SolidStart Adapter For AuthJS](https://github.com/OrJDev/solid-auth)
- [Pigment](https://github.com/kobaltedev/pigment) - Open source design system for building SolidJS application.
- [Solid Shadcn UI](https://github.com/sek-consulting/solid-ui-components)
