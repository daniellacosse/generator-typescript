# <%= displayTitle %> [![CircleCI](https://circleci.com/gh/<%= username %>/<%= title %>.svg?style=svg)](https://circleci.com/gh/<%= username %>/<%= title %>)

[![documentation](https://img.shields.io/badge/documentation-blue.svg)](https://github.com/<%= username %>/<%= title %>/tree/master/documentation#<%= title %>-documentation) [![npm version](https://badge.fury.io/js/%40<%= username %>%2F<%= title %>.svg)](https://badge.fury.io/js/%40<%= username %>%2F<%= title %>)

> before you get started, you'll need `brew`: [ [macos](https://brew.sh/) | [linux](https://docs.brew.sh/Homebrew-on-Linux) ]

## commands

### `default`

```sh
make
```

### `branch` :  start a new branch

```sh
make branch NAME=<your-branch>
```

### `lint` : run the linter

```sh
make lint
```

### `test` : run the unit tests

```sh
make test
```

### `watch` : automatically re-run the tests as you make edits

```sh
make watch
```

### `coverage` : check if you have sufficient test coverage

```sh
make coverage
```

### `ci` : debug a continuous integration job locally

```sh
make ci JOB=<your-circleci-job>
```

**JOB options**

 - `build`
 - `list`
 - `test`
 - `coverage`
 - `release_patch` - ⚠️ runs `make release!` _this won't work w/o an SSH key._

### ⚠️ `release!` : publishes a release!!! **BE CAREFUL**

```sh
make release!
```

### ⚠️ `flush-*!` : clears out generated files!! **BE CAREFUL**

```sh
# clears out all temporary files
make flush-cache!
```

 - `flush-deps!` - clears out dependency locks. **forces all your dependencies to reinstall.**
 - `flush-build!` - clears the build. **forces the api to rebuild**
 - `flush-docs!` - destroys all the docs so they can be rebuilt
 - `flush-ci!` - destroys the local ci config
 - `flush-coverage!` - deletes the last coverage report
 - `flush-cache!` - clears out all temporary files
 - `flush-all!` - clears all generated files
