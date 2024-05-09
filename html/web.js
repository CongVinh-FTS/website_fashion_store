// ------------thêm vào giỏ hàng-------------
const btn = document.querySelectorAll('#button')
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector('img').src
    var productName = product.querySelector("p").innerText
    var productPrice = product.querySelector("#monny2").innerText
    // console.log(productPrice)
    addcart(productImg,productName,productPrice)
}})
})

function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".name")
        if(productT[i].innerHTML==productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td class="img" style="display: flex;"><img style="width: 50px;" src="'+productImg+'" alt=""><p class="name">'+productName+'</p></td><td><span class="price">'+productPrice+'</span></td><td><input style="outline: none;" type="number" value="1" min="1"></td><td class="delete" style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}
// ----------hết thêm vào giỏ hàng--------------

// ----------tính tổng tiền----------

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
    
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
// --------hết tính tổng tiền------------

// ---------click vào giỏ hàng----------
const shopping = document.querySelector('.fa-bag-shopping')
const shoppingclose = document.querySelector('.fa-xmark')
console.log(shoppingclose)
shopping.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "flex"
})
shoppingclose.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "none"
})

// ------------hết click vào giỏ hàng----------

// -----------xóa cart-----------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement
            cartItemDelete.remove()
            carttotal()
        })
    }
}
// -------------hết cart---------------

// ---------tăng số lượng sản phẩm và tính lại tổng tiền------
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
// ---------hết tăng số lượng sản phẩm và tính lại tổng tiền------

// ------------thêm giỏ hàng item3-------

const btn3 = document.querySelectorAll('#buttonitem3')
// console.log(btn3)
btn3.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem3 = event.target
    var product3 = btnItem3.parentElement
    var productImg3 = product3.querySelector('img').src
    var productName3 = product3.querySelector("h3").innerText
    var productPrice3 = product3.querySelector("#price-item2").innerText
    // console.log(productPrice3)
    addcart(productImg3,productName3,productPrice3)
}})
})
// ------------ hết thêm giỏ hàng item3-------









