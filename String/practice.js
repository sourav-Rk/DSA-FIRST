    //recursive function to remove character
    function removeCharacter(str,char){
        if(str.length === 0) return
        let firstChar = str[0] === char ? "" : str[0] 
        return firstChar +removeCharacter(str.slice(1),char)
    }

    //optimized way to remove a character
    function removeChar(str,char){
        return str.split(char).join("")
    }

    //recursively reverse a string
    function reverseString(str){
        if(str.length ===0) return ""
        return reverseString(str.slice(1)) + str[0]
    }


    //recursive reverse optimized (o(n))
    function reverse(str,index = str.length-1,arr=[]){
        if(index < 0) return arr.join("")
        arr.push(str[index])
        return reverse(str,index-1,arr)
    }

    console.log(reverse("sourav"))
