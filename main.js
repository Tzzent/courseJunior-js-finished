const container_form = document.querySelector('.container-form');

const fragmento = document.createDocumentFragment();

function changeHiddenValue(price) {
    const inputHidden = document.querySelector('.price-selected');
    inputHidden.setAttribute('value', price);
}

for (let i = 0; i < 12; i++) {
    const key = document.createElement('DIV');
    key.tabIndex = i;
    const element_keyimg = document.createElement('DIV');
    const element_keyname = document.createElement('H2');
    const element_keymodel = document.createElement('H3');
    const element_keyprice = document.createElement('P');

    element_keyimg.innerHTML = '<img class="img-key" src="old-key.png" alt="key-old">';
    element_keyname.innerHTML = 'Key ' + (i + 1);
    element_keymodel.innerHTML = 'Modelo: K - ' + Math.round(Math.random() * 500 * 4);
    const price = Math.round(Math.random() * 300);
    element_keyprice.innerHTML = 'Price: $<b>' + price + '</b>';

    key.addEventListener('click', () => {
        changeHiddenValue(price);
    })

    key.classList.add('container-key');
    element_keyprice.classList.add('key-price');


    key.appendChild(element_keyimg);
    key.appendChild(element_keyname);
    key.appendChild(element_keymodel);
    key.appendChild(element_keyprice);

    fragmento.appendChild(key);
}

container_form.appendChild(fragmento);


