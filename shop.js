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
  var checkout_table = `
    <tr>\n
    <th>Product</th>
    \n<th>Price</th>
    \n<th>Quantity</th>
    \n<th>Total</th>
    \n</tr>`;
  var total = 0;
  for (let i = 0; i < product_list.length; i++) {
    let price_of_item = price_list[i] * input_list[i];
    // console.log(
    //   `<tr>\n<td>${product_list[i]}</td>\n<td>${price_list[i]}</td>\n<td>${input_list[i]}</td>\n<td>${price_of_item}</td>\n</tr>`
    // );
    checkout_table += `
    <tr>\n
        <td>${product_list[i]}</td>\n
        <td>$${price_list[i]}</td>\n
        <td>${input_list[i]}</td>\n
        <td>$${price_of_item}</td>\n
    </tr>\n`;
    total += price_of_item;
  }
  checkout_table += `
  <tr>\n
    <td colspan=3>Total</td>\n
    <td>$${total}</td>
  </tr>`;
  ce.innerHTML = checkout_table;
  ce.style.display = "block";
}
