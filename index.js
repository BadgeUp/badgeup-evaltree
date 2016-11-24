'use strict';

// Recursively traverses an evalTree (criteria tree), performing an arbitrary function
// schema like so:
// {
//     type: 'group',
//     condition: 'AND',
//     criteria: [],
//     groups: [] // more of this schema
// }
function traverseEvalTree(group, fn) {
    // extract and keep only the id
    if (group && fn) {
        fn(group);
    }

    // BASE CASE
    if (!group || !group.groups || !group.groups.length) {
        return;
    }

    for (let nested of group.groups) {
        traverseEvalTree(nested, fn);
    }
}

exports.traverseEvalTree = traverseEvalTree;