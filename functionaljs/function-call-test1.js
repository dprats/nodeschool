var o = { x: 15 };
 
function f1(message1)
{
    console.log(message1 + this.x);
}
 
function f2(message1, message2)
{
    console.log(message1 + (this.x * this.x) + message2);
}
 
function g(object, func, args)
{
    func.apply(object, args);
}
 
g(o, f1, ["the value of x = "]); 

g(o, f2, ["the value of x squared = ", ". Wow!"]); //


