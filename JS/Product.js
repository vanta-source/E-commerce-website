//Get access to DOM and store amounts
const sizeButtons = document.getElementsByClassName("SelectRadio");
var ButtonsList = [...sizeButtons];
console.log(ButtonsList);
//Make Array from Nodelist
ButtonsList.forEach((button) => {
  button.addEventListener("click", function () {
    clearActivebtn();
    button.classList.add("active");
    console.log(button);
    console.log(sizeButtons);
  });
});

//Delete the Active style function
function clearActivebtn() {
  ButtonsList.forEach((button) => button.classList.remove("active"));
}

//Set Default
ButtonsList[0].classList.add("active");

//Apply same setting for color selector
//Get access to DOM and store amounts
const colorButtons = document.getElementsByClassName("SelectColor");
var ColorList = [...colorButtons];
console.log(ColorList);
//Make Array from Nodelist
ColorList.forEach((color) => {
  color.addEventListener("click", function () {
    clearActiveCl();
    color.classList.add("ActiveColor");
  });
});

//Delete the Active style function
function clearActiveCl() {
  ColorList.forEach((color) => color.classList.remove("ActiveColor"));
}
//Default

ColorList[0].classList.add("ActiveColor");

//Counter Logic
//Access to DOM
let counter = 0;
let count = document.getElementById("counterNum").innerHTML;
console.log(count);

document.getElementById("minus").onclick = function () {
  if (counter > 0) {
    counter--;
    document.getElementById("counterNum").innerHTML = counter;
    console.log(counter);
  } else {
    counter === 0;
    document.getElementById("counterNum").innerHTML = counter;
  }
};

document.getElementById("plus").onclick = function () {
  counter++;
  document.getElementById("counterNum").innerHTML = counter;
  console.log(counter);
};

//Counter Tabview Logic
//Access to DOM

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.color = "#9F9F9F";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";
    document.getElementById(pageName).style.flexDirection = "column";
    document.getElementById(pageName).style.alignItems = "center";

  
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.color="#000000"
    elmnt.style.fontWeight="600"
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //Products

  const products = [
    {
      name: "Leviosa",
      type: "Elegant armchair",
      price: "Rp 1.500.000",
      previousPrice: "Rp 2.000.000",
      popularity: 3,
      image: "/img/Product2.png",
      label: "/img/Label.png",
      shareIcon: "/img/Share_w.svg",
      compareIcon: "/img/Compare_W.svg",
      likeIcon: "/img/Heart_W.svg",
    },
    {
      name: "Griffyndor Sofa",
      type: "Comfortable sofa",
      price: "Rp 5.500.000",
      previousPrice: "",
      popularity: 4,
      image: "/img/Product3.png",
      label: "/img/Label-1.png",
      shareIcon: "/img/Share_w.svg",
      compareIcon: "/img/Compare_W.svg",
      likeIcon: "/img/Heart_W.svg",
    },
    {
      name: "Ravenclaw Chair",
      type: "Smart and stylish chair",
      price: "Rp 3.000.000",
      previousPrice: "Rp 3.500.000",
      popularity: 2,
      image: "/img/Product4.png",
      label: "/img/Discount.png",
      shareIcon: "/img/Share_w.svg",
      compareIcon: "/img/Compare_W.svg",
      likeIcon: "/img/Heart_W.svg",
    },
    {
      name: "Leviosa Table",
      type: "Modern dining table",
      price: "Rp 4.000.000",
      previousPrice: "Rp 5.000.000",
      popularity: 4,
      image: "/img/Product2.png",
      label: "/img/Label-1.png",
      shareIcon: "/img/Share_w.svg",
      compareIcon: "/img/Compare_W.svg",
      likeIcon: "/img/Heart_W.svg",
    }
  ];
  
  // Function to generate product list HTML
  function generateProductHTML(product) {
    return `
          <div class="Product"><a href="Product.html">
              <div class="Product_hover">
                  <button class="white_btn">Add to cart</button>
                  <div id="action_btn">
                      <span class="icon_btn"><img src="${
                        product.shareIcon
                      }" alt=""> <p>Share</p></span>
                      <span class="icon_btn"><img src="${
                        product.compareIcon
                      }" alt=""> <p>Compare</p></span>
                      <span class="icon_btn"><img src="${
                        product.likeIcon
                      }" alt=""> <p>Like</p></span>
                  </div>
              </div></a>
              <div class="img_label">
                  <img class="Product_img_1" src="${product.image}" alt="${
      product.name
    }">
                  <span class="label"><img src="${
                    product.label
                  }" alt="Label"></span>
              </div>
              <div class="Product_content">
                  <p class="product_name">${product.name}</p>
                  <p class="Product_type">${product.type}</p>
                  <span class="Prices">
                      <p class="Price">${product.price}</p>
                      ${
                        product.previousPrice
                          ? `<p class="Previous_Price">${product.previousPrice}</p>`
                          : ""
                      }
                  </span>
              </div>
          </div>
      `;
  }
  
  // HTML elements for product list and user input
  var productList = document.getElementById("Product_list");
  
  // Function to render the product list
  function renderProductList(products) {
    // Correct the property name and use map correctly
    productList.innerHTML = products
      .map((product) => generateProductHTML(product))
      .join("");
  }

  // Initial rendering of the product list
renderProductList(products);