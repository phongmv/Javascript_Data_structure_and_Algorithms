class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }


    set(key, value){
        const address = this._hash(key)
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key){
        const address = this._hash(key)
        if(!this.data[address]) return undefined
        const currentBucket = this.data[address]
        for (const currentBucketElement of currentBucket) {
            return currentBucketElement[1]
        }
    }

    keys(){
        const keys = []
            for(let i = 0; i < this.data.length; i++){
                const bucket = this.data[i]
                if(bucket){
                    const [key, value] = this.data[i][0]
                    keys.push(key)
                }
            }
        return keys
    }


    values(){
        const values = []
        for (let i = 0 ; i < this.data.length; i++) {
            const bucket = this.data[i]
            if(bucket){
                const [key, value] = this.data[i][0]
                values.push(value)
            }
        }

        return values
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('Viet', 3001)
console.log(myHashTable.get('Viet'))




