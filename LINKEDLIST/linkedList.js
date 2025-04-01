//Node constructor
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

//linked list constructor
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    //print the list
    print(){
        if(this.isEmpty()) console.log("Empty list")
        let current = this.head;
        while(current){
            console.log(current.value)
            current = current.next
        }
    }


    
    //add node at the beginnig
    prepend(value){
        const node = new Node(value);
        if(!this.isEmpty()) node.next = this.head
        this.head = node
        this.size ++
    }

    //add node at the end
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    //insert a node
    insert(value,index){
        if(index<0 || index > this.size) {
            console.log('please enter a valid index')
            return
        }
        else if(index === 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value);
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    //remove a node form list
    removeFrom(index){
        if(index < 0 || index  > this.size){
            console.log("please enter a valid index")
            return
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
          
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
               prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
       
        }
        this.size --
        return removedNode.value   
    }

    //to remove a value from the list
    removeValue(value){
        if(this.isEmpty()) return null
        if(this.head.value === value) {
            this.head = this.head.next
            return value
        }
        else{
            let removedNode;
            let prev = this.head;
            while(prev.next && prev.next.value !==value){
                prev = prev.next
            }
            if(!prev.next){
                console.log("value doesnt exist in the list")
                return null
                
            }
            removedNode = prev.next
                prev.next = removedNode.next
                return value
        }
        this.size--
    }

    //search by a value
    search(value){
        if(this.isEmpty()){
            console.log("list is empty")
            return null
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //to reverse the linked list
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    //to print elements in reverse order
    reverseOrder(){
        const arr = []
        let curr = this.head
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        console.log(arr.reverse().join("->") +"->null")
    }

    //to print elements in reverse order using recursion
    printReverseRecursive(node = this.head){
        if(!node)return
        this.printReverseRecursive(node.next)
        process.stdout.write(node.value+"->")
        if(node === this.head) console.log("null")
    }

    //to create linked list from an array
    fromArray(arr){
        if(arr.length === 0)return
        this.head = new Node(arr[0])
        this.size = 1
        let curr = this.head
        for(let i =1; i<arr.length;i++){
            curr.next = new Node(arr[i])
            this.size++
            curr = curr.next
        }
    }

    //to remove duplicate from a linked list
    removeDuplicate(){
       if(this.isEmpty())return
       let curr = this.head
       while(curr && curr.next){
         if(curr.value === curr.next.value){
            curr.next = curr.next.next
            this.size--
         }else{
            curr = curr.next
         }
       }
    }

    //to remove the middle node (two pointer (slow and fast))
    removeMiddle(){
        if(!this.head || !this.head.next){
            this.head = null
            return
        }
        
        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }


    isEmpty(){
        return this.size ===0
    }
    
    getSize(){
        return this.size
    }
}

const list = new LinkedList()
list.prepend(9)
list.prepend(8)
list.prepend(7)
list.append(10)
list.print()