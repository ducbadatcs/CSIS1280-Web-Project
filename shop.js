var products = document.querySelectorAll(".card-title");
var prices = document.querySelectorAll(".price");
var inputs = document.querySelectorAll("input");

function checkout() {
  var product_list = [];
  var price_list = [];
  var input_list = [];
  var units = [];
  for (let i of products) {
    product_list.push(i.textContent);
  }
  for (let i of prices) {
    price_list.push(Number(i.textContent.slice(1)));
  }
  for (let i of inputs) {
    input_list.push(Number(i.value));
  }

  var ce = document.getElementById("checkout");

  var total = 0;
  for (let i = 0; i < product_list.length; i++) {
    let price_of_item = price_list[i] * input_list[i];
    ce.innerHTML += `
    <td>${product_list[i]}</td>
    <td>${price_list[i]}</td>
    <td>${input_list[i]}</td>
    <td>${price_of_item}</td>
    `;
    total += price_of_item;
  }
  ce.textContent += `Total price: $${total}`;
}
