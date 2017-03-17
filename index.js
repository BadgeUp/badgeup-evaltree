'use strict';

// Recursively traverses an evalTree (criteria tree), performing an arbitrary function
// schema like so:
// {
//     type: 'group',
//     condition: 'AND',
//     criteria: [],
//     groups: [] // more of this schema
// }
function traverseEvalTree(group, fn, options = {}) {
    const { depthFirst = false } = options;

    if (!group) {
        return;
    }

    // If recursing breadth-first, evaluate the function first before going deeper
    if (!depthFirst && group && fn) {
        fn(group);
    }

    for (let nested of (group.groups || [])) {
        traverseEvalTree(nested, fn, options);
    }

    // If recursing depth-first, evaluate the function after before going deeper
    if (depthFirst && group && fn) {
        fn(group);
    }
}

exports.traverseEvalTree = traverseEvalTree;
