const shirtForm = document.getElementById('shirt-form');
const shirtList = document.getElementById('shirt-list');
const color = document.getElementById('corCamisa');

color.addEventListener('change', function(event){
  // alert(event.target.value)
  let imgCamisa = document.getElementById('camisa');
  imgCamisa.style.backgroundColor = event.target.value
})

const shirts = [];

shirtForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);


  const newShirt = { title, description, price };
  shirts.push(newShirt);

  displayShirts();
  clearForm();
});

function displayShirts() {
  shirtList.innerHTML = '';
  shirts.forEach((shirt, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${shirt.title}</h3>
      <p>${shirt.description}</p>
      <p>Preço: $${shirt.price.toFixed(2)}</p>
      <figure id="imagemCamisa">
      <img src="images/camisa.png" id="camisa" alt="...">
      </figure> 
    `;
    shirtList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
}

displayShirts();