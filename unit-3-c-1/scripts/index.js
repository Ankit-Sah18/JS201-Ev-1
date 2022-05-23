//store the products array in localstorage as "products"

function Product(t,d,p,i)
{
   this.type=t;
   this.desc = d;
   this.price=p;
   this.image=i;
}

document.getElementById("products").addEventListener("submit",myFun);
let arr=JSON.parse(localStorage.getItem("products"))||[]
function myFun()
{
    event.preventDefault()

    let type=document.getElementById("type").value;
    let desc=document.getElementById("desc").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;

    let p= new Product(type,desc,price,image)

    // console.log(p)

    arr.push(p)

    localStorage.setItem("products",JSON.stringify(arr))

    document.getElementById("type").value=null;
    document.getElementById("desc").value=null;
    document.getElementById("price").value=null;

    document.getElementById("image").value=null;
}
