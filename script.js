// ---------- MENU DROP-DOWN ----------
const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");
if (menuBtn && menuContent) {
  menuBtn.addEventListener("click", () => menuContent.classList.toggle("show"));
}

// ---------- MENU ITEMS ----------
const menuItems = [
  // -------------------- Ful & Feta --------------------
  {name:"ፉል ኖርማል", price:150},
  {name:"ፉል ኖርማል በቱና", price:200},
  {name:"ፉል ስፔሻል", price:170},
  {name:"ፉል ስፔሻል በቱና", price:250},
  {name:"ፈታ ኖርማል", price:170},
  {name:"ፈታ ስፔሻል", price:190},
  {name:"ፈጢራ ኖርማል", price:160},
  {name:"ፈጢራ ስፔሻል", price:200},
  
  // -------------------- Chechebsa --------------------
  {name:"ጨጩብሳ ኖርማል የስንዴ", price:160},
  {name:"ጨጩብሳ ስፔሻል የስንዴ", price:160},

  // -------------------- Kitet & Ajja --------------------
  {name:"ቅይጥ ኖርማል", price:200},
  {name:"ቅይጥ ስፔሻል", price:230},
  {name:"የአጃ ቂንጩ", price:180},
  {name:"የአጃ ቂንጩ በቂቤ", price:200},

  // -------------------- Bula & Eggs --------------------
  {name:"ቡላ/የገብስ ገንፎ የፃም", price:200},
  {name:"ቡላ/የገብስ ገንፎ ስፔሻል", price:230},
  {name:"ቡላ በዱለት", price:300},
  {name:"እንቁላል ፍርፍር", price:170},
  {name:"እንቁላል ፍርፍር በቺዝ", price:200},
  {name:"ፓን ኬክ", price:200},
  {name:"እንቁላል ኦምሌት", price:170},
  {name:"እንቁላል ኦምሌት ስፔሻል", price:230},
  {name:"እንቁላል ስልስ", price:160},
  {name:"እንቁላል ሳንዱች በቂጣ", price:160},
  {name:"እንቁላል ሳንዱች በቂጣ በቺዝ", price:200},
  {name:"እንቁላል በስጋ", price:200},
  {name:"ፍሬንች ቶስት", price:200},

  // -------------------- Sandwiches --------------------
  {name:"የአትክልት ሳንዱች", price:180},
  {name:"የስጋ ሳንዱች", price:250},
  {name:"የቱና ሳንዱች", price:300},
  {name:"የአሳ ሳንዱች", price:250},
  {name:"የዶሮ ሳንዱች", price:300},
  {name:"ክለብ ሳንዱች", price:300},

  // -------------------- Wraps --------------------
  {name:"የአትክልት ራፕስ", price:190},
  {name:"የስጋ ራፕስ", price:240},
  {name:"የቱና ራፕስ", price:300},
  {name:"የአሳ ራፕስ", price:250},
  {name:"የዶሮ ራፕስ", price:300},
  {name:"ቻፓቲ በቢፍና በቺዝ", price:200},

  // -------------------- Burger / Burger Special --------------------
  {name:"የፃም በርገር", price:200},
  {name:"በርገር", price:250},
  {name:"ደብል በርገር", price:300},
  {name:"ቺዝ በርገር", price:300},
  {name:"የኛ ስፔሻል በርገር", price:400},
  {name:"ፊሸ በርገር", price:250},
  {name:"ፊሸ ደብል በርገር", price:300},
  {name:"ፊሸ ቺዝ በርገር", price:350},
  {name:"ፊሽ የኛ ስፔሻል በርገር", price:460},
  {name:"ቺክን በርገር", price:300},
  {name:"ቺክን ደብል በርገር", price:350},
  {name:"ቺክን ቺዝ በርገር", price:350},
  {name:"ቺክን የኛ ስፔሻል በርገር", price:400},

  // -------------------- Pizza --------------------
  {name:"ፒዛ በቢፍ", price:350},
  {name:"ፒዛ በቺክን", price:450},
  {name:"ፒዛ በአሳ", price:350},
  {name:"ፒዛ በቱና", price:400},
  {name:"ፒዛ በአትክልት", price:350},
  {name:"ፒዛ በቺዝ (ማርጋሪታ)", price:400},
  {name:"የኛ ስፔሻል ፒዛ", price:450},

  // -------------------- Pasta / Rice / Macaroni --------------------
  {name:"ማካሮኒ በስልስ", price:190},
  {name:"ማካሮኒ በአትክልት", price:190},
  {name:"ማካሮኒ በስጋ", price:230},
  {name:"ማካሮኒ በቱና", price:300},
  {name:"ማካሮኒ በአሳ ኮተሌት", price:300},
  {name:"ማካሮኒ በዶሮ ስጋ", price:400},
  {name:"ማካሮኒ በዶሮ እግር", price:500},
  {name:"ሩዝ በስልስ", price:190},
  {name:"ሩዝ በአትክልት", price:190},
  {name:"ሩዝ በስጋ", price:230},
  {name:"ሩዝ በቱና", price:300},
  {name:"ሩዝ በአሳ ኮተሌት", price:300},
  {name:"ሩዝ በዶሮ ስጋ", price:400},
  {name:"ሩዝ በዶሮ እግር", price:500},
  {name:"ፓስታ በስልስ", price:190},
  {name:"ፓስታ በአትክልት", price:190},
  {name:"ፓስታ በስጋ", price:230},
  {name:"ፓስታ በቱና", price:300},
  {name:"ፓስታ በአሳ ኮተሌት", price:300},
  {name:"ፓስታ በዶሮ ስጋ", price:400},
  {name:"ፓስታ በዶሮ እግር", price:500},

  // -------------------- Combo --------------------
  {name:"ኮምቦ በስልስ", price:300},
  {name:"ኮምቦ በአትክልት", price:300},
  {name:"ኮምቦ በስጋ", price:350},
  {name:"ኮምቦ በቱና", price:400},
  {name:"ኮምቦ በአሳ ኮተሌት", price:400},
  {name:"ኮምቦ በዶሮ ስጋ", price:500},
  {name:"ኮምቦ በዶሮ እግር", price:550},

  // -------------------- Drinks --------------------
  {name:"ፍሩት ፓንች", price:250},
  {name:"የአትክልት ሳላድ", price:250},
  {name:"የፍራፍሬ ሳላድ", price:250},
  {name:"ሞሂቶ ስትሮቤሪ", price:170},
  {name:"ሞሂቶ ጂንጀር", price:150},
  {name:"ሞሂቶ ሚንት", price:150},
  {name:"ሞሂቶ ብርቱካን", price:170},
  {name:"ሞሂቶ አናናስ", price:150},
  {name:"ሞሂቶ የኛ ስፔሻል", price:200},

  // -------------------- Tea --------------------
  {name:"ሻይ", price:40},
  {name:"ናና ሻይ", price:40},
  {name:"ሻይ በሎሚ", price:50},
  {name:"ዝንጅብል ሻይ", price:50},
  {name:"ዝንጅብል ሻይ በማር", price:50},
  {name:"ሞሪንጋ", price:50},
  {name:"አረንጓዴ ሻይ", price:50},
  {name:"ለውዝ ሻይ", price:70},
  {name:"ስፔሻል ሻይ", price:100},
  {name:"አፍሪካን ሻይ", price:100},

  // -------------------- Coffee --------------------
  {name:"የጀበና/ስቲም ቡና", price:30},
  {name:"የማሽን ቡና", price:60},
  {name:"ስፕሪስ", price:60},
  {name:"ስፕሬሶ", price:60},
  {name:"ቡና ከረቫት", price:60},
  {name:"ወተት", price:80},
  {name:"ማኪያቶ", price:60},
  {name:"ደብል ማኪያቶ", price:110},
  {name:"የፃም ማኪያቶ", price:100},
  {name:"ካራሜል ማኪያቶ", price:90},
  {name:"ካፌ ላቴ", price:90},
  {name:"ካራሜል ላቴ", price:80},
  {name:"ሻይ ላቴ", price:70},
  {name:"ካቱቺኖ", price:100},
  {name:"ሆት ቸኮሌት", price:110},
  {name:"ኮፊ ሞካ", price:90},
  {name:"አይስድ ላቴ", price:100},
  {name:"አይስድ ኮፊ", price:80},
  {name:"አይስድ ኮፊ ሞካ", price:120},
  {name:"አይስድ ካራሜል ላቴ", price:120},
  {name:"ሞካ ፍራፕ", price:160},
  {name:"ካራሜል ፍራፕ", price:160},

  // -------------------- Water & Misc --------------------
  {name:"0.5/0.6 ሊትር ውሃ", price:25},
  {name:"አንድ ሊትር ውሃ", price:35},
  {name:"ቀዝቃዛ ሁለት ሊትር ውሃ", price:55},
  {name:"የጠርሙስ ለስላሳ", price:50},
  {name:"መጠጦች የፕላስቲክ ለስላሳ", price:70},
  {name:"አምቦ ውሃ", price:50},
  {name:"የማልት መጠጥ", price:60},

  // -------------------- Eggs Specials --------------------
  {name:"እርጎ በማር", price:170},
  {name:"እርጎ በቸኮሌት", price:200},
  {name:"እርጎ በስተሮበሪ", price:200},

  // -------------------- Miscellaneous --------------------
  {name:"ቁጣ", price:30},
  {name:"የቴክ አዌ ቦክስ", price:30},
  {name:"አሉሙኒየም ፎይል", price:30},
  {name:"የጁስ ቴክ አዌ", price:20},
  {name:"ጭማሪ ሰላጣ", price:60},
  {name:"ጭማሪ ቺዝ/ቢፍ/አንጀራ", price:20},
  {name:"ጭማሪ የተጠበሰ የዶሮ እግር/የዶሮ ስጋ", price:200},
  {name:"ጭማሪ የተጠበሰ/የተቀቀለ እንቁላል", price:30},
  {name:"ጭማሪ ሙሉ ቱና", price:200},
  {name:"ጭማሪ ግማሽ ቱና", price:150},
  {name:"ጭማሪ የተጠበሰ ስጋ/ሙሉ እርጎ", price:100},
  {name:"ጭማሪ የተጠበሰ አሳ", price:150},
  {name:"ጭማሪ አይብ/አሾካዶ/ካቻፕ/እርጎ/ማዮኒዝ", price:140}, 
];



// Populate menu drop-down
const menuList = document.getElementById("menuList");
if (menuList) {
  menuItems.forEach(item=>{
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} ብር`;
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.onclick = ()=>addToCart(item);
    li.appendChild(addBtn);
    menuList.appendChild(li);
  });
}

// ---------- CART & ORDERS ----------
let cart = JSON.parse(localStorage.getItem("cart"))||[];
let orders = JSON.parse(localStorage.getItem("orders"))||[];

// ---------- ADD TO CART ----------
function addToCart(item){
    let existing = cart.find(i=>i.name===item.name);
    if(existing) existing.quantity++;
    else cart.push({...item, quantity:1});
    saveCart(); updateCart();
}

// ---------- UPDATE CART ----------
function updateCart(){
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    if (!cartList || !totalDisplay) return;
    cartList.innerHTML=""; let total=0;
    cart.forEach((i,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `${i.name} x ${i.quantity} = ${i.price*i.quantity} ብር
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>`;
        cartList.appendChild(li);
        total+=i.price*i.quantity;
    });
    totalDisplay.textContent=total;
}

// ---------- CART CONTROLS ----------
function increaseQuantity(i){ cart[i].quantity++; saveCart(); updateCart(); }
function decreaseQuantity(i){ cart[i].quantity>1?cart[i].quantity--:cart.splice(i,1); saveCart(); updateCart(); }
function removeItem(i){ cart.splice(i,1); saveCart(); updateCart(); }
function saveCart(){ localStorage.setItem("cart",JSON.stringify(cart)); }

// ---------- PLACE ORDER ----------
function placeOrder(){
    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const addressInput = document.getElementById("deliveryAddress");
    const noteInput = document.getElementById("orderNote");
    if (!phoneInput) { alert("Phone input missing"); return; }
    const name = nameInput ? nameInput.value : "Guest Customer";
    const phone = phoneInput.value.trim();
    const address = addressInput ? addressInput.value.trim() : "";
    const note = noteInput ? noteInput.value.trim() : "";
    if(!phone || phone.length!=10){ alert("Enter valid 10-digit phone number"); return; }
    if(cart.length===0){ alert("Cart is empty"); return; }
    let total = cart.reduce((s,i)=>s+i.price*i.quantity,0);
    const order={id:Date.now(), customer:name, phone, items:[...cart], total, status:"Pending Payment", delivery:address, note:note};
    orders.push(order); localStorage.setItem("orders",JSON.stringify(orders));
    showReceipt(order);
    updateNotifications();
}

// ---------- RECEIPT ----------
function showReceipt(order){
    const receipt=document.getElementById("receipt");
    if (!receipt) return;
    let itemsHTML="";
    order.items.forEach(i=>itemsHTML+=`<p>${i.name} x ${i.quantity} = ${i.price*i.quantity} ብር</p>`);
    receipt.innerHTML=`<h2>Receipt</h2>
        <p><strong>Name:</strong> ${order.customer}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Delivery:</strong> ${order.delivery}</p>
        <p><strong>Note:</strong> ${order.note}</p>
        <hr>${itemsHTML}<hr>
        <h3>Total: ${order.total} ብር</h3>
        <button onclick="simulatePayment(${order.id})">Pay with Telebirr</button>
        <button onclick="closeReceipt()">Close</button>`;
    receipt.style.display="block";
}
function closeReceipt(){ 
    const receipt = document.getElementById("receipt");
    if (receipt) receipt.style.display="none"; 
}

// ---------- PAYMENT SIMULATION ----------
function simulatePayment(orderId){
    alert("Redirecting to Telebirr...");
    setTimeout(()=>{
        const order=orders.find(o=>o.id===orderId);
        if(order){ order.status="Paid"; localStorage.setItem("orders",JSON.stringify(orders));
        alert("Payment Successful!"); cart=[]; saveCart(); updateCart(); closeReceipt(); loadAdmin(); updateNotifications(); }
    },2000);
}

// ---------- ADMIN DASHBOARD ----------
function checkAdmin(){
    const pass=document.getElementById("adminPass").value;
    if(pass==="p@ssword2026"){ document.getElementById("adminContent").style.display="block"; loadAdmin(); }
    else{ alert("Incorrect password"); }
}

function loadAdmin(){
    const adminTable=document.getElementById("adminOrders"); adminTable.innerHTML="";
    orders.forEach(o=>{
        const row=document.createElement("tr");
        row.innerHTML=`<td>${o.customer}</td><td>${o.phone}</td><td>${o.total} ብር</td><td>${o.status}</td><td>${o.delivery}</td><td>${o.note}</td>`;
        adminTable.appendChild(row);
    });
}

// ---------- DELIVERY BUTTON ----------
const deliveryBtn = document.getElementById("deliveryBtn");
if (deliveryBtn) {
    deliveryBtn.addEventListener("click",()=>{
        const addr=document.getElementById("deliveryAddress");
        if (addr) {
            addr.style.display = addr.style.display==="none"?"inline-block":"none";
        }
    });
}

// ---------- ORDER NOTIFICATIONS ----------
function updateNotifications(){
    const pending = orders.filter(o=>o.status==="Pending Payment").length;
    const notif = document.getElementById("orderNotification");
    if (notif) notif.textContent=pending;
}

// ---------- INITIALIZE ----------
document.addEventListener("DOMContentLoaded",()=>{ updateCart(); updateNotifications(); });