'use strict';

// Recursively traverses an evalTree (criteria tree), performing an arbitrary function
// schema like so:
// {
//     type: 'group',
//     condition: 'AND',
//     criteria: [],
//     groups: [] // more of this schema
// }
function traverseEvalTree(group, fn, { depthFirst = false }) {
    // If recursing breadth-first, evaluate the function first before going deeper
    if (!depthFirst && group && fn) {
        fn(group);
    }

    // BASE CASE
    if (!group || !group.groups || !group.groups.length) {
        return;
    }

    for (let nested of group.groups) {
        traverseEvalTree(nested, fn);
    }

    // If recursing depth-first, evaluate the function after before going deeper
    if (depthFirst && group && fn) {
        fn(group);
    }
}

exports.traverseEvalTree = traverseEvalTree;
