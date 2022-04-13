// last in first out => Lifo
class Stack {
    constructor() {
        this.stack = [];
    }

    add(value) {
        this.stack.push(value);
    }
    
    remove() {
        this.stack.pop();
    }
}

const player = new Stack;
player.add('Sakib Al Hasan');
player.add('Tamim Iqbal');
player.remove();
console.log(player.stack);
