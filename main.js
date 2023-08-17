const home = {
  p: [
    {
      id: 1,
      title: "Cotton T-shirt",
      price: 64,
      brand: "adidas",
      category: "T-Shirt",
      thumbnail: "https://www.sportsdirect.com/images/products/59592640_l.jpg",
    },
    {
      id: 2,
      title: "Tennis T-shirt",
      price: 59,
      brand: "adidas",
      category: "T-Shirt",
      thumbnail:
        "https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/h/t/ht7207_bleu_6.jpg",
    },
    {
      id: 3,
      title: "Golf T-shirt",
      price: 70,
      brand: "adidas",
      category: "T-Shirt",
      thumbnail:
        "https://www.function18.com/cdn/shop/files/adidas-Golf-Aerial-Jacquard-Shirt-HZ0442-1_900x.progressive.jpg?v=1690464691",
    },
  ],
};

const item1 = document.querySelector(".cart1");
const cart = document.querySelector("#cart");
const goods = document.querySelector(".prek");

item1.innerHTML += `<div class="pr"><p>Shopping Cart</p><span>3 items</span></div>
<div class="prek"></div><a href="#"id="back"onclick="zero()"><img src="arrow.png" alt=""> Back to shop</a>`;
let pq = [0, 0, 0];
let totalPrice = 0;
function showList() {
  let html = "";
  pq = [0, 0, 0];
  
  for (let i = 0; i < 3; i++) {
    const title = home.p[i].title;
    const cat = home.p[i].category;
    const price = home.p[i].price;

    const image = home.p[i].thumbnail;
    const brand = home.p[i].brand;
    totalPrice += home.p[i].price * pq[i];
    html += `
     <div id="prek1">
      <img src="${image}"  alt="">
      <div id="name"><p id="category">${cat}</p><p id="title">${title}</p><p id="title">${brand}</p></div>
      <div class="page"><button id="minus${i}" onclick="itemQuantityM(${i})">-</button> 
      <button id="qt" class="qty${i}">0</button>  
      <button id="plus${i}" onclick="itemQuantityP(${i})">+</button></div>
      <p id="price">€${price}</p>
      <button id="cross"onclick="delItem(event)"><img src="x-circle.svg"class="crs" alt=""></button> </div><hr>`;

    document.querySelector(".prek").innerHTML = html;
  }
}
showList();

function delItem(e) { 
 if( e.target.parentElement.parentElement.remove())totalPrice = totalPrice - home.p[i].price * pq[i];
}


const d = [" ", 5, 8, 0];

const item2 = document.querySelector(".cart2");

item2.innerHTML += `<div class="forms"><h2>Summary</h2><hr> 
<div class="sp1"><p>ITEMS3</p><p id="total">€${totalPrice}.00</p> </div>
<h3 class="ship">SHIPPING</h3><div class="input-group">
<select class="form-select" id="inputGroupSelect04"
 aria-label="Example select with button addon" onchange="updateTotalPrice()">

  <option value="1">${d[0]} </option>
  <option value="2">DPD express - €${d[1]}.00 </option>
  <option value="3">Parcel pickup - €${d[2]}.00 </option>
  <option value="4">Standart-Delivery - €${d[3]}.00 </option>
</select>

</div><h3 class="giv">GIVE CODE</h3>
<input class="code2"type="text" placeholder="Enter your code                                              &rarr;" onchange="updateTotalPrice()" >
<div class="line"></div>
<div class="sp"><p class"ice">TOTALPRICE</p><p id="total1">€${totalPrice}.00</p></div>
<button id="cout">CHECKOUT</button> </div>`;
const cd = document.querySelector(".code2");

function itemQuantityP(index) {
  let q = document.querySelector(`.qty${index}`);
  let prev = document.querySelector(`#minus${index}`);

  pq[index]++;
  q.innerText = pq[index];

  if (pq[index] > 0) {
    prev.removeAttribute("disabled");
  }totalPrice += home.p[index].price;
  updateTotalPrice();
}

function itemQuantityM(index) {
  let q = document.querySelector(`.qty${index}`);
  let prev = document.querySelector(`#minus${index}`);

  if (pq[index] > 0) {
    pq[index]--;
    q.innerText = pq[index];
  }

  if (pq[index] === 0) {
    prev.setAttribute("disabled", true);
  }totalPrice -= home.p[index].price;
  updateTotalPrice();
}

function calcTotalPrice(q) {
  const delivCost = d[q];
  const totalWithDlv = totalPrice + delivCost;
  return totalWithDlv;
}

function updateTotalPrice() {
  const ind = document.getElementById("inputGroupSelect04").selectedIndex;
  const totalWithDlv = calcTotalPrice(ind);
  document.getElementById("total1").textContent = `€${totalWithDlv}.00`;
  document.getElementById("total").textContent = `€${totalPrice}.00`;
  const discountInput = document.querySelector(".code2").value;

  if (discountInput === "FULLSTACK") {
    const totalWithDsc = Math.round((totalWithDlv / 100) * 90);
    document.querySelector("#total1").textContent = `€${totalWithDsc}.00`;
  }
}

updateTotalPrice();
function zero(){pq = [0, 0, 0];
  document.getElementById("total1").textContent = `€0.00`;
  document.getElementById("total").textContent = `€0.00`;
}