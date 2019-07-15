# <%= displayTitle %> [![CircleCI](https://circleci.com/gh/<%= username %>/<%= title %>.svg?style=svg)](https://circleci.com/gh/<%= username %>/<%= title %>)

[![documentation](https://img.shields.io/badge/documentation-blue.svg)](https://github.com/<%= username %>/<%= title %>/tree/master/documentation#<%= title %>-documentation) [![npm version](https://badge.fury.io/js/%40<%= username %>%2F<%= title %>.svg)](https://badge.fury.io/js/%40<%= username %>%2F<%= title %>)

> before you get started, you need `brew`: <br>
> [install on mac](https://brew.sh/) | [install on linux](https://docs.brew.sh/Homebrew-on-Linux)

## commands

### `default`

```sh
make
```

### `lint` : run the linter

```sh
make lint
```

### `test` : run the unit tests

```sh
make test
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

### ⚠️ `reset!` : clears out all temporary generated files!! **BE CAREFUL**


```sh
make reset!
```
