class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    //print
    print(){
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues+=`${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
    
    //print reverse
    printReverse(){
        let curr = this.tail
        let listValues =""
        while(curr){
            listValues+=`${curr.value} `
            curr = curr.prev
        }
        console.log(listValues)
    }
    
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
       
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
             this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    
    //remove node from front
    removeFromFront(){
        if(this.isEmpty()) return
        this.head = this.head.next
        this.size--
    }
    
    //remove node from end
    removeFromEnd(){
        if(this.isEmpty())return
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
    }

    //delete a value
    delete(value){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        else if(this.head.value === value){
            this.head = this.head.next
            this.head.prev = null
            this.size--
        }
        else{
            let curr = this.head
            while(curr.next && curr.next.value !==value){
                curr = curr.next
            }
            if(!curr.next){
                console.log("no value found in the list")
                return
            }
            else{
                let removedNode = curr.next
                if(removedNode === this.tail){
                    this.tail = curr
                    this.tail.next = null
                }
                else{
                    curr.next = removedNode.next
                    if(curr.next) curr.next.prev = curr
                }
            }
        }
        this.size--
    }

    deleteAtIndex(index){
        if(index < 0 || index >=this.size){
            console.log("enter a valid index")
            return
        }
        else if(index === 1){
            this.head = this.head.next;
            if(this.head) this.head.prev = null
            else this.tail = null
        }
        else if(index === this.size-1){
            this.tail = this.tail.prev
            this.tail.next = null
            return index
        }
        else{
            let curr = this.head;
            for(let i =0;i<index;i++){
                curr = curr.next
            }
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
        this.size--
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }
}

const list = new DoublyList()
list.prepend(3)
list.prepend(2)
list.prepend(1)
list.append(4)
list.append(5)
list.removeFromFront()
list.removeFromEnd()

list.print()
console.log(list.head.value)

