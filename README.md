bench build tools
=====

benchmark for build tools

### webpack

web is pretty good but does to much for my uses, it lets you compile css and add other
plugins but I just want fast script I can run that compiles my CommonJS files


### browserify

browserify compiles your CommonJS files into one file but for me it was unbearable slow


### comn

comn compiles your CommonJS files into one file or multiple depending on if you use async
requires or not and does this the fastest of the three compilers

### benchmark

run benchmark with
```bash
$ npm run bench
```

results on my machine

```bash
= build tools bench ======================
comn x 336 ops/sec ±5.96% (39 runs sampled)
webpack x 159 ops/sec ±46.69% (70 runs sampled)
browserify x 44.64 ops/sec ±13.09% (62 runs sampled)
Fastest is comn
==========================================

```
