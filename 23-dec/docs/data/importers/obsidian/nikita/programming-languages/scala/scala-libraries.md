# Scala libraries

[Cats](https://typelevel.org/cats/) & [ZIO](https://github.com/zio/zio) are neat.

## Web

- [blaze](https://github.com/http4s/blaze) - Scala library for building asynchronous pipelines, with a focus on network IO.
- [ZIO HTTP](https://github.com/dream11/zio-http) - Scala library to write HTTP apps. Powered by ZIO and netty and aims at being the defacto solution for writing, highly scalable and performant web applications.
- [Http4s](https://github.com/http4s/http4s) - Minimal, idiomatic Scala interface for HTTP services.
- [Tapir](https://github.com/softwaremill/tapir) - Describe HTTP API endpoints as immutable Scala values. ([Docs](https://tapir.softwaremill.com/en/latest/)) ([Tapir Stream](https://www.youtube.com/watch?v=GNleUFwgzWc)) ([1.0](https://softwaremill.com/tapir-1-0-released/))
- [sttp](https://github.com/softwaremill/sttp) - Scala HTTP client you always wanted. ([Docs](https://sttp.softwaremill.com/en/latest/))
- [Scalatra](https://github.com/scalatra/scalatra) - Tiny Scala high-performance, async web framework, inspired by Sinatra. ([Web](https://scalatra.org/))
- [Scala.js](https://github.com/scala-js/scala-js) - Scala to JavaScript compiler. ([Web](https://www.scala-js.org/)) ([10 years of Scala.js](https://www.scala-lang.org/blog-detail/2023/02/05/ten-years-of-scala-js.html)) ([HN](https://news.ycombinator.com/item?id=34664970))
- [Scala Webapp Utilities](https://github.com/japgolly/webapp-util)
- [Play Framework](https://github.com/playframework/playframework) - High Velocity Web Framework. ([Bootstrap Template](https://github.com/innFactory/bootstrap-play2))
- [ff4s](https://github.com/buntec/ff4s) - Purely functional web frontend framework for Scala.js.
- [Tyrian](https://github.com/PurpleKingdomGames/tyrian) - Elm-inspired Scala UI library for Scala 3.
- [guardrail](https://github.com/guardrail-dev/guardrail) - Principled code generation from OpenAPI specifications.
- [Cask](https://github.com/com-lihaoyi/cask) - Scala HTTP micro-framework.
- [http4s-curl](https://github.com/http4s/http4s-curl) - Experimental client for http4s on Scala Native, backed by libcurl.
- [fs2-dom](https://github.com/armanbilge/fs2-dom) - Idiomatic Cats Effect + FS2 integrations for Web APIs.
- [Scala DOM Types](https://github.com/raquo/scala-dom-types) - Scala types for your library to represent HTML tags, attributes, properties and CSS styles.
- [Laminar](https://github.com/raquo/Laminar) - Simple, expressive, and safe UI library for Scala.js. ([Talk](https://www.youtube.com/watch?v=L_AHCkl6L-Q)) ([Web](https://laminar.dev/))
- [Waypoint](https://github.com/raquo/Waypoint) - Efficient router for Laminar UI Library.
- [Apache Pekko](https://github.com/apache/incubator-pekko) - Build highly concurrent, distributed, and resilient message-driven applications using Java/Scala.
- [Slinky](https://github.com/shadaj/slinky) - Write Scala React apps just like you would in ES6.
- [Calico](https://github.com/armanbilge/calico) - Build reactive web applications in Scala.js with Cats Effect, FS2, and friends.
- [netty-http4s](https://github.com/http4s/http4s-netty) - Http4s on pure netty.

## CLI

- [MainArgs](https://github.com/com-lihaoyi/mainargs) - Small, dependency-free library for command line argument parsing in Scala.
- [decline](https://github.com/bkirwi/decline) - Composable command-line parser for Scala.
- [zio-cli](https://github.com/zio/zio-cli) - Rapidly build powerful command-line applications powered by ZIO.
- [zio-tui](https://github.com/kitlangton/zio-tui) - Library for creating interactive terminal user interfaces.

## FP

- [Cats](https://github.com/typelevel/cats) - Lightweight, modular, and extensible library for functional programming. ([herding cats](https://eed3si9n.com/herding-cats/))
- [shapeless](https://github.com/milessabin/shapeless) - Generic programming for Scala. ([Type Astronaut's Guide to Shapeless](https://github.com/underscoreio/shapeless-guide))
- [shapeless-3](https://github.com/typelevel/shapeless-3) - Generic programming for Scala.

## DB

- [doobie](https://github.com/tpolecat/doobie) - Functional JDBC layer for Scala.
- [ScalikeJDBC](https://github.com/scalikejdbc/scalikejdbc) - Tidy SQL-based DB access library for Scala that naturally wraps JDBC and provides easy-to-use APIs.
- [Skunk](https://github.com/tpolecat/skunk) - Data access library for Scala + Postgres.
- [Slick](https://github.com/slick/slick) - Modern database query and access library for Scala. Allows you to work with stored data almost as if you were using Scala collections. ([Web](https://scala-slick.org/))
- [redis4cats](https://github.com/profunktor/redis4cats) - Redis client built on top of Cats Effect, Fs2 and Lettuce.
- [SQLite4S](https://github.com/david-bouyssie/sqlite4s) - Scala Native wrapper of the SQLite C library.
- [Scalding](https://github.com/twitter/scalding) - Scala library that makes it easy to specify Hadoop MapReduce jobs.
- [ProtoQuill](https://github.com/zio/zio-protoquill) - Compile-time Language Integrated Queries for Scala.
- [SPL-to-PySpark transpiler](https://github.com/databrickslabs/transpiler)
- [ZIO-Schema](https://github.com/zio/zio-schema) - Compositional, type-safe schema definitions, which enable auto-derivation of codecs and migrations.
- [Gluten](https://github.com/oap-project/gluten) - Spark Plugin to Offload SQL Engine to Native Library.
- [Anorm](https://github.com/playframework/anorm) - Simple data access layer that uses plain SQL to interact with the database and provides an API to parse and transform the resulting datasets.
- [porcupine](https://github.com/armanbilge/porcupine) - Skunk-inspired library for SQLite on JVM, Node.js, and Native.

## Math

- [Rainier](https://github.com/stripe/rainier) - Bayesian inference in Scala. ([Web](https://rainier.fit/))

## Test

- [Bloop](https://scalacenter.github.io/bloop/) - Compile, test and run Scala code fast. ([Code](https://github.com/scalacenter/bloop))
- [Weaver-test](https://github.com/disneystreaming/weaver-test) - Test framework that runs everything in parallel.
- [ScalaCheck](https://github.com/typelevel/scalacheck) - Property-based testing for Scala. ([Web](https://scalacheck.org/)) ([Web Code](https://github.com/typelevel/scalacheck-web))
- [Test-State](https://github.com/japgolly/test-state) - Test stateful stuff statelessly, and reasonably.
- [kallikrein](https://github.com/tek/kallikrein) - Scala testing framework for sbt focused on running cats-effect based programs.
- [specs2](https://github.com/etorreborre/specs2) - Software Specifications for Scala.
- [scalaprops](https://github.com/scalaprops/scalaprops) - Property based testing library for Scala.
- [Americium](https://github.com/sageserpent-open/americium) - Generation of test case data for Scala and Java, in the spirit of QuickCheck.
- [coulomb](https://github.com/erikerlandson/coulomb) - Unit analysis for Scala.
- [MUnit](https://github.com/scalameta/munit) - Scala testing library with actionable errors and extensible APIs.

## GraphQL

- [Caliban](https://github.com/ghostdogpr/caliban) - Purely functional library for building GraphQL servers and clients in Scala. ([Docs](https://ghostdogpr.github.io/caliban/docs/))
- [Sangria](https://github.com/sangria-graphql/sangria) - Scala GraphQL implementation.
- [Sangria Relay](https://github.com/sangria-graphql/sangria-relay) - Sangria Relay Support.
- [Grackle](https://github.com/gemini-hlsw/gsp-graphql) - GraphQL server implementation for Scala.

## Graphics

- [Doodle](https://github.com/creativescala/doodle) - Compositional vector graphics in Scala / Scala.JS.
- [Minart](https://github.com/JD557/minart) - Minimal scala library to draw images in a JVM/Javascript/Native canvas.

## Error

- [splain](https://github.com/tek/splain) - Scala compiler plugin for more concise errors.

## Crypto

- [bobcats](https://github.com/typelevel/bobcats) - Cross-platform cryptography (JVM, Node.js, browsers) for the Cats ecosystem.

## ML

- [Noether](https://github.com/spotify/noether) - Scala Aggregators used for ML Model metrics mo.
- [Lamp](https://github.com/pityka/lamp) - Scala library for deep learning and scientific computing. It features a native CPU and GPU backend and operates on off-heap memory.
- [scala-torch](https://github.com/microsoft/scala_torch) - Scala bindings for LibTorch.
- [Storch](https://github.com/sbrunk/storch) - PyTorch bindings for Scala.

## Other

- [sup](https://github.com/kubukoz/sup) - Composable, purely functional healthchecks in Scala.
- [Monocle](https://github.com/julien-truffaut/Monocle) - Optics library for Scala.
- [Skunk](https://github.com/tpolecat/skunk) - Data access library for Scala + Postgres.
- [Scala STM](https://nbronson.github.io/scala-stm/) - Lightweight software transactional memory for Scala, inspired by the STMs in Haskell and Clojure while taking advantage of Scala’s power and performance.
- [Scalaz](https://github.com/scalaz/scalaz) - Principled Functional Programming in Scala.
- [ZIO](https://github.com/zio/zio) - Type-safe, composable library for asynchronous and concurrent programming in Scala. ([Web](https://zio.dev/)) ([Advanced ZIO Workshop](https://github.com/jdegoes/advanced-zio)) ([Articles](https://twitter.com/NSilnitsky/status/1488046062036209666))
- [ZIO ZMX](https://github.com/zio/zio-zmx) - Monitoring, Metrics and Diagnostics for ZIO.
- [Matryoshka](https://github.com/slamdata/matryoshka) - Generalized recursion schemes and traversals for Scala.
- [Scrimage](https://github.com/sksamuel/scrimage) - Scala image processing library.
- [Fastring](https://github.com/Atry/fastring) - Extremely fast string formatting.
- [Compute.scala](https://github.com/ThoughtWorksInc/Compute.scala) - Scientific computing with N-dimensional arrays.
- [Finatra](https://github.com/twitter/finatra) - Fast, testable, Scala services built on TwitterServer and Finagle.
- [Freestyle](https://github.com/frees-io/freestyle) - Cohesive & pragmatic framework of FP centric Scala libraries.
- [Deequ](https://github.com/awslabs/deequ) - Library built on top of Apache Spark for defining "unit tests for data", which measure data quality in large datasets.
- [Izumi](https://github.com/7mind/izumi) - Ecosystem of independent libraries and frameworks allowing you to significantly increase productivity of your Scala development.
- [Odin](https://github.com/valskalla/odin) - Fast & Functional logger in Scala.
- [Monix](https://github.com/monix/monix) - Asynchronous, Reactive Programming for Scala and Scala.js.
- [Coursier](https://github.com/coursier/coursier) - Pure Scala Artifact Fetching. ([Web](https://get-coursier.io/))
- [almond](https://github.com/almond-sh/almond) - Scala kernel for Jupyter. ([Web](https://almond.sh/))
- [Twitter Util](https://github.com/twitter/util) - Bunch of idiomatic, small, general purpose tools.
- [scalameta](https://github.com/scalameta/scalameta) - Library to read, analyze, transform and generate Scala programs. ([Guide](https://scalameta.org/docs/trees/guide.html))
- [Inox](https://github.com/epfl-lara/inox) - Solver for higher-order functional programs.
- [Stainless](https://github.com/epfl-lara/stainless) - Verification framework and tool for higher-order Scala programs. ([Web](https://stainless.epfl.ch/)) ([Talk](https://github.com/epfl-lara/stainless)) ([Talk Slides](https://speakerdeck.com/romac/formal-verification-of-scala-programs-with-stainless-def0d4dd-5c8d-4640-ab8f-60887df0e18c))
- [scodec](https://github.com/scodec/scodec) - Scala combinator library for working with binary data.
- [circe](https://github.com/circe/circe) - JSON library for Scala.
- [Ciris](https://github.com/vlovgr/ciris) - Functional Configurations for Scala.
- [ScalaPy](https://github.com/shadaj/scalapy) - Allows you to use any Python library from your Scala code with an intuitive API. ([Data Science in Scala with ScalaPy - Shadaj Laddad](https://www.youtube.com/watch?v=vFUsEg-hni0))
- [Treadle](https://github.com/freechipsproject/treadle) - Experimental circuit simulator that executes low Firrtl IR.
- [graalnative4s](https://github.com/usommerl/graalnative4s) - Employ Scala for serverless applications.
- [Cats Effect](https://github.com/typelevel/cats-effect) - Purely functional runtime system for Scala.
- [NewType](https://github.com/estatico/scala-newtype) - Scala with no runtime overhead.
- [Monocle](https://github.com/optics-dev/Monocle) - Optics library for Scala. ([Docs](https://www.optics.dev/Monocle/))
- [refined](https://github.com/fthomas/refined) - Simple refinement types for Scala.
- [uPickle](https://github.com/com-lihaoyi/upickle) - Simple Scala JSON and Binary (MessagePack) serialization library.
- [LaCasa](https://github.com/phaller/lacasa) - Lightweight affine types and object capabilities in Scala.
- [Spotted Leopards](https://github.com/typelevel/spotted-leopards) - Proof of concept for a cats-like library built using Dotty features.
- [Izumi](https://github.com/7mind/izumi) - Productivity-oriented collection of lightweight fancy stuff for Scala toolchain. ([Docs](https://izumi.7mind.io/))
- [Libretto](https://github.com/TomasMikula/libretto) - Declarative concurrency and stream processing library for Scala.
- [Algebird](https://github.com/twitter/algebird) - Abstract Algebra for Scala.
- [Natchez](https://github.com/tpolecat/natchez) - Distributed tracing library for Scala.
- [SWAN](https://github.com/themaplelab/swan) - Swift Static Analysis Framework.
- [Chimney](https://github.com/scalalandio/chimney) - Scala library for boilerplate-free, type-safe data transformations.
- [banana-rdf](https://github.com/banana-rdf/banana-rdf) - Library for RDF, SPARQL and Linked Data technologies in Scala.
- [Scio](https://github.com/spotify/scio) - Scala API for Apache Beam and Google Cloud Dataflow.
- [MacWire](https://github.com/softwaremill/macwire) - Lightweight and Nonintrusive Scala Dependency Injection Library.
- [Wire Signals](https://github.com/wireapp/wire-signals) - Small and effective event-handling library for Scala.
- [Papa Carlo](https://github.com/Eliah-Lakhin/papa-carlo) - Scala parsing library utilises incremental parsing approach.
- [Avro4s](https://github.com/sksamuel/avro4s) - Avro schema generation and serialization / deserialization for Scala.
- [Vault](https://github.com/typelevel/vault) - Type-safe, persistent storage for values of arbitrary types.
- [cats-retry](https://github.com/cb372/cats-retry) - Library for retrying actions that can fail.
- [Quill](https://github.com/getquill/quill) - Compile-time Language Integrated Queries for Scala. ([Web](https://getquill.io/))
- [ZIO Optics](https://github.com/zio/zio-optics) - Easily modify parts of larger data structures.
- [scala-typed-holes](https://github.com/cb372/scala-typed-holes) - Scala compiler plugin to emulate the "typed holes" feature of Haskell, Idris, Agda, etc.
- [ScalaCache](https://github.com/cb372/scalacache) - Simple caching in Scala.
- [Scaldi](https://github.com/scaldi/scaldi) - Lightweight Scala Dependency Injection Library.
- [Zinc](https://github.com/sbt/zinc) - Incremental compiler for Scala.
- [zio-webhooks](https://github.com/zio/zio-webhooks) - Microlibrary for reliable and persistent webhook delivery.
- [Iron](https://github.com/Iltotore/iron) - Type constraint system for Scala. It allows creating type-level assertions, evaluable at compile time and/or runtime.
- [ECScala](https://github.com/nicolasfara/ecscala) - ECS Scala framework.
- [ZIO Akka Cluster](https://github.com/zio/zio-akka-cluster)
- [Squants](https://github.com/typelevel/squants) - Scala API for Quantities, Units of Measure and Dimensional Analysis.
- [dynamic](https://github.com/reugn/dynamic) - Scala library that allows copying a case class using a dynamic property name.
- [crjdt](https://github.com/fthomas/crjdt) - Conflict-free replicated JSON datatype (CRDT) in Scala.
- [Droste](https://github.com/higherkindness/droste) - Recursion library for Scala.
- [Iota](https://github.com/frees-io/iota) - Fast [co]product types with a clean syntax. For Cats & Scalaz.
- [Enumeratum](https://github.com/lloydmeta/enumeratum) - Type-safe, reflection-free, powerful enumeration implementation for Scala with exhaustive pattern match warnings and helpful integrations.
- [FS2](https://github.com/typelevel/fs2) - Compositional, streaming I/O library for Scala. ([Web](https://fs2.io/#/))
- [Endless](https://github.com/endless4s/endless) - Scala library to describe event sourced entities using tagless-final algebras. ([Docs](https://endless4s.github.io/))
- [Akka-Effect](https://github.com/evolution-gaming/akka-effect) - Cats-Effect & Akka interop.
- [Woof](https://github.com/LEGO/woof) - Pure Scala logging library with no reflection.
- [Squid](https://github.com/epfldata/squid) - Type-safe metaprogramming for Scala.
- [fs2-data](https://github.com/satabin/fs2-data) - Streaming data parsers and manipulation library.
- [Scala JSON Schema](https://github.com/andyglow/scala-jsonschema)
- [Diffson](https://github.com/gnieh/diffson) - Scala diff/patch library for JSON.
- [Polyvinyl](https://github.com/propensive/polyvinyl) - Typesafe record types for Scala.
- [newtypes](https://github.com/monix/newtypes) - Macro-free helpers for defining newtypes in Scala, cross-compiled to Scala 3.
- [geny](https://github.com/com-lihaoyi/geny) - Provides the geny.Generator data type, the dual to a scala.Iterator that can ensure resource cleanup.
- [Breeze](https://github.com/scalanlp/breeze) - Numerical processing library for Scala.
- [Scala Yaml](https://github.com/VirtusLab/scala-yaml) - Dependency-free library that allows to work with the YAML.
- [Parsel](https://github.com/jeremyrsmith/parsel) - Zero-dependency Scala library for working with Python code.
- [ZIO logging](https://github.com/zio/zio-logging) - Simple logging for ZIO apps, with correlation, context & pluggable backends out of the box.
- [ZIO Config](https://github.com/zio/zio-config) - ZIO-based library for working with application configuration data.
- [Scribe](https://github.com/outr/scribe) - Fastest logging library in the world. Built from scratch in Scala and programmatically configurable.
- [Emil](https://github.com/eikek/emil) - Library for dealing with E-Mail in Scala.
- [futil](https://github.com/alexklibisz/futil) - Minimal utilities for Scala Futures.
- [Scala Isabelle](https://github.com/dominique-unruh/scala-isabelle) - Scala library for controlling/interacting with Isabelle.
- [mini-refined](https://github.com/note/mini-refined) - Simple encoding of refinement types in Scala 3.
- [Difflicious](https://github.com/jatcwang/difflicious) - Scala library for readable diffs of values.
- [zio-json](https://github.com/zio/zio-json) - Fast, secure JSON library with tight ZIO integration.
- [Ficus](https://github.com/iheartradio/ficus) - Lightweight companion to Typesafe config that makes it more Scala-friendly.
- [Colossus](https://github.com/tumblr/colossus) - Lightweight I/O framework for building Scala services.
- [Futiles](https://github.com/johanandren/futiles) - Missing utils for working with Scala Futures.
- [spray-json](https://github.com/spray/spray-json) - Lightweight, clean and simple JSON implementation in Scala.
- [sconfig](https://github.com/ekrich/sconfig) - Configuration library written in Scala which is a direct translation of the original widely used Java library.
- [Akka Stream Contrib](https://github.com/akka/akka-stream-contrib)
- [Jsoniter Scala](https://github.com/plokhotnyuk/jsoniter-scala) - Scala macros for compile-time generation of safe and ultra-fast JSON codecs.
- [Staged Program Analyzers](https://github.com/Kraks/sai) - Improving the performance of static analysis by meta-programming/multi-stage programming.
- [Play JSON](https://github.com/playframework/play-json) - Powerful Scala JSON library, originally developed by the Play team.
- [kantan.csv](https://github.com/nrinaudo/kantan.csv) - CSV handling library for Scala.
- [Foursquare Fsq.io](https://github.com/foursquare/fsqio) - All of Foursquare's open source code in a single repo.
- [Scala-fx](https://github.com/47deg/TBD) - Effects library for Scala 3 that introduces structured concurrency and an abilities system to describe pure functions and programs.
- [DUCT](https://github.com/justinhj/duct) - Scala 3 category theory and functional programming library.
- [OS-Lib](https://github.com/com-lihaoyi/os-lib) - Simple Scala interface to common OS filesystem and subprocess APIs.
- [PureConfig](https://github.com/pureconfig/pureconfig) - Scala library for loading configuration files.
- [jsonrpclib](https://github.com/neandertech/jsonrpclib) - Cross-platform pure-scala JsonRPC library.
- [cats-saga](https://github.com/VladKopanev/cats-saga) - Purely Functional Transaction Management In Scala With Cats.
- [zio-saga](https://github.com/VladKopanev/zio-saga) - Purely Functional Transaction Management In Scala With ZIO.
- [Turbolift](https://github.com/marcinzh/turbolift) - Extensible Effect System for Scala 3.
- [Ducktape](https://github.com/arainko/ducktape) - Library for boilerplate-less and configurable transformations between case classes/enums (sealed traits) for Scala 3.
- [smithy4s](https://github.com/disneystreaming/smithy4s) - Tool that generates third-party-free, protocol-agnostic scala code from smithy specifications. ([Docs](https://disneystreaming.github.io/smithy4s/docs/overview/intro/)) ([Reddit](https://www.reddit.com/r/scala/comments/wrjue2/smithy4s_0150_now_with_smithy_20_support/))
- [GLL Combinators](https://github.com/djspiewak/gll-combinators) - Parser combinator library based on the GLL algorithm.
- [Nyaya](https://github.com/japgolly/nyaya) - Random Data Generation and/or Property Testing in Scala & Scala.JS.
- [Shardcake](https://github.com/devsisters/shardcake) - Sharding and location transparency for Scala.
- [ZIO Compose](https://github.com/tailcallhq/zio-compose) - Scala DSL to write type-safe programs for distributed computing.
- [feral](https://github.com/typelevel/feral) - Framework for writing serverless functions in Scala with Cats Effect and deploying them to the cloud, targeting both JVM and JavaScript runtimes.
- [scala-uri](https://github.com/lemonlabsuk/scala-uri) - Simple scala library for building and parsing URIs.
- [Glass](https://github.com/tofu-tf/glass) - Modern optic library.
- [Morphling](https://github.com/danslapman/morphling) - Cats-based Scala library for free applicative schemas.
- [Kalix Java and Scala SDK](https://github.com/lightbend/kalix-jvm-sdk)
- [Scala Standard Parser Combinator](https://github.com/scala/scala-parser-combinators) - Parsing for Scala.
- [Airstream](https://github.com/raquo/Airstream) - State propagation and event streams with mandatory ownership and no glitches.
- [Scala Debug Adapter](https://github.com/scalacenter/scala-debug-adapter) - Implementation of the Debug Adapter Protocol for Scala.
- [Featran](https://github.com/spotify/featran) - Scala feature transformation library for data science and machine learning.
- [cats-parse](https://github.com/typelevel/cats-parse) - Parsing library for the cats ecosystem.
- [avocADO](https://github.com/VirtusLab/avocADO) - Safe compile-time parallelization of for-comprehensions for Scala 3.
- [Kyo](https://github.com/fwbrasil/kyo) - High-performance composable effects for Scala 3.
- [ZIO direct](https://github.com/zio/zio-direct) - Direct-Style Programming for ZIO.
- [Poppet](https://github.com/yakivy/poppet) - Minimal, type-safe RPC Scala library.
- [Dupin](https://github.com/yakivy/dupin) - Minimal, idiomatic, customizable validation Scala library.
- [Jam](https://github.com/yakivy/jam) - Incredibly simple DI Scala library.
- [ToFu](https://github.com/tofu-tf/tofu) - Functional programming toolbox.
- [derevo](https://github.com/tofu-tf/derevo) - Multiple instance derivations inside a single macro annotation.
- [Volga](https://github.com/manatki/volga) - Comprehensions for Arrows and Monoidal categories.
- [Gallia](https://github.com/galliaproject/gallia-core) - Schema-aware Scala library for data transformation.
- [dependency](https://github.com/coursier/dependency) - Library to parse and handle Java and Scala dependencies.
- [eff](https://github.com/atnos-org/eff) - Eff monad for cats.
- [Choam](https://github.com/durban/choam) - Experiments with composable lock-free concurrency.
- [Yin-Yang](https://github.com/scala-yinyang/scala-yinyang) - Library for deep embedding of DSLs based on Scala macros.
- [ZIO Process](https://github.com/zio/zio-process) - ZIO library for interacting with external processes and command-line programs.
- [Edomata](https://github.com/hnaderi/edomata) - Production ready event-driven automata for Scala, Scala.js and scala native.
- [Ultraviolet](https://github.com/PurpleKingdomGames/ultraviolet) - Scala 3 to GLSL transpiler library.
- [kinesis4cats](https://github.com/etspaceman/kinesis4cats) - Comprehensive Scala library for Kinesis.
- [Systolic Array](https://github.com/hngenc/systolic-array) - DSL for Systolic Arrays.
- [SFML Scala Native](https://github.com/lafeychine/scala-native-sfml) - Scala Native binding of the SFML graphic library.
- [otel4s](https://github.com/typelevel/otel4s) - OpenTelemetry library for Scala based on Cats-Effect.
- [tethys](https://github.com/tethys-json/tethys) - JSON parsing/writing library for Scala.
- [Decrel](https://github.com/yoohaemin/decrel) - Library for declarative programming using relations between your data.
- [neotype](https://github.com/kitlangton/neotype) - Friendly newtype library for Scala 3.
- [parboiled2](https://github.com/sirthias/parboiled2) - Macro-based PEG parser generator for Scala.
- [Extras](https://github.com/Kevin-Lee/extras)
- [Twiddles](https://github.com/typelevel/twiddles) - Micro-library for building effectful protocols.
- [Typelevel Toolkit](https://github.com/typelevel/toolkit) - Quickstart your next app with the Typelevel Toolkit.

## Links

- [Scaladex](https://index.scala-lang.org/) - Scala Package Index. ([Code](https://github.com/scalacenter/scaladex))
- [Useful Scala libraries (2020)](https://twitter.com/hmemcpy/status/1318473961236291584)
- [Scalaland.io](https://scalalandio.github.io/) - Umbrella for various Scala projects. ([GitHub](https://github.com/scalalandio))
- [Awesome Scala Native](https://github.com/tindzk/awesome-scala-native)
- [ZIO Cheat Sheet](https://github.com/ghostdogpr/zio-cheatsheet)
- [Best Scala framework / libraries (2021)](https://www.reddit.com/r/scala/comments/qilhao/best_scala_framework_libraries_out_there/)
- [FP libraries that target scala 3 exclusively? (2021)](https://www.reddit.com/r/scala/comments/qznudw/fp_libraries_that_target_scala_3_exclusively/)
- [Scala libraries for ML (2021)](https://www.reddit.com/r/scala/comments/r3x8mm/what_libraries_do_you_use_for_machine_learning/)
- [sbt-dotenv](https://github.com/mefellows/sbt-dotenv) - sbt plugin to load environment variables from .env into the JVM System Environment for local development.
- [sbt-autoversion](https://github.com/sbt/sbt-autoversion) - Builds on the sbt-release and sbt-git plugins to automatically manage the version bump to apply.
- [sbt-release](https://github.com/sbt/sbt-release) - Customizable release process that you can add to your project.
- [Sane Scala Dependencies in a Poly-Repo Codebase (2021)](https://alexklibisz.com/2021/01/31/sane-scala-sbt-dependencies.html)
- [Finding Scala Libraries (2022)](https://www.scala-lang.org/blog/2022/03/08/finding-awesome-libraries.html)
- [Unused Code](https://github.com/xuwei-k/unused-code) - Find and warn, remove unused public classes, methods by scalafix SyntacticRule.
- [Modeling & Building PayRoll Engine Using Functional Effects System With ZIO Asynchronous, Concurrent, ZIO Scala FP Library. (2022)](https://www.linkedin.com/pulse/modeling-building-payroll-engine-using-functional-effects-otun/)
- [Scala 3 migration guide](https://github.com/scalacenter/scala-3-migration-guide)
- [Binary Compatibility Code Examples & Explanation](https://github.com/jatcwang/binary-compatibility-guide) - Guide + Examples to help you better maintain binary compatibility for your Scala library releases.
- [Scala Diagrams](https://github.com/mikeyhu/scaladiagrams) - Generate class diagrams from scala source code.
- [panopticon-tui](https://github.com/ScalaConsultants/panopticon-tui) - Terminal UI observability and diagnostic tool for Scala applications.
- [zio-akka-quickstart](https://github.com/ScalaConsultants/zio-akka-quickstart.g8) - Giter8 template for a fully functional, ready to deploy microservice ZIO, Akka HTTP and Slick.
- [Generate native-image binaries with sbt](https://github.com/scalameta/sbt-native-image)
- [typelevel-nix](https://github.com/typelevel/typelevel-nix) - Development tools for Typelevel projects.
- [Demos for ScalablyTyped](https://github.com/ScalablyTyped/Demos)
- [scala-interactive-update](https://github.com/kitlangton/scala-interactive-update) - Update your Scala dependencies (both libraries and plugins) interactively.
- [Getting Started with Scala.js and Vite | Let´s talk about Scala 3 (2022)](https://www.youtube.com/watch?v=dv7fPmgFTNA)
- [Effect Zoo for Scala 3](https://github.com/marcinzh/effect-zoo)
- [Scala Library template](https://github.com/indoorvivants/scala-library-template) - Template for cross-platform, cross-versions Scala Library.
- [Bindings generator for Scala 3 Native](https://github.com/indoorvivants/sn-bindgen)
- [Acyclic](https://github.com/com-lihaoyi/acyclic) - Scala compiler plugin to let you prohibit circular dependencies between files.
- [Scala 3 Metaprogramming Examples](https://github.com/lampepfl/dotty-macro-examples)
- [Sbtix](https://github.com/natural-transformation/sbtix) - Generates a Nix definition that represents your SBT project's dependencies.
- [Dotty-patched and Eval](https://github.com/DmytroMitin/dotty-patched) - Evaluating source code and trees at compile time hacking multi-staging programming.
- [Immutable Collections should be Your Default (2022)](https://alexn.org/blog/2022/10/27/immutable-collections-your-default/)
- [ScalaZ and Cats](https://github.com/fosskers/scalaz-and-cats) - Usage examples and benchmarks between Scalaz and Cats (w/ Haskell ground-truth).
- [Peeking inside the engine of ZIO SQL (2022)](https://www.slideshare.net/JaroslavRegec1/peeking-inside-the-engine-of-zio-sqlpdf)
- [Smithy Translate](https://github.com/disneystreaming/smithy-translate) - Tooling that enables converting to and from Smithy. ([Reddit](https://www.reddit.com/r/scala/comments/zftfwf/smithytranslate_a_cli_tool_to_turn_openapi_specs/))
- [Scala Template](https://github.com/scala/hello-world.g8)
- [Scala One](https://github.com/propensive/one) - Platform of libraries for Scala 3.
- [Managing micro libraries with Scala CLI - Alexandre Archambault (2022)](https://www.youtube.com/watch?v=_wG-DZ0FMQY)
- [dexsearch](https://github.com/neandertech/dexsearch) - CLI lets you search for Scala libraries via Scaladex, and stores them in your clipboard, well formatted, ready to paste in build files and scripts.
- [sbt-sonatype](https://github.com/xerial/sbt-sonatype) - sbt plugin for publishing Scala/Java projects to the Maven central.
- [sbt-dynver](https://github.com/sbt/sbt-dynver) - sbt plugin to dynamically set your version from git.
- [sbt-sql](https://github.com/xerial/sbt-sql) - sbt plugin for generating model classes from SQL files.
