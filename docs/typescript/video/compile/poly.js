"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    get(key) {
        return this.storage[key];
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringsStorage = new LocalStorage();
stringsStorage.get('ddd');
