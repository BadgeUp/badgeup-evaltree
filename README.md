# BadgeUp Achievement Evaluation Tree Helper
A package containing utility functions for working with [BadgeUp](https://www.badgeup.io/) achievement evaluation trees. Targets compatibility with all LTS versions of Node.js. These versions can be found in `.travis.yml`.

[![Build Status](https://travis-ci.org/BadgeUp/badgeup-evaltree.svg?branch=master)](https://travis-ci.org/BadgeUp/badgeup-evaltree)

## API

 * `traverseEvalTree(tree, function)`: Recursively traverses an evalTree (criteria tree), executing the passed function
