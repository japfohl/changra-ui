# Changra UI

A shameless ripoff of Chakra UI... for Angular!

# Projects

## changra-ui

This is the actual library project.

## cui-demo

This is the application demoing usage of the Changra UI Library.

# TODO

## General

1. Convert unit tests to Jest.
2. Configure spectator schematics.
3. Create a list of features from Chackra UI to map to this lib.
4. Claim / publish to npm 0.0.1 version of library.
5. Consider breaking down the library into separate chunks similar to how Chakra does things.
   - `@changra/core` defines the core stuff (_whatever that is_).
   - `@changra/styled` defines the styling system.
   - `@changra/utils` defines the utility decorators, hooks, etc... that make working wtih the library genrally useful.
   - `@changra/components` defines the components that leverage the other features of the library.
   - `@changra/<OTHER>` -- ??? 🤷🏻‍♂️

## `@changra/styled`

1. Finish mapping all base `@Input()` prop types from Chakra (should only map types that aren't constrained to a specific "component" type (AKA: `direction` should only be usable on `cuiFlex` whereas `flexDirection` should be usable anywhere))
2. Implement responsive breakpoints enabling user to provide an _array_ OR object as an input instead of a single value.
