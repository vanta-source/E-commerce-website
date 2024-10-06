let currentPage = 1;
let totalPages = 1;

const products = [
  {
    name: "Syltherine",
    type: "Stylish cafe chair",
    price: "Rp 2.500.000",
    previousPrice: "",
    popularity: 5,
    image: "/img/Product1.png",
    label: "/img/Label-1.png",
    shareIcon: "/img/Share_w.svg",
    compareIcon: "/img/Compare_W.svg",
    likeIcon: "/img/Heart_W.svg",
  },
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
  },
  {
    name: "Nimbus Chair",
    type: "Ergonomic office chair",
    price: "Rp 1.800.000",
    previousPrice: "Rp 2.200.000",
    popularity: 3,
    image: "/img/Product3.png",
    label: "/img/Label.png",
    shareIcon: "/img/Share_w.svg",
    compareIcon: "/img/Compare_W.svg",
    likeIcon: "/img/Heart_W.svg",
  },
  {
    name: "Ravenclaw Desk",
    type: "Executive wooden desk",
    price: "Rp 6.800.000",
    previousPrice: "Rp 7.500.000",
    popularity: 5,
    image: "/img/Product4.png",
    label: "/img/Label.png",
    shareIcon: "/img/Share_w.svg",
    compareIcon: "/img/Compare_W.svg",
    likeIcon: "/img/Heart_W.svg",
  },
  {
    name: "Hufflepuff ",
    type: "Elegant wooden bookshelf",
    price: "Rp 3.000.000",
    previousPrice: "Rp 3.500.000",
    popularity: 2,
    image: "/img/Product5.png",
    label: "/img/Label.png",
    shareIcon: "/img/Share_w.svg",
    compareIcon: "/img/Compare_W.svg",
    likeIcon: "/img/Heart_W.svg",
  },
];

// Function to generate product list HTML
function generateProductHTML(product) {
  return `
        <div class="Product">
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
            </div>
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
const userInputElement = document.getElementById("userInput");
let userInputValue = 8; // Initial number of products to display (default)

// Function to render the product list
function renderProductList(products) {
  // Display only the number of products the user inputted (or default number)
  const limitedProducts = products.slice(0, userInputValue);
  productList.innerHTML = limitedProducts
    .map((product) => generateProductHTML(product))
    .join("");
}

// Function to sort products based on the criteria
function sortProducts(criteria) {
  if (criteria === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name A-Z
  } else if (criteria === "popularity") {
    products.sort((a, b) => b.popularity - a.popularity); // Sort by popularity
  }
  renderProductList(products); // Re-render the sorted list (limited by user input)
}

// Event listener to handle sorting selection
document.getElementById("sort").addEventListener("change", (e) => {
  sortProducts(e.target.value); // Sort products when the user changes the sort option
});

// Event listener for user input to adjust the number of products displayed
userInputElement.addEventListener("blur", function () {
  let userInputValue = userInputElement.value; // Get the value from the input

  // If user input is not empty, parse it to an integer
  if (userInputValue !== "") {
    userInputValue = parseInt(userInputValue);

    // Ensure user input is valid (greater than 0 and not more than total products)
    userInputValue = Math.max(1, Math.min(userInputValue, products.length));

    // Re-render the product list with the selected number of products

    renderProductList(products.slice(0, userInputValue));

    // Calculate total pages
    totalPages = Math.ceil(products.length / userInputValue);
    currentPage = 1; // Reset to the first page

    // Render the paginated product list
    paginate(products, currentPage, userInputValue);
    renderPaginationControls(totalPages);
    console.log("yes", userInputValue);
  } else {
    // If no input is provided, render the default number of products (e.g., 8)
    renderProductList(products.slice(0, 8));
    console.log("No amount entered, showing default products");

    totalPages = Math.ceil(products.length / userInputValue);
    currentPage = 1;

    paginate(products, currentPage, userInputValue);
    renderPaginationControls(totalPages);
  }
  // Reset and re-render the product list with the new user input
});

// Initial rendering of the product list
renderProductList(products);

//validate Email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("emailFeedback");

  if (validateEmail(emailInput.value)) {
    errorMessage.textContent = ""; // Clear any previous error message

    // You can add your form submission logic here
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
  }
});

//Pagination

// Function to handle pagination and display products for the current page
function paginate(products, page = 1, productsPerPage = 8) {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = products.slice(start, end);

  renderProductList(paginatedProducts);
}

// Function to render pagination controls (Previous, Next, Page Numbers)
function renderPaginationControls(totalPages) {
  const pagination = document.getElementById("pagination");
  let buttons = "";

  // Previous button
  buttons += `<button id="Previous" onclick="changePage(${currentPage - 1})" ${
    currentPage === 1 ? 'class="disabled"' : ""
  }>Previous</button>`;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button id="number" onclick="changePage(${i})" class="${
      currentPage === i ? "active" : ""
    }">${i}</button>`;
  }

  // Next button
  buttons += `<button id="Next" onclick="changePage(${currentPage + 1})" ${
    currentPage === totalPages ? 'class="disabled"' : ""
  }>Next</button>`;

  pagination.innerHTML = buttons;
}

// Function to handle changing pages
function changePage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    const productsPerPage = parseInt(userInputElement.value) || 8;
    paginate(products, currentPage, productsPerPage);
    renderPaginationControls(totalPages);
  }
}

// Initial rendering of the product list (show default number of products, e.g., 8)
paginate(products, currentPage, 8);
renderPaginationControls(Math.ceil(products.length / 8));
