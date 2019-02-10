console.log('No 1=============================')
var ABbCcc=(str)=>{
    var hasil=''
    var arrStr=str.split('')
    for(i=0;i<arrStr.length;i++){
        for(j=0;j<=i;j++){
            if(j==0){
                hasil+=arrStr[i].toUpperCase()
            }
            else {
                hasil+=arrStr[i].toLowerCase()
            }
        }
        hasil+='-'
    }
    hasil=hasil.slice(0,(hasil.length-1))
    return hasil
}
console.log(ABbCcc("abcdef"))
console.log('No 2=============================')
var duplikatFilter=(arr,func)=>{
    var hasil = []
    for(i=0;i<arr.length;i++){
        if(func(arr[i])==true){
            hasil.push(arr[i])
        }

        
    }
    return hasil
}
var b =[4,1,3,2,5]
console.log(duplikatFilter(b,function(val){return val !==2}))

console.log('No 3=============================')
var sortDup=(arr,func)=>{
    
    for(i=0;i<arr.length;i++){
        for(var j=(i+1);j<arr.length;j++){
            if(func(arr[i],arr[j])>0){
                var temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp 
            }
    }
}
return arr
}

var c =[100,20,3]
console.log(sortDup(c,function(c,b){return c-b}))