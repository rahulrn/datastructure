class HashTable {
  constructor() {
    this.values = {};
    this.length =  0;
    this.size =  5;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
}

const ht = new HashTable();

ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");
ht.add("India", "500");


console.log(ht.search("India"));