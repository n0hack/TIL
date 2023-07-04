"use strict";
function padLeft(value, padding) {
    if (typeof padding === 'string') {
        return padding + value;
    }
    else if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    else {
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
}
