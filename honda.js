const body = document.getElementById('hondaBody');
const headerArr = ['Honda Civic','Honda Civic Type-R','Honda CRV','Honda CRV 2024','Honda Accord 2024'];
const descArr = ['Honda Civics are renowned for their long-lasting reliability. Owners often report high mileage without major issues, making it a solid investment for the long term.','Honda Civics are renowned for their long-lasting reliability. Owners often report high mileage without major issues, making it a solid investment for the long term.','The Honda CR-V is an excellent choice for those in the market for a compact SUV.The Honda CR-V offers a spacious interior with plenty of room for both passengers and cargo.','The Honda CR-V is an excellent choice for those in the market for a compact SUV. The Honda CR-V offers a spacious interior with plenty of room for both passengers and cargo.','The Honda Accord is a standout midsize sedan that offers a blend of performance, comfort, and reliability.']

function loadHonda(){   

    for(let j = 0; j <= 4; j++){   
        const itemContainer = document.createElement('div');
        itemContainer.id = 'container'; 
    for(let i = 0; i <= 4; i++){
        const items = document.createElement('div');
        items.className = 'items';
        const img = document.createElement('img');
        img.src = 'honda'+(i+1)+'.png';
        img.id = 'item-image';
        const header = document.createElement('h1');
        header.id = 'item-header';
        header.textContent = headerArr[i];
        const price = document.createElement('h2');
        price.id = 'price';
        price.textContent = 'Starting at $70/day,';
        const desc = document.createElement('h3');
        desc.id = 'item-desc';
        desc.textContent = descArr[i];
        items.appendChild(img);
        items.appendChild(header);
        items.appendChild(price);
        items.appendChild(desc);
        itemContainer.appendChild(items);

        body.appendChild(itemContainer);
        items.addEventListener("click", () => {
            let x = i;
            if(x == 0)
                window.location.href = 'http://localhost:8080/honda/civic';
            else if(x==1)   
                window.location.href = 'http://localhost:8080/honda/civic-type-r';
            else if(x==2)   
                window.location.href = 'http://localhost:8080/honda/crv';
            else if(x==3)   
                window.location.href = 'http://localhost:8080/honda/crv24';
            else if(x==4)   
                window.location.href = 'http://localhost:8080/honda/accord';
        });
        }
    }
}

/* const container = document.getElementById("container");
const items = document.getElementById("items");

for(let x = 0; x < 5; x++){
    const desc = document.getElementById("item-desc");
    items.addEventListener("mouseenter", () => {
        desc.style.visibility = 'visible';
    })
    items.onmouseout = () => {
        desc.style.visibility = 'hidden';
    };

}

 */