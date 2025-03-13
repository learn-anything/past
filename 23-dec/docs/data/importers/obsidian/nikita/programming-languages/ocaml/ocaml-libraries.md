---
title: OCaml libraries
---

# [OCaml](https://ocaml.org) libraries

## Web

- [Helix](https://github.com/odis-labs/helix) - Build reactive web interfaces in OCaml.
- [Hyper](https://github.com/aantron/hyper) - OCaml Web client, composable with Dream.
- [h2](https://github.com/anmonteiro/ocaml-h2) - HTTP/2 implementation written in pure OCaml.
- [Opium](https://github.com/rgrinberg/opium) - Sinatra like web toolkit for OCaml.
- [OCaml On Ice](https://github.com/roddyyaga/ocoi) - Web framework for OCaml in the style of Ruby on Rails.
- [http/af](https://github.com/inhabitedtype/httpaf) - High performance, memory efficient, and scalable web server written in OCaml.
- [Eliom](https://github.com/ocsigen/eliom) - Framework for building client/server Web and mobile applications in OCaml.
- [ocaml-wasmtime](https://github.com/LaurentMazare/ocaml-wasmtime) - OCaml WebAssembly runtime powered by wasmtime.
- [Dream](https://github.com/aantron/dream) - Tidy, feature-complete Web framework. ([Docs](https://aantron.github.io/dream/)) ([HN](https://news.ycombinator.com/item?id=26758151)) ([Example App](https://github.com/andreypopp/dream-oauth2))
- [OCaml JavaScript bindings](https://github.com/tmattio/js-bindings)
- [Tiny_httpd](https://github.com/c-cube/tiny_httpd) - Minimal HTTP server using good old threads + blocking IO, with small request router.
- [ocaml-cohttp](https://github.com/mirage/ocaml-cohttp) - OCaml library for HTTP clients and servers using Lwt or Async.
- [Async_http](https://github.com/anuragsoni/async_http) - Simple HTTP server for async applications.
- [Pollinate](https://github.com/marigold-dev/pollinate) - Platform agnostic OCaml library for P2P communications using UDP and Bin_prot.
- [Bonsai](https://github.com/janestreet/bonsai) - Library for building interactive browser-based UI. ([Web](https://bonsai.red/)) ([Setting up Bonsai](https://ceramichacker.com/blog/30-4x-setting-up-bonsai))
- [ocaml-dispatch](https://github.com/inhabitedtype/ocaml-dispatch) - Path-based dispatching for client- and server-side applications.
- [eehs](https://github.com/bikallem/eehs) - Effects Epoll HTTP Server.
- [Spring](https://github.com/bikallem/spring) - Delightful OCaml web programming library.
- [gluten](https://github.com/anmonteiro/gluten) - Reusable runtime library for network protocols.

## Test

- [Alcotest](https://github.com/mirage/alcotest) - Lightweight and colorful test framework.
- [Mutaml](https://github.com/jmid/mutaml) - Mutation Tester for OCaml.
- [Crowbar](https://github.com/stedolan/crowbar) - Property fuzzing for OCaml.
- [qtest](https://github.com/vincent-hugot/qtest) - Inline (Unit) Tests for OCaml.
- [QCheck](https://github.com/c-cube/qcheck) - Property-based testing for OCaml.
- [Popper](https://github.com/jobjo/popper) - Property-based testing at ease.
- [expect-test](https://github.com/janestreet/ppx_expect) - Framework for writing tests in OCaml, similar to Cram.

## Science

- [Owl](https://github.com/owlbarn/owl) - OCaml library for scientific and engineering computing. ([HN](https://news.ycombinator.com/item?id=20449595)) ([Web](https://ocaml.xyz/))

## ML

- [zeta](https://github.com/liaopeiyuan/zeta) - Functional neural networks in ocaml. ([HN](https://news.ycombinator.com/item?id=22020287))
- [prbnmcn-clustering](https://github.com/igarnier/prbnmcn-clustering) - Clustering with k-means, k-medoids & agglomerative clustering.
- [OCaNNL](https://github.com/lukstafi/ocannl) - OCaml Neural Networks Library with shape inference, MetaOCaml code generation.

## DB

- [Caqti](https://github.com/paurkedal/ocaml-caqti) - Cooperative-threaded access to relational data.
- [PostgreSQL-OCaml](https://github.com/mmottl/postgresql-ocaml) - PostgreSQL Bindings for OCaml.
- [postgres-protocol](https://github.com/anuragsoni/postgres-protocol) - IO independent postgres protocol implementation.
- [chamelon](https://github.com/yomimono/chamelon) - Small, simple block-backed key-value store for MirageOS.
- [ocaml_sql_query](https://github.com/yawaramin/ocaml_sql_query) - Functional-style SQLite queries for OCaml.
- [epiSQL](https://github.com/paurkedal/episql) - SQL schema parser and code generator.
- [PGX](https://github.com/arenadotio/pgx) - Pure OCaml PostgreSQL client library.
- [Sequoia](https://github.com/andrenth/sequoia) - Type-safe query builder for OCaml.
- [rel](https://github.com/dbuenzli/rel) - Relational database programming for OCaml.
- [tjr_kv](https://github.com/tomjridge/tjr_kv) - Key-value store for OCaml.
- [Petrol](https://github.com/Gopiandcode/petrol) - High-level OCaml API for interacting with SQL databases.

## Bindings

- [Python 3.5+ bindings for OCaml](https://github.com/zshipko/ocaml-py)

## CLI

- [Cmdliner](https://github.com/dbuenzli/cmdliner) - Declarative definition of command line interfaces for OCaml. ([Web](https://erratique.ch/software/cmdliner)) ([Cmdliner cheatsheet](https://github.com/mjambon/cmdliner-cheatsheet))
- [Notty](https://github.com/pqwy/notty) - Declarative terminal graphics for OCaml.
- [Progress](https://github.com/CraigFe/progress) - User-definable progress bars for OCaml.
- [Clap](https://github.com/rbardou/clap) - Command-Line Argument Parsing.

## Error

- [ppx_let_locs](https://github.com/EduardoRFS/ppx_let_locs) - Improving stack trace for let monadic.
- [pp_loc](https://github.com/Armael/pp_loc) - Provides support to additionally quote and highlight the input fragment the input that corresponds to a location (or a set of locations).
- [ppx_assert](https://github.com/janestreet/ppx_assert) - Assert-like extension nodes that raise useful errors on failure.

## GraphQL

- [ResGraph](https://github.com/zth/resgraph) - Build implementation-first GraphQL servers in ReScript.

## Graphics

- [Vg](https://github.com/dbuenzli/vg) - Declarative 2D vector graphics for OCaml.
- [unicorn](https://github.com/art-w/unicorn) - Purely functional GUI algebra.
- [ocaml-orx](https://github.com/orx/ocaml-orx) - OCaml bindings to the Orx game library.
- [chapgame](https://github.com/prekel/chapgame) - Physics engine based on a priori collision detection approach.
- [Phantom-algebra](https://github.com/Octachron/phantom_algebra) - Small tensor library a la GLSL.
- [OCaml Canvas](https://github.com/OCamlPro/ocaml-canvas) - Portable Canvas framework for OCaml. ([Web](https://ocamlpro.github.io/ocaml-canvas/)) ([HN](https://news.ycombinator.com/item?id=33954958))

## Linux

- [ocaml-uring](https://github.com/ocaml-multicore/ocaml-uring) - Bindings to io_uring for OCaml.

## Crypto

- [Cryptokit](https://github.com/xavierleroy/cryptokit) - Library of cryptographic primitives (ciphers, hashes, etc) for OCaml.
- [JOSE](https://github.com/ulrikstrid/ocaml-jose) - JavaScript Object Signing and Encryption.

## Other

- [OCamlbuild](https://github.com/ocaml/ocamlbuild) - Generic build tool, that has built-in rules for building OCaml library and programs.
- [ocaml-vdom](https://github.com/LexiFi/ocaml-vdom) - Elm architecture and (V)DOM for OCaml.
- [Lwt](https://github.com/ocsigen/lwt) - OCaml promises and concurrent I/O.
- [higher](https://github.com/ocamllabs/higher) - Higher-kinded programming in OCaml.
- [GraphQL Servers in OCaml](https://github.com/andreas/ocaml-graphql-server) - Create GraphQL servers in OCaml.
- [piaf](https://github.com/anmonteiro/piaf) - Client library for HTTP/1.X / HTTP/2 written entirely in OCaml.
- [OCamlgraph](https://github.com/backtracking/ocamlgraph) - OCaml graph library.
- [luv](https://github.com/aantron/luv) - Minimalist binding to libuv from OCaml and Reason.
- [Nice Parser](https://github.com/smolkaj/nice-parser) - Nice parsers in OCaml without the boilerplate.
- [QCSTM](https://github.com/jmid/qcstm) - simple state-machine framework for OCaml based on QCheck.
- [deriving](https://github.com/ocaml-ppx/ppx_deriving) - Library simplifying type-driven code generation on OCaml.
- [OCamline](https://github.com/chrisnevers/ocamline) - Command line interface for user input.
- [OCaml Batteries Included](https://github.com/ocaml-batteries-team/batteries-included) - Community-maintained foundation library for your OCaml projects.
- [incremental](https://github.com/janestreet/incremental) - Library for incremental computations.
- [Landmarks](https://github.com/LexiFi/landmarks) - Simple Profiling Library for OCaml.
- [pfff](https://github.com/returntocorp/pfff) - Set of tools and APIs to perform static analysis, code visualizations, code navigations, or style-preserving source-to-source transformations such as refactorings on source code.
- [ppx_stage](https://github.com/stedolan/ppx_stage) - Staged metaprogramming in stock OCaml.
- [Streaming](https://github.com/odis-labs/streaming) - Fast, safe and composable streaming abstractions. ([Announcement](https://discuss.ocaml.org/t/ann-first-release-of-streaming/5961))
- [cameleer](https://github.com/mariojppereira/cameleer) - Deductive Verification Tool for OCaml Programs.
- [Ppxlib](https://github.com/ocaml-ppx/ppxlib) - Base library and tools for ppx rewriters.
- [jsoo-react](https://github.com/jchavarri/jsoo-react) - Bindings to React for js_of_ocaml, including JSX ppx. Allows to use React from OCaml.
- [OByteLib](https://github.com/bvaugon/obytelib) - OCaml bytecode library tools. Useful to read, write and evaluate OCaml bytecode files.
- [bimage](https://github.com/zshipko/ocaml-bimage) - Composable image processing library for OCaml.
- [Lwd](https://github.com/let-def/lwd) - Lets you build values that changes over time.
- [Digestif](https://github.com/mirage/digestif) - Hash algorithms in C and OCaml.
- [directories](https://github.com/OCamlPro/directories) - OCaml library that provides configuration, cache and data paths.
- [Repr](https://github.com/mirage/repr) - Run-time representations of OCaml types.
- [OCaml-MPST](https://github.com/keigoi/ocaml-mpst) - Communication library powered by Multiparty Session Types (abbreviated as MPST) in OCaml.
- [eqaf](https://github.com/mirage/eqaf) - Constant time equal function.
- [Pp](https://github.com/ocaml-dune/pp) - Pretty printing library.
- [capnp-ocaml](https://github.com/capnproto/capnp-ocaml) - OCaml code generator plugin for the Cap'n Proto serialization framework.
- [TyXML](https://github.com/ocsigen/tyxml) - Build valid HTML and SVG documents.
- [parany](https://github.com/UnixJunkie/parany) - Parallelize any kind of computation.
- [Metrics](https://github.com/mirage/metrics) - Infrastructure to collect metrics from OCaml applications.
- [ocaml-mustache](https://github.com/rgrinberg/ocaml-mustache) - Mustache.js logic-less templates in OCaml.
- [ppx_optcomp](https://github.com/janestreet/ppx_optcomp) - Optional compilation for OCaml.
- [Session-ocaml](https://github.com/keigoi/session-ocaml) - Implementation of binary session types in OCaml.
- [brr](https://github.com/dbuenzli/brr) - Browser programming toolkit for OCaml.
- [Dyntype](https://github.com/samoht/dyntype) - Dynamic types for OCaml.
- [RML](https://github.com/dannywillems/RML) - ML modules and functors as first-class citizens.
- [VOCaL](https://github.com/vocal-project/vocal) - Verified OCaml Library.
- [Fmt](https://github.com/dbuenzli/fmt) - OCaml Format pretty-printer combinators.
- [awa-ssh](https://github.com/mirage/awa-ssh) - Purely functional SSH library in OCaml.
- [Fmlib](https://github.com/hbr/fmlib) - Functional Monadic Library for Ocaml.
- [eioio](https://github.com/ocaml-multicore/eioio) - Effects-based direct-style IO for multicore OCaml. ([0.1 release](https://discuss.ocaml.org/t/eio-0-1-effects-based-direct-style-io-for-ocaml-5/9298)) ([Lobsters](https://lobste.rs/s/wkzrxb/ocaml_multicore_eio_effects_based_direct))
- [RES](https://github.com/mmottl/res) - OCaml library for resizable arrays and strings.
- [Preface](https://github.com/xvw/preface) - Opinionated library designed to facilitate the handling of recurring functional programming idioms in OCaml.
- [OCaml Containers](https://github.com/c-cube/ocaml-containers) - Modular, clean and powerful extension of the OCaml standard library.
- [vec](https://github.com/aionescu/vec) - Fast, safe mutable dynamic arrays for OCaml.
- [um-abt](https://github.com/shonfeder/um-abt) - OCaml library implementing abstract binding trees (ABTs).
- [ocaml-stun](https://github.com/patricoferris/ocaml-stun) - Pure OCaml implementation of the Session Traversal Utilities for NAT (STUN) protocol (STUN).
- [ortac](https://github.com/ocaml-gospel/ortac) - OCaml Runtime Assertion Checking.
- [Bloomf](https://github.com/mirage/bloomf) - Efficient Bloom filters for OCaml.
- [Index](https://github.com/mirage/index) - Scalable implementation of persistent indices in OCaml.
- [ppx_effects](https://github.com/CraigFe/ppx_effects) - Syntax extensions for untyped effects in OCaml 5.
- [kv-hash](https://github.com/tomjridge/kv-hash) - Key Value store using a persistent hashtable approach.
- [DAI](https://github.com/cuplv/dai) - Demanded Abstract Interpretation.
- [field_repr](https://github.com/CraigFe/field_repr) - Efficient run-time representations of OCaml record fields.
- [CacheCache](https://github.com/pascutto/cachecache) - Efficient caching library for OCaml.
- [ocaml-extlib](https://github.com/ygrek/ocaml-extlib) - Extended Standard Library for OCaml.
- [MParser](https://github.com/murmour/mparser) - Simple monadic parser combinator library for OCaml.
- [futurama](https://github.com/ghuysmans/futurama) - Finite permutation library with an optimizing compiler.
- [algebra](https://github.com/ghuysmans/algebra) - Definitions for common algebraic structures.
- [ocaml-lp](https://github.com/ktahar/ocaml-lp) - Helps the modeling of Linear Programming (LP) and Mixed Integer Programming (MIP) in OCaml.
- [ppx_regexp](https://github.com/paurkedal/ppx_regexp) - Matching Regular Expressions with OCaml Patterns.
- [Shuttle](https://github.com/anuragsoni/shuttle) - Buffered channels for async.
- [Poll](https://github.com/anuragsoni/poll) - Portable OCaml API to poll file descriptors for IO readiness. Supports kqueue and epoll for now.
- [ART](https://github.com/dinosaure/art) - Adaptive Radix Tree in OCaml.
- [Avro](https://github.com/c-cube/ocaml-avro) - Runtime library and schema compiler for the Avro serialization format.
- [CMON](https://github.com/let-def/cmon) - Library for printing OCaml values with sharing.
- [Equinoxe](https://github.com/maiste/equinoxe) - Equinix API client library for OCaml.
- [ocaml_plugin](https://github.com/janestreet/ocaml_plugin) - Automatically build and dynlink OCaml source files.
- [Lwt Pipe](https://github.com/c-cube/lwt-pipe) - Multi-consumer, multi-producers blocking queue and stream for Lwt.
- [sedlex](https://github.com/ocaml-community/sedlex) - Unicode-friendly lexer generator for OCaml.
- [Compact](https://github.com/CraigFe/compact) - Memory-efficient data structures in OCaml.
- [PaComb](https://github.com/craff/pacomb) - Parsing library that compiles grammars to combinators using elimination of left recursion.
- [PPrint](https://github.com/fpottier/pprint) - Pretty-Printing Toolbox.
- [Multicont](https://github.com/dhil/ocaml-multicont) - Continuations with multi-shot semantics in OCaml.
- [ExtUnix](https://github.com/ygrek/extunix) - OCaml bindings to various low-level system APIs not covered by Unix module.
- [ocaml-arrow](https://github.com/LaurentMazare/ocaml-arrow) - OCaml bindings for Apache Arrow using the C++ api.
- [ocaml-in-python](https://github.com/thierry-martinez/ocaml-in-python) - Effortless Python bindings for OCaml modules.
- [Yojson](https://github.com/ocaml-community/yojson) - Low-level JSON parsing and pretty-printing library for OCaml.
- [ATD](https://github.com/ahrefs/atd) - Static types for JSON APIs.
- [Biocaml](https://github.com/biocaml/biocaml) - OCaml Bioinformatics Library.
- [Iter](https://github.com/c-cube/iter) - Simple iterator abstract datatype, intended to iterate efficiently on collections while performing some transformations.
- [sosa](https://github.com/hammerlab/sosa) - Sane OCaml String API.
- [ocaml-stdint](https://github.com/andrenth/ocaml-stdint) - Various signed and unsigned integers for OCaml.
- [Current_incr](https://github.com/ocurrent/current_incr) - Self-adjusting computations.
- [hlist](https://github.com/keigoi/hlist-ocaml) - Heterogeneously-typed lists for OCaml.
- [ppx_import](https://github.com/ocaml-ppx/ppx_import) - Syntax extension that allows to pull in types or signatures from other compiled interface files.
- [Prime](https://github.com/paurkedal/ocaml-prime) - OCaml Library Supplements.
- [ADT rewriting](https://github.com/Drup/adtr) - Representing ADTs in a flat way and compiling a pattern match-like construction as a rewrite on the memory representation.
- [AlphaRegex](https://github.com/kupl/AlphaRegexPublic) - Synthesizer for regular expressions.
- [py.ml](https://github.com/thierry-martinez/pyml) - OCaml bindings for Python.
- [Affect](https://github.com/dbuenzli/affect) - Composable concurrency primitives with OCaml effects handlers.
- [Depyt](https://github.com/samoht/depyt) - Type combinator library.
- [ocaml-websocket](https://github.com/vbmithr/ocaml-websocket) - Websocket library for OCaml.
- [ORaft](https://github.com/komamitsu/oraft) - Library of Raft consensus algorithm implemented in OCaml.
- [ocaml-mpsc](https://github.com/haesbaert/ocaml-mpsc) - Lockless Multiple Producer Single Consumer Queue for ocaml-multicore.
- [Charset](https://github.com/yallop/ocaml-charset) - Fast char sets.
- [OCaml gRPC](https://github.com/dialohq/ocaml-grpc)
- [lockfree](https://github.com/ocaml-multicore/lockfree) - Lock-free data structures for multicore OCaml.
- [Backward Lists](https://github.com/RedPRL/ocaml-bwd) - Defines backward lists that are isomorphic to lists.
- [bistro](https://github.com/pveber/bistro) - Library to build and execute typed scientific workflows.
- [domainslib](https://github.com/ocaml-multicore/domainslib) - Parallel Programming over Multicore OCaml.
- [Conformist](https://github.com/oxidizing/conformist) - Schema definition and validation with support for decoding to bridge the gap between runtime types and static types.
- [ocaml-crunch](https://github.com/mirage/ocaml-crunch) - Convert a filesystem into a static OCaml module.
- [Ocaml protoc plugin](https://github.com/issuu/ocaml-protoc-plugin)
- [ocaml-rust](https://github.com/LaurentMazare/ocaml-rust) - Safe OCaml-Rust Foreign Function Interface.
- [shared-block-ring](https://github.com/mirage/shared-block-ring) - Simple on-disk fixed length queue.
- [ocaml-protoc](https://github.com/mransan/ocaml-protoc) - Protobuf Compiler for OCaml.
- [Diskuv Box](https://github.com/diskuv/diskuvbox) - Basic, cross-platform set of commands to manipulate and query the file system.
- [raylib-ocaml](https://github.com/tjammer/raylib-ocaml) - OCaml bindings for raylib, a simple and easy-to-use library to enjoy video games programming.
- [ocplib-json-typed](https://github.com/OCamlPro/ocplib-json-typed) - Libraries for reliable manipulation JSON objects.
- [ocaml-alg](https://github.com/smimram/ocaml-alg) - Algebraic structures in OCaml.
- [Kai](https://github.com/RedPRL/kai) - Library for handling compiler diagnostics and span-associated metadata.
- [midi](https://github.com/lelomtf/midi) - Experimenting with midi in OCaml.
- [gen_js_api](https://github.com/LexiFi/gen_js_api) - Easy OCaml bindings for JavaScript libraries.
- [metapp](https://github.com/thierry-martinez/metapp) - Meta-preprocessor for OCaml.
- [Ego](https://github.com/verse-lab/ego) - EGraphs in OCaml.
- [Bindoj](https://github.com/kxcdev/bindoj) - Generative datatype toolkit for OCaml centric workflows.
- [Algebraic Effect](https://github.com/songyahui/AlgebraicEffect) - Effects system for continuation.
- [metadata](https://github.com/savonet/ocaml-metadata) - Library to read metadata from files in various formats.
- [Tensority](https://github.com/Octachron/tensority) - Strongly typed multidimensional array library for OCaml.
- [ocaml-optics](https://github.com/geocaml/ocaml-optics) - Monomorphic optics using existentials.
- [ppx_viewpattern](https://github.com/sim642/ppx_viewpattern) - Transformation for view patterns in OCaml.
- [mcavl](https://github.com/art-w/mcavl) - Lock-free Sets and Maps for OCaml multicore.
- [imagelib](https://github.com/rlepigre/ocaml-imagelib) - Imagelib library implements image formats such as PNG or PPM.
- [Bindlib](https://github.com/rlepigre/ocaml-bindlib) - Efficient binder representation in OCaml.
- [ocaml-earley](https://github.com/rlepigre/ocaml-earley) - Parsing library based on Earley Algorithm.
- [Accessor](https://github.com/janestreet/accessor) - Library that makes it nicer to work with nested functional data structures.
- [Cinaps](https://github.com/ocaml-ppx/cinaps) - Trivial Metaprogramming tool using the OCaml toplevel.
- [loko-ml](https://github.com/polytypic/loko-ml) - Lower-Kinded Optics for OCaml.
- [Tyre](https://github.com/Drup/tyre) - Typed Regular Expressions.
- [agrep](https://github.com/xavierleroy/ocamlagrep) - String searching with errors, using the Wu-Manber algorithm.
- [OCaml macros](https://github.com/modular-macros/ocaml-macros)
- [Shexp](https://github.com/janestreet/shexp) - Process library and s-expression based shell.
- [Timere](https://github.com/daypack-dev/timere) - OCaml date time handling and reasoning suite.
- [stramon](https://github.com/darrenldl/stramon) - Strace based program behavior monitor/analyzer.
- [pixeldrift](https://github.com/dbuenzli/pixeldrift) - Find perceptible pixel differences with OCaml.
- [Parmap](https://github.com/rdicosmo/parmap) - Minimalistic library allowing to exploit multicore architecture for OCaml programs with minimal modifications.
- [serde.ml](https://github.com/ostera/serde.ml) - Serialization framework for OCaml.
- [Confero](https://github.com/paurkedal/confero) - Unicode collation library for OCaml.
- [ppx_let](https://github.com/janestreet/ppx_let) - Monadic let-bindings.
- [ezgzip](https://github.com/hcarty/ezgzip) - Simple gzip (de)compression library.
- [Stores](https://github.com/fpottier/stores) - OCaml library that offers several implementations of (in-memory) stores.
- [Logger](https://github.com/prosyslab/logger) - Library logger.
- [Combo](https://github.com/4y8/combo) - Simple parser combinator library for Ocaml.
- [ocaml-search](https://github.com/patricoferris/ocaml-search) - Simple, in-memory, monomorphic and heterogeneous search indexes in OCaml.
- [Decompress](https://github.com/mirage/decompress) - Pure OCaml implementation of Zlib.
- [Idle-Domains](https://github.com/polytypic/idle-domains) - Co-operative allocation of domains for OCaml.
- [talaria_bibtex](https://github.com/Octachron/talaria_bibtex) - Bibtex file parser.
- [Mmap](https://github.com/deepin-community/ocaml-mmap) - Functions for mapping files in memory.
- [PCRE-OCaml](https://github.com/mmottl/pcre-ocaml) - Perl Compatibility Regular Expressions for OCaml.
- [kcas](https://github.com/ocaml-multicore/kcas) - Multi-word compare-and-swap library.
- [ctypes](https://github.com/yallop/ocaml-ctypes) - Library for binding to C libraries using pure OCaml.
- [refl](https://github.com/thierry-martinez/refl) - Efficient and type-safe type reflection for OCaml.
- [radixmap](https://github.com/paurkedal/ocaml-radixmap) - Map a la Binary Radix Tree.
- [ocaml-iomux](https://github.com/haesbaert/ocaml-iomux) - IO multiplexers bindings for ocaml (poll/kqueue/epoll and so on).
- [OTOML](https://github.com/dmbaturin/otoml) - TOML parsing, manipulation, and pretty-printing library for OCaml.
- [Bitstring](https://github.com/xguerin/bitstring) - Bitstring matching for OCaml.
- [Gen](https://github.com/c-cube/gen) - Simple, efficient iterators for OCaml.
- [Format-doc](https://github.com/Octachron/format-doc) - Alternative interpreter for OCaml format strings.
- [Distrproc](https://github.com/darrenldl/distrproc) - Erlang style process/actor model library in OCaml.
- [pyre-ast](https://github.com/grievejia/pyre-ast) - OCaml library to parse Python files.
- [deque](https://github.com/art-w/deque) - Purely Functional, Real-Time Deques with Catenation (Kaplan & Tarjan).
- [Lwt_eio](https://github.com/ocaml-multicore/lwt_eio) - Use Lwt libraries from within Eio.
- [Kqueue](https://github.com/anuragsoni/kqueue-ml) - OCaml bindings to kqueue.
- [Typegist](https://github.com/dbuenzli/typegist) - Reflect the essence of OCaml types as values.
- [CFG](https://github.com/mmottl/cfg) - OCaml library for manipulating context-free grammars.
- [prettree](https://github.com/art-w/prettree) - Pretty tree layout with an applicative functor.
- [ocaml-qdrant](https://github.com/tmattio/ocaml-qdrant) - OCaml client for Qdrant vector search engine.
- [signal](https://github.com/rizo/signal) - Reactive signals for OCaml.
- [Trace](https://github.com/c-cube/trace) - Common interface for tracing/instrumentation libraries in OCaml.

## Links

- [OPAM packages](http://opam.ocaml.org/packages/)
- [dune-deps](https://github.com/mjambon/dune-deps) - Show the internal dependencies in your OCaml/Reason/Dune project.
- [dune-release](https://github.com/ocamllabs/dune-release) - Tool to streamline the release of Dune packages in opam.
- [opam-dune-lint](https://github.com/ocurrent/opam-dune-lint) - Ensure dune and opam dependencies are consistent.
- [Sherlocode](https://sherlocode.com/) - Search across 17 million lines of OCaml available on opam using grep. ([Code](https://github.com/art-w/sherlocode))
- [Camlidl](https://github.com/xavierleroy/camlidl) - Stub code generator for OCaml/C interface.
- [Reusable Effect-Based Components](https://github.com/RedPRL/algaeff)
- [opam-nix](https://github.com/tweag/opam-nix) - Turn opam-based OCaml projects into Nix derivations. ([Article](https://www.tweag.io/blog/2023-02-16-opam-nix/))
- [Esperanto](https://github.com/dinosaure/esperanto) - Build-once run-anywhere OCaml programs.
- [opam-ci](https://github.com/ocurrent/opam-repo-ci) - OCurrent pipeline for testing submissions to opam-repository.
- [opam2nix](https://github.com/timbertson/opam2nix) - Generate nix expressions from opam packages.
- [Networking experiments with OCaml 5's effects](https://github.com/TheLortex/networking-experiments)
- [metaquot](https://github.com/thierry-martinez/metaquot) - OCaml syntax extension for quoting code.
- [Effectful OCaml with Objects and Variants](https://github.com/polytypic/rea-ml)
- [Sherlodoc](https://doc.sherlocode.com/) - Fuzzy search in OCaml's documentation for almost all opam packages. ([Code](https://github.com/art-w/sherlodoc))
- [Nomad](https://github.com/shonfeder/nomad) - Tiny, minimally-functional project management tool for OCaml.
- [ppx_expjs: generate transparent JavaScript from your OCaml (2022)](https://blog.skolem.com/ppx_expjs-generate-transparent-javascript-from-your-ocaml/)
- [Love Rust? Then OCaml's New Eio Library is for You (2022)](https://tarides.com/blog/2022-12-27-love-rust-then-ocaml-s-new-eio-library-is-for-you)
- [ocamlrep](https://github.com/facebook/ocamlrep) - Interop Ocaml and Rust code.
- [LinOCaml](https://github.com/keigoi/linocaml) - Lightweight, monad-based linear types in OCaml, with a few syntax extensions.
- [OCaml PPX Template](https://github.com/johnyob/ppx-template)
- [Solver Service](https://github.com/ocurrent/solver-service) - OCurrent service for solving opam dependencies.
- [Yoshi](https://github.com/tmattio/yoshi) - Convert Markdown and YAML Data to OCaml Modules.
- [Petrol: embedding a type-safe SQL API in OCaml using GADTs (2023)](https://gopiandcode.uk/logs/log-ways-of-sql-in-ocaml.html)
- [Docs CI](https://github.com/ocurrent/ocaml-docs-ci) - CI building documentation for all versions of all packages.
- [Melange OPAM template](https://github.com/melange-re/melange-opam-template)
