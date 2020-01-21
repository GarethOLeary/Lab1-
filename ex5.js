/* ex 5a
function wordCount(word:string): number{
    let count : number = word.length;
    return count;
}

let myCount:number = wordCount("test 1");
console.log(myCount);
*/
// ex5 b
function wordCount(word) {
    var count = word.replace(/\s/g, "").length;
    return count;
}
var myCount = wordCount("test 1");
console.log(myCount);
