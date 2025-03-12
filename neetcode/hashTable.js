class HashTable{
    constructor (){
        this.table = {};
    }
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
          hashValue += key.charCodeAt(i);
        }
        return hashValue % 37;
    }
    set (key,value){
        const index = this.hash(key);
        this.table[index] = value;
    };
    get (key) {
        const index = this.hash(key);
        return this.table[index];
    };
    remove (key) {
        const index = this.table[key];
        delete this.table[index]
    }
}
const hashTable = new HashTable();
hashTable.set('Oleg', 915);
hashTable.set('Max', 909);
hashTable.set(666, 'Masha');
console.log(hashTable.get('Max'));
console.log(hashTable.get(666));
hashTable.remove(666);
console.log(hashTable);
debugger;