
class Singleton{
    constructor(){
        this.instance;
    }
    createInstance(){
        var object = new Object("I am the instance");
        return object
    }
    getInstance(){
        if (!this.instance) {
                this.instance = this.createInstance();
            }
            return this.instance;
    }
}
 
function main() {
    var single = new Singleton()
    var instance1 = single.getInstance();
    var instance2 = single.getInstance();
 
    console.log("Same instance? " + (instance1 === instance2));  
}
main();