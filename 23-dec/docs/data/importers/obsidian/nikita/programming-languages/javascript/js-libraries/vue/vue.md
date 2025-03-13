---
title: Vue.js
---

# [Vue.js](https://vuejs.org)

[Vitesome](https://github.com/alvarosabu/vitesome) is a nice template. [Villus](https://github.com/logaretm/villus) is nice Vue GraphQL client. [tRPC-Nuxt](https://github.com/wobsoriano/trpc-nuxt) seems pretty great too.

[Nuxt](https://github.com/nuxt/framework) seems nice. [Anu](https://github.com/jd-solanki/anu) is great Vue component library.

[Elk](https://github.com/elk-zone/elk) has nice code.

## Built with Vue

- [Nuxt Todo List on the Edge](https://github.com/Atinux/nuxt-todos-edge) - Todos application with user authentication, SSR and SQLite, working on the edge.
- [Nuxt 3 + Vuetify 3 Starter](https://github.com/BayBreezy/nuxt3-vuetify3-starter)
- [Alpine](https://github.com/nuxt-themes/alpine) - Minimalist blog theme, powered by Nuxt & Markdown.
- [Content Wind](https://github.com/Atinux/content-wind) - Lightweight Nuxt theme to build a Markdown driven website. Powered by Nuxt Content, TailwindCSS and Iconify.
- [Nuxt 3 Minimal Starter](https://github.com/Dawntraoz-Storyblok/storyblok-nuxt-jamstack-blog)
- [Nuxt 3 PWA](https://github.com/kevinmarrec/nuxt-pwa-module) - Zero config PWA solution for Nuxt 3.
- [Nuxt 3 Minimal Starter with ESLint](https://github.com/Diizzayy/n3-starter)
- [Nuxt.js Hacker News](https://github.com/nuxt/hackernews)
- [Travel App, Native-like Page Transitions](https://github.com/sdras/page-transitions-travelapp)
- [Vue Advanced Chat](https://github.com/antoine92190/vue-advanced-chat) - Beautiful chat rooms component made with Vue.js.
- [Official Vue.js Blog](https://github.com/vuejs/blog)
- [Discord Clone](https://github.com/SOKHUONG/discord-clone)
- [Vue Minesweeper](https://github.com/antfu/vue-minesweeper)
- [VueTube](https://github.com/Frontesque/VueTube) - Open source YouTube client.
- [VuePress Home Page](https://github.com/imfing/vuepress-homepage) - Elegant & friendly homepage (bio, tech portfolio, resume, doc...) template with Markdown and VuePress.
- [Nuxt 3 + Medium (n3dium)](https://github.com/danielroe/n3dium)
- [Avantage](https://github.com/jurassicjs/avantage) - Accelerate building full stack node applications with Nuxt 3.
- [Kanri](https://github.com/trobonox/kanri) - Cross-platform, offline-first Kanban board desktop application with a focus on simplicity and user experience.
- [Marchant Web](https://github.com/marchantweb/Marchant-Web) - Nuxt 3 project that centers around a WebGL visualization that ebs and flows into each page.

## Code

```html
<!-- change theme conditionally, plus show how to apply styles conditionally -->
<script setup lang="ts">
  const theme = ref("dark")

  const changeTheme = () => {
    if (theme.value === "dark") theme.value = "light"
    else theme.value = "dark"
  }
</script>

<template>
  <main
    id="Main"
    :class="
      theme === 'dark'
        ? 'bg-neutral-900 text-white relative'
        : 'bg-white text-black relative'
    "
  >
    <div
      class="dark_mode z-10 fixed top-5 right-5 cursor-pointer"
      @click="changeTheme"
    />
  </main>
</template>
```

## Notes

- [Enable custom formatters in Chrome DevTools when debugging Vue 3. The experience is on another level.](https://twitter.com/haoqunjiang/status/1442056332463333387)
- [vdom and reactive are not opposite paradigms. They are apples and oranges. Vue is vdom _and_ reactive. You can take Vue's reactive parts and pair it with other rendering mechanisms, e.g. `lit-html` We can also theoretically compile Vue templates into Solid-like output, while still using Vue's own reactive system. Or still using the same reactive system, but just walk the DOM and make it reactive.](https://twitter.com/youyuxi/status/1528531307604545536)

## Links

- [Plans for the Next Iteration of Vue.js (2018)](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf)
- [Vue RFCs](https://github.com/vuejs/rfcs) - RFCs for substantial changes / feature additions to Vue core.
- [Vue's Darkest Day (2019)](https://dev.to/danielelkington/vue-s-darkest-day-3fgh#0)
- [vue-next](https://github.com/vuejs/vue-next) - V3 rewrite of Vue.js
- [Design Principles of Vue 3.0 by Evan You (2019)](https://www.youtube.com/watch?v=WLpLYhnGqPA)
- [Vuex](https://github.com/vuejs/vuex) - Centralized State Management for Vue.js
- [Build a DEV.TO clone with Nuxt new fetch (2020)](https://nuxtjs.org/blog/build-dev-to-clone-with-nuxt-new-fetch)
- [Zipe](https://github.com/pikax/zipe) - Vite + SSR.
- [Building a real-time patient monitoring system with Go and Vue](https://kasvith.me/posts/how-we-created-a-realtime-patient-monitoring-system-with-go-and-vue/) ([HN](https://news.ycombinator.com/item?id=23051242))
- [Just in time compilation technique for server-side rendering](https://github.com/SmallComfort/vue-ssr-jit)
- [VueUse](https://github.com/vueuse/vueuse) - Collection of essential Vue Composition Utilities. ([Web](https://vueuse.js.org/)) ([GitHub](https://github.com/vueuse))
- [Starter for Vite + VueUse + TypeScript](https://github.com/antfu/vite-vueuse-starter)
- [The process: Making Vue 3 (2020)](https://increment.com/frontend/making-vue-3/)
- [30 Days of Vue](https://github.com/fullstackio/30-days-of-vue)
- [Vue Stripe Checkout](https://github.com/jofftiquez/vue-stripe-checkout)
- [Awesome Vue 3](https://github.com/blacksonic/awesome-vue-3)
- [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) - Isolated Vue component development environment with a living style guide.
- [Trying Vue.js for the First Time (2020)](https://www.youtube.com/watch?v=3OhLUYNw0TI)
- [Vue.js 3 (2020)](https://github.com/vuejs/vue-next/releases/tag/v3.0.0) ([HN](https://news.ycombinator.com/item?id=24518295)) ([Video](https://www.youtube.com/watch?v=Vp5ANvd88x0))
- [vue-composable](https://github.com/pikax/vue-composable) - Vue composition-api composable components. i18n, validation, pagination, fetch, etc. +50 different composables. ([Web](https://pikax.me/vue-composable/))
- [Ream](https://github.com/ream/ream) - Full-stack framework for building web apps, powered by Vue 3.
- [VuePress](https://github.com/vuejs/vuepress) - Minimalistic Vue-powered static site generator. ([Awesome VuePress](https://github.com/vuepress/awesome-vuepress))
- [VuePress 2](https://github.com/vuepress/vuepress-next) ([Web](https://v2.vuepress.vuejs.org/))
- [Using State Machines in Vue.js with XState (2020)](https://frontstuff.io/using-state-machines-in-vuejs-with-xstate)
- [swrv](https://github.com/Kong/swrv) - Stale-while-revalidate data fetching for Vue.
- [What Vue.js Does Better Than React (2020)](https://hswolff.com/blog/what-vuejs-does-better-than-react/)
- [Things I Don’t Like about Vue.js (as a React engineer) (2020)](https://hswolff.com/blog/things-i-dont-like-about-vuejs-as-a-react-engineer/)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) - Official ESLint plugin for Vue.
- [Equal UI](https://quatrochan.github.io/Equal/) - Vue 3 components library with 30+ components based on TypeScript and personal design system. ([Code](https://github.com/quatrochan/Equal))
- [Element Plus](https://github.com/element-plus/element-plus) - Vue.js 3.0 UI Library.
- [vue-gtag](https://github.com/MatteoGabriele/vue-gtag) - Global Site Tag plugin for Vue.
- [Vue Telemetry](https://vuetelemetry.com/) - Discover websites made with Nuxt.js.
- [Vitesse](https://github.com/antfu/vitesse) - Opinionated Vite Starter Template.
- [Vuejs Amsterdam](https://vuejs.amsterdam/) - Online Conference.
- [Volar](https://github.com/johnsoncodehk/volar) - Faster and more accurate TypeScript support of Vue 3.
- [Vue Essentials Cheatsheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)
- [Vue Mastery](https://www.vuemastery.com/) - Ultimate Learning Resource for Vue.js Developers.
- [vite-ssg](https://github.com/antfu/vite-ssg) - Server-side generation for Vite.
- [VueDX](https://github.com/znck/vue-developer-experience) - Collection of tools for Vue ecosystem.
- [Vue Chemistry](https://github.com/antfu/vue-chemistry) - Reactified JavaScript functions for Vue.
- [vueuse/head](https://github.com/vueuse/head) - Document head manager for Vue 3. SSR ready.
- [Vue Native](https://vue-native.io/) - Framework to build cross platform native mobile apps using JavaScript. ([Code](https://github.com/GeekyAnts/vue-native-core)) ([HN](https://news.ycombinator.com/item?id=25927184))
- [Nuxt Build Optimizations](https://github.com/loonpwn/nuxt-build-optimisations) - Nuxt.js module to automatically make your builds faster.
- [Vite Experience with Nuxt 2](https://github.com/nuxt/vite)
- [The Ultimate Nuxt API Setup (2020)](https://hire.jonasgalvez.com.br/2020/feb/22/the-ultimate-nuxt-api-setup/)
- [Awesome Nuxt.js](https://github.com/nuxt-community/awesome-nuxt)
- [vue-dts-gen](https://github.com/egoist/vue-dts-gen) - Generate `d.ts` from `.vue` files.
- [Windi CSS for Nuxt.js](https://github.com/windicss/nuxt-windicss-module)
- [Create Nuxt App](https://github.com/nuxt/create-nuxt-app) - Create a Nuxt.js project in seconds.
- [Pinia](https://github.com/posva/pinia) - Intuitive, type safe and flexible Store for Vue. ([Docs](https://pinia.esm.dev/introduction.html))
- [Nuxt Speedkit](https://github.com/GrabarzUndPartner/nuxt-speedkit) - Module for NuxtJS. Takes over the lighthouse performance optimization of your generated website. ([Docs](https://nuxt-speedkit.grabarzundpartner.dev/))
- [Typed Vuex](https://github.com/danielroe/typed-vuex) - Strongly-typed store accessor for vanilla Vuex.
- [Composable Vue - Anthony Fu (2021)](https://www.youtube.com/watch?v=IMJjP6edHd0)
- [Vue Demi](https://github.com/vueuse/vue-demi) - Creates Universal Library for Vue 2 & 3.
- [Scaling Your Vue Components for Mid-Large Size Apps (2021)](https://harlanzw.com/blog/scale-your-vue-components/)
- [Building a Vue Auto Component Importer (2020)](https://harlanzw.com/blog/vue-automatic-component-imports/)
- [Naive UI](https://github.com/TuSimple/naive-ui) - Vue 3 Component Library. ([Web](https://www.naiveui.com/en-US/os-theme))
- [Petite-Vue](https://github.com/vuejs/petite-vue) - 5kb subset of Vue optimized for progressive enhancement. ([HN](https://news.ycombinator.com/item?id=27719290))
- [vue-to-react](https://github.com/egoist/vue-to-react) - Turn a Vue component into a React component.
- [Oruga](https://github.com/oruga-ui/oruga) - Lightweight library of UI components for Vue.js without CSS framework dependency. ([Web](https://oruga.io/))
- [Vue Konva](https://github.com/konvajs/vue-konva) - JavaScript library for drawing complex canvas graphics using Vue.
- [Vue Query](https://github.com/DamianOsipiuk/vue-query) - Hooks for fetching, caching and updating asynchronous data in Vue.
- [Vant](https://github.com/youzan/vant) - Mobile UI Components built on Vue.
- [Nuxt](https://nuxtjs.org/) - Hybrid Vue Framework. ([Code](https://github.com/nuxt/framework)) ([Nuxt 3 Public Beta Launch with Q&A](https://www.youtube.com/watch?v=kXHuaCNfYEY)) ([Docs](https://v3.nuxtjs.org/getting-started/quick-start))
- [iles](https://github.com/ElMassimo/iles) - Islands of interactivity with Vue in Vite.js.
- [Nuxt 3 Starter](https://github.com/productfrontenddeveloper/nuxt3-app) - Nuxt3, Tailwindcss, Sass, Headless UI, Vue.
- [Vue Bleeding Edge](https://github.com/aldy505/vue-bleeding-edge) - Aiming to simulate Nuxt 3 without using Nuxt.
- [Vue 3 + Vite template](https://github.com/reinink/tailwindui-modal-example)
- [Is Nuxt 3 ready?](https://isnuxt3ready.owln.ai/) ([Code](https://github.com/owlnai/isnuxt3ready))
- [Async with Composition API (2021)](https://antfu.me/posts/async-with-composition-api)
- [Nuxt 3 Minimal Starter](https://github.com/kenny-io/Nuxt3-Tailwind-Supabase-Demo) - Uses Tailwind/Supabase.
- [Arco Design Vue](https://github.com/arco-design/arco-design-vue)
- [nuxt3-supabase](https://github.com/wobsoriano/nuxt3-supabase) - Nuxt 3 module and composables for Supabase.
- [Vitesse for Nuxt 3](https://github.com/antfu/vitesse-nuxt3)
- [Nano Stores Vue](https://github.com/nanostores/vue) - Vue integration for Nano Stores, a tiny state manager with many atomic tree-shakable stores.
- [Moon](https://github.com/ulissesferreira/moon) - Lightweight Vue 3 component library.
- [Vue Stripe.js](https://github.com/ectoflow/vue-stripe-js) - Vue 3 components for Stripe.js.
- [Vuestic UI](https://vuestic.dev/) - Vue.js 3.0 UI Framework. ([Code](https://github.com/epicmaxco/vuestic-ui))
- [Explore Nuxt Modules](https://modules.nuxtjs.org/) ([Code](https://github.com/nuxt/modules))
- [Vue 3 Spring](https://github.com/ismail9k/vue3-spring) - Spring-physics based animation library, and more.
- [Things you wish Vue docs explained better (2021)](https://twitter.com/youyuxi/status/1466065644487528449)
- [Create a GraphQL Powered Vue 3 Application (2021)](https://egghead.io/courses/create-a-graphql-powered-vue-3-application-8152749d)
- [nuxt-delay-hydration](https://github.com/harlan-zw/nuxt-delay-hydration) - Improve your Nuxt.js Google Lighthouse score by delaying hydration.
- [Harlem](https://github.com/andrewcourtice/harlem) - Simple, unopinionated, lightweight and extensible state management for Vue 3. ([Docs](https://harlemjs.com/guide/introduction/getting-started.html#installation))
- [Vuetiful](https://github.com/andrewcourtice/vuetiful) - Component framework written on top of the Vue reactive library.
- [voe](https://github.com/yisar/voe) - 3kb subset of Vue optimized for progressive enhancement.
- [vue-typegen](https://github.com/Akryum/vue-typegen) - Generate types for TypeScript Vue components libraries.
- [VueJS Interview Questions](https://github.com/sudheerj/vuejs-interview-questions)
- [Vue Components as Custom Elements (2021)](https://maximomussini.com/posts/vue-custom-elements/)
- [Typed Router for Nuxt 3](https://github.com/victorgarciaesgi/nuxt-typed-router)
- [Vurian Wizard](https://github.com/mayashavin/vurian-wizard) - Wizard Vue component on Vue 3 and state machine.
- [nuxtjs/partytown](https://github.com/nuxt-community/partytown-module) - Partytown integration for Nuxt.
- [Lodash for Nuxt](https://github.com/cipami/nuxt-lodash)
- [Vue 3 as the New Default (2022)](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html) ([HN](https://news.ycombinator.com/item?id=30251115))
- [FormKit](https://github.com/formkit/formkit) - Form authoring framework for Vue developers. ([Web](https://formkit.com/)) ([HN](https://news.ycombinator.com/item?id=31367543))
- [TSConfigs for Vue projects to extend](https://github.com/vuejs/tsconfig)
- [Algolia module for Nuxt](https://github.com/nuxt-community/algolia-module)
- [Nuxt Starter Templates](https://github.com/nuxt/starter) - Quickly get started with a minimal Nuxt starter template.
- [Nuxt Supabase](https://github.com/larbish/supabase-module) - Supabase module for Nuxt.
- [Nuxt Strapi](https://github.com/nuxt-community/strapi-module) - Strapi Module for Nuxt.
- [vue-bind-once](https://github.com/danielroe/vue-bind-once) - Tiny, SSR-safe directive for binding random data to an element.
- [Nuxt3 + URQL + SSR](https://github.com/bicouy0/nuxt3-urql)
- [Nuxt 3 Starter](https://github.com/xiaoluoboding/nuxt3-starter) - Better Nuxt 3 starter template.
- [nuxt-gql](https://github.com/Diizzayy/nuxt-gql) - Minimal GraphQL Client + Code Generation for Nuxt 3.
- [Vue Use Motion](https://github.com/vueuse/motion) - Vue Composables putting your components in motion.
- [Vue Router](https://github.com/vuejs/router)
- [Short introduction into Vue](https://vue-intro-workshop.vercel.app/1) ([Code](https://github.com/smakosh/Vue-intro-workshop))
- [Pinia Plugin Persist](https://github.com/Seb-L/pinia-plugin-persist) - Persist pinia state data in sessionStorage or other storages.
- [Inkline](https://www.inkline.io/) - Vue.js UI UX DX Library. ([Code](https://github.com/inkline/inkline))
- [Islands Architecture in Vue with Máximo Mussini (2021)](https://pca.st/gtrkm8oc)
- [nuxt-directus](https://github.com/Intevel/nuxt-directus) - Easily connect your Nuxt3 application to your directus server.
- [Easily integrate Firebase into your Nuxt project](https://github.com/nuxt-community/firebase-module)
- [nuxt-feed-module](https://github.com/maciejpedzich/nuxt-feed-module) - Nuxt 3 compatible module for generating RSS feeds.
- [Vue Composable Starter](https://github.com/Tahul/vue-composable-starter) - Minimalist starting point for your next Vue 3 composable.
- [Blitzar](https://github.com/CyCraft/blitzar) - Generate Vue Forms and Data-tables fast with a simple JSON-like syntax.
- [Magnetar](https://github.com/CyCraft/magnetar) - Framework-agnostic syncing solution that auto-connects any DB/API with your local data store and has optimistic-UI built in.
- [Quasar Framework](https://github.com/quasarframework/quasar) - Build high-performance VueJS user interfaces in record time. ([Web](https://quasar.dev/))
- [unplugin-vue-define-options](https://github.com/sxzz/unplugin-vue-define-options) - Introduce a macro in script setup, defineOptions, to use Options API in script setup.
- [Veaury](https://github.com/devilwjp/veaury) - Use React in Vue3 and Vue3 in React, And as perfect as possible.
- [Vue Starport](https://github.com/antfu/vue-starport) - Shared component across routes with animations.
- [v-shared-element](https://github.com/justintaddei/v-shared-element) - Declarative shared-element transitions for Vue.js.
- [Vite Plugin Vue](https://github.com/underfin/vite-plugin-vue2)
- [Vite Integration For Go](https://github.com/torenware/vite-go) - Simple module that lets you serve your Vue 3 project from a Go-based web server.
- [Minimal GraphQL Client + Code Generation for Nuxt](https://github.com/Diizzayy/nuxt-graphql-client)
- [Vue Stripe Menu](https://github.com/oleksiikhr/vue-stripe-menu) - Creating a navigation menu with animations like on Stripe.
- [Vue Devtools](https://devtools.vuejs.org/) - Browser devtools extension for debugging Vue.js applications. ([Code](https://github.com/vuejs/devtools))
- [Villus](https://github.com/logaretm/villus) - Tiny and fast GraphQL client for Vue.js.
- [vee-validate](https://github.com/logaretm/vee-validate) - Form Validation for Vue.js.
- [vue-adaptive-utils](https://github.com/logaretm/vue-adaptive-utils) - Deliver empathetic experiences to your users by adapting to their capabilities.
- [Vuetify](https://vuetifyjs.com/en/) - Material Design Framework for Vue.js. ([Code](https://github.com/vuetifyjs/vuetify)) ([Awesome](https://github.com/vuetifyjs/awesome-vuetify))
- [Vue Virtual Scroller](https://github.com/Akryum/vue-virtual-scroller) - Blazing fast scrolling of any amount of data.
- [Origin.js](https://github.com/originjs/origin.js) - Simple and powerful Vue.js web application framework that provides a complete set of web project solutions based on Vue.js.
- [Vue Schema.org for Automated Google Rich Results](https://github.com/harlan-zw/vue-schema-org)
- [Why Vue doesn’t need time slicing / concurrent mode](https://github.com/vuejs/rfcs/issues/89#issuecomment-546988615) ([Tweet](https://twitter.com/AdamRackis/status/1518278855550713856))
- [Floating Vue](https://github.com/Akryum/floating-vue) - Easy tooltips, popovers, dropdown, menus... for Vue.
- [Vite Plugin Vue Inspector](https://github.com/webfansplz/vite-plugin-vue-inspector) - Jump to local IDE source code while click the element of browser automatically.
- [vuensight](https://github.com/martinascharrer/vuensight) - Visualize Vue.js component relationships and communication channels, i.e. props, events and slots.
- [Nuxt UI](https://github.com/nuxt/ui) - Unified UI and Design Kit for the Nuxt.
- [Splitpanes](https://github.com/antoniandre/splitpanes) - VueJS reliable, simple and touch-ready panes splitter / resizer.
- [Nuxt Content](https://github.com/nuxt/content) - File based Headless CMS for modern websites built with Nuxt. ([Docs](https://content.nuxtjs.org/))
- [Vitesome](https://github.com/alvarosabu/vitesome) - Simple opinionated Vue Starter Template with Vite.js.
- [Nuxt Image](https://github.com/nuxt/image) - Optimized Images for Nuxt.
- [Vue k bar](https://github.com/bytebase/vue-kbar) - Extensible command+k interface for Vue 3 applications.
- [Server functions RPC in client for Nuxt 3](https://github.com/antfu/nuxt-server-fn)
- [tRPC-Nuxt](https://github.com/wobsoriano/trpc-nuxt) - End-to-end typesafe APIs with tRPC.io in Nuxt applications.
- [Vue3 Composition API: watchEffect vs. watch (2022)](https://blog.openreplay.com/vue3-composition-api-watcheffect-vs-watch)
- [SlimeForm](https://github.com/LittleSound/slimeform) - Form state management and validation for Vue3.
- [The Nuxt Web (2022)](https://twitter.com/Atinux/status/1532405883929608197)
- [Anthony Fu - Vue, Vite, Vitest, UnoCSS (2022)](https://www.youtube.com/watch?v=At91HkUmAY0)
- [Vitesse Lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse.
- [Vue Flow](https://github.com/bcakmakoglu/vue-flow) - Highly customizable Flowchart component for Vue 3.
- [Vue Tips Collection](https://michaelnthiessen.com/vue-tips-collection)
- [Vue Use State Effect](https://github.com/lukasborawski/vue-use-state-effect) - Fast and small library, built on top of the native Vue.js API that will provide a safe and sharable (across the app) state for your local composables and functions.
- [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.
- [Collection of Vue.js challenges](https://vuejs-challenges.netlify.app/) ([Code](https://github.com/webfansplz/vuejs-challenges))
- [Vue Compiler in Rust](https://github.com/HerringtonDarkholme/vue-compiler) ([Reddit](https://www.reddit.com/r/rust/comments/x7np5z/rusty_vue_vue_compiler_rewritten_in_rust/))
- [Lumeno UI](https://github.com/LumenoDev/ui) - Library of UI widgets built using Vue.js and TailwindCSS.
- [Best place to start your Nuxt Theme](https://github.com/nuxt-themes/starter)
- [Looking at Nuxt3 (2022)](https://www.youtube.com/watch?v=s4Rd2snXSr0)
- [Nuxt Web Vitals](https://github.com/nuxt-community/web-vitals-module) - Essential module for a healthy Nuxt.js.
- [Temir](https://github.com/webfansplz/temir) - Vue for CLIs. Build your CLI output using components.
- [Create Vue](https://github.com/vuejs/create-vue) - Quickly scaffold a Vue project.
- [Nuxt Zero JS](https://github.com/danielroe/nuxt-zero-js) - Remove all client-side JS from your Nuxt 3 app.
- [nuxtjs/style](https://github.com/nuxt-modules/design-tokens) - Use Design Tokens in your Nuxt project.
- [Temir Snake CLI Game](https://github.com/webfansplz/temir-snake-game) - Terminal-based Snake game. Powered by Temir.
- [What blocks React devs from switching to Vue? (2022)](https://twitter.com/antfu7/status/1567511783832961026)
- [Unplugin Vue Router](https://github.com/posva/unplugin-vue-router) - Automatic file based Routing in Vue with TS support.
- [pinceau](https://github.com/Tahul/pinceau) - Zero-runtime CSS-in-JS framework made for Vue.
- [nuxt-hedge](https://github.com/harlan-zw/nuxt-hedge) - Experimental head-edge module for Nuxt v3.
- [Dev SSR on Nuxt with Vite (2022)](https://antfu.me/posts/dev-ssr-on-nuxt)
- [Prisma and Nuxt is my new favorite combo (2022)](https://www.youtube.com/watch?v=IWu3UV8H8-0)
- [Anu](https://github.com/jd-solanki/anu) - Focused utility based Vue component library built on top of UnoCSS & VueUse. ([Web](https://anu-vue.netlify.app/))
- [Vue TermUI](https://github.com/vue-terminal/vue-termui) - Modern Terminal UI Framework.
- [Nuxt Web Bundle](https://github.com/danielroe/nuxt-web-bundle) - Generate web bundles with Nuxt 3.
- [Flowbite Vue 3](https://flowbite-vue.com/) - Official Vue 3 components built for Flowbite and Tailwind CSS. ([Code](https://github.com/themesberg/flowbite-vue))
- [V-Mapkit.js](https://github.com/geoql/v-mapkit.js) - Vue 3 + MapKit JS.
- [Nuxt-Iron-Session](https://github.com/wobsoriano/nuxt-iron-session) - Add stateless session support for Nuxt apps using signed and encrypted cookies.
- [vue-mixable](https://github.com/LinusBorg/vue-mixable) - Turn Vue Mixins into Composables with a simple helper function.
- [Nuxt Plausible](https://github.com/johannschopplich/nuxt-plausible) - Nuxt 3 module to natively integrate Plausible analytics.
- [Vue Data Picker](https://github.com/Vuepic/vue-datepicker)
- [Advent Of Vue](https://adventofvue.com/) ([In SvelteKit](https://github.com/geoffrich/advent-of-sveltekit-2022))
- [v-satori](https://github.com/wobsoriano/v-satori) - Generate a satori-friendly VDOM from a Vue component.
- [Vue Auth UI](https://github.com/ndrbrt/vue-auth-ui) - Pre-built Vue component for authenticating users.
- [Nuxt Lazy Hydrate](https://github.com/Baroshem/nuxt-lazy-hydrate)
- [Nuxt Typography](https://github.com/nuxt-themes/typography) - Nuxt theme to get a beautiful and customisable typography with Nuxt Content.
- [Vue-Sprinkles](https://github.com/wobsoriano/vue-sprinkles) - Composable to create a component from your vanilla-extract + sprinkles tokens.
- [SWC Plugin for Vue JSX](https://github.com/g-plane/swc-plugin-vue-jsx)
- [Numix](https://github.com/wobsoriano/numix) - Write your server code inside Vue SFC's and handle forms easily.
- [Vunix](https://github.com/gaetansenn/vunix) - UI library built on top of Vue and TailwindCSS.
- [Nuxt Simple Sitemap](https://github.com/harlan-zw/nuxt-simple-sitemap) - Simple sitemap module for pre-rendered Nuxt v3 apps.
- [Nuxt Headless UI](https://github.com/P4sca1/nuxt-headlessui) - Headless UI integration for Nuxt. Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- [Nuxt SEO Kit](https://github.com/harlan-zw/nuxt-seo-kit) - Supercharge your Nuxt app with the all-in-one SEO layer.
- [Nuxt.new](https://nuxt.new/) - Create a new Nuxt project from your address bar. ([Code](https://github.com/nuxt/nuxt.new))
- [PrimeVUE](https://www.primefaces.org/primevue/) - Next Generation Vue UI Component Library. ([Code](https://github.com/primefaces/primevue))
- [Vitest Environment Nuxt](https://github.com/danielroe/vitest-environment-nuxt) - Vitest environment for testing code that needs a Nuxt runtime environment.
- [VueFire](https://github.com/vuejs/vuefire) - Firebase bindings for Vue.
- [Responsive Video Background Player for Vue](https://github.com/avidofood/vue-responsive-video-background-player)
- [Nuxt Simple Robots](https://github.com/harlan-zw/nuxt-simple-robots) - Simply manage the robots crawling your Nuxt v3 app.
- [Nuxt OG Image](https://github.com/harlan-zw/nuxt-og-image) - Generate dynamic social share images for your Nuxt v3 app.
- [Nuxt Link Checker](https://github.com/harlan-zw/nuxt-link-checker) - Improve your sites SEO by identifying and fixing link issues in your Nuxt v3 app.
- [Vue Component Library Starter](https://github.com/wobsoriano/vue-lib-starter) - Bundleless Vue component library starter.
- [Nuxt Fontaine](https://github.com/nuxt-modules/fontaine) - Font metric overrides to reduce CLS.
- [Nuxt Component Meta](https://github.com/nuxtlabs/nuxt-component-meta) - Gather Nuxt components metadata on build time and make them available on production.
- [Vue Mafs](https://github.com/mujahidfa/vue-mafs) - Vue components for creating interactive math visualizations, based on Mafs.
- [Sefirot](https://github.com/globalbrain/sefirot) - Vue Components for Global Brain Design System.
- [GitHub integration for Nuxt](https://github.com/nuxtlabs/github-module)
- [Nuxt Prometheus](https://github.com/artmizu/nuxt-prometheus) - Prometheus metrics for NodeJS and a set of custom metrics for Nuxt applications.
- [Server Routes in Nuxt 3 (2023)](https://masteringnuxt.com/blog/server-routes-in-nuxt-3)
- [Nuxt Config Schema](https://github.com/nuxt-experiments/nuxt-config-schema) - Automatically infers and generates schema based on user provided configuration for Nuxt.
- [NuxtJS Robots](https://github.com/nuxt-community/robots-module) - Nuxt.js module that injects a middleware to generate a robots.txt file.
- [Nuxt Auth](https://github.com/sidebase/nuxt-auth) - Nuxt user authentication and sessions via NextAuth.
- [BaklavaJS](https://github.com/newcat/baklavajs) - Graph / node editor in the browser using VueJS.
- [Advanced Data Fetching with Nuxt 3 (2023)](https://serversideup.net/advanced-data-fetching-with-nuxt-3/)
- [Vute Vue Jump Plugin](https://github.com/johnsoncodehk/vite-plugin-vue-jump) - Support jump to source code of the specific element from your web page.
- [Vue Final Modal](https://github.com/vue-final/vue-final-modal) - Renderless, mobile-friendly, feature-rich modal component.
- [Nuxt 3 Kitchen Sink Template](https://github.com/vercel/nuxt3-kitchen-sink)
- [Nuxt DevTools](https://github.com/nuxt/devtools)
- [Vue Google Sign In](https://github.com/syetalabs/vue3-google-signin)
- [Vite plugin for preview Vue component](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)
- [Nuxt Time](https://github.com/danielroe/nuxt-time) - SSR-safe time element for Nuxt 3.
- [Nuxt Pre-Hydrate](https://github.com/danielroe/nuxt-pre-hydrate) - Safely run pre-hydration steps on the client with Nuxt 3.
- [Weekly Vue News](https://weekly-vue.news/)
- [Vue's Connection to Signals](https://vuejs.org/guide/extras/reactivity-in-depth.html#connection-to-signals)
- [Vue Land Discord](https://discord.com/invite/HBherRA)
- [Karbon](https://github.com/storipress/karbon) - Vue-based framework for building dynamic, custom publications.
- [Nuxt-Parse](https://github.com/sidebase/nuxt-parse) - Parse, validate and transform data with confidence in nuxt using zod.
- [Sidebase](https://sidebase.io/) - Productive way to build full stack Nuxt 3 applications. ([Code](https://github.com/sidebase/sidebase))
- [vue-functional-ref](https://github.com/sxzz/vue-functional-ref) - Functional-style refs for Vue.
- [Nuxt I18n](https://github.com/nuxt-modules/i18n) - I18n module for Nuxt.
- [v-lazy-show](https://github.com/antfu/v-lazy-show) - Compile-time directive to lazy initialize v-show for Vue.
- [Vue Test Utils](https://github.com/vuejs/test-utils)
- [Nuxt Content Assets](https://github.com/davestewart/nuxt-content-assets) - Enable locally-located assets in Nuxt Content.
- [Nuxt Icon](https://github.com/nuxt-modules/icon) - Icon component, supporting Iconify, Emojis and custom components.
- [NuxtLego](https://github.com/zernonia/nuxt-lego) - Unstyled components for building your Nuxt content quick & beautiful.
- [Nuxt + Vercel ISR](https://github.com/danielroe/nuxt-vercel-isr) - Tiny demo to show off Nuxt's route rules integration with Vercel.
- [Vue DevTools](https://github.com/webfansplz/vite-plugin-vue-devtools) - Vite + Vue DevTools = DX.
- [nuxthq/ui](https://github.com/nuxtlabs/ui) - Fully styled and customizable components for Nuxt.
- [Enhanced scroll behavior for Vue Router](https://github.com/antfu/vue-router-better-scroller)
- [Nuxt Multi Cache for Nuxt 3](https://github.com/dulnan/nuxt-multi-cache)
- [Nuxtr VSCode](https://github.com/nuxtrdev/nuxtr-vscode) - Extension offering commands and tools to make your experience with Nuxt.js more pleasant.
- [Lazy Hydration for Vue 3 SSR](https://github.com/freddy38510/vue3-lazy-hydration)
- [Nuxt Hanko](https://github.com/nuxt-modules/hanko) - Hanko integration for Nuxt.
