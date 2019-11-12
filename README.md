# Salty Dog Out-of-Tree Example

This is an example rule module for [the Salty Dog YAML validator](https://github.com/ssube/salty-dog).

## What is an out-of-tree rule module?

A fancy term for plugins, version-controlled and built on their own.

Rule modules are `require`d by salty-dog while loading rules. They can be installed globally or locally,
using normal Node module resolution.

## How do schema definitions work?

As normal rule sources, rule modules can provide a `definitions` property that will be added to Ajv as
a schema, named after the rule module.

## How do rules work?

Rules must be an instance of a class with `pick` and `visit` methods, or an object with the same.

When https://github.com/ssube/salty-dog/issues/113 is implemented, rules will have a `type` property and
be instantiated through a DI container, rather than in the module exports.

## How are rule modules loaded?

Pass `--rule-module salty-dog-oot-example` along with any `--rule-file` or `--rule-path` options. Rules
still need to be included by level, name, or tags.
