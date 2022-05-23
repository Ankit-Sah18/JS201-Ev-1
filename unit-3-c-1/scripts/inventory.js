
  let takeData= JSON.parse(localStorage.getItem("products"))

  console.log(takeData);

  let append=document.getElementById("all_products")

  takeData.map(function(el,index){

       let div=document.createElement("div")
       let image=document.createElement("img")
       image.src=el.image;
       let type=document.createElement("h3")
       type.innerText=el.type;
       let desc=document.createElement("h4")
       desc.innerText=el.desc;
       let price=document.createElement("p")
       price.innerText=el.price;

       let remove=document.createElement("button")
       remove.innerText="Remove Product"

       remove.setAttribute("id","remove_product")

       remove.addEventListener("click",function(){

            ProductRemove(el,index)
       })

       div.append(image,type,desc,price,remove)

       append.append(div)


  })

  function ProductRemove(el,index)
  {
      takeData.splice(index,1)

      localStorage.setItem("products",JSON.stringify(takeData))

      window.location.reload()
  }