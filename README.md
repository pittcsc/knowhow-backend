Knowhow Backend
=================

Node.js backend for Knowhow using Express and MongoDB.

This project is an example of a Node.js REST API. It implements the
[JSON:API](http://jsonapi.org) spec, which allows the Ember Data library to
consume the API with limited configuration.

# Installation

## Dependencies

1. Node.js and NPM
- Gulp
- Vagrant (soon)

## Steps

1. Clone project
- `git submodule update --init`
- `npm install`
- Start MongoDB instance. If you need to run it through Vagrant (recommended)
  use [this project](https://github.com/bobthecow/vagrant-mongobox).  It was
  both easy to install and the only one that I found that actually worked.
- Profit

# Development

To start the development server, just run `npm start`


