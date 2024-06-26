const body = document.getElementById('toyotaBody');
const headerArr = ['Toyota RAV4 2024','Toyota Camry 2015','Toyota Camry 2015','Toyota Tocoma 2023','Toyota Tocoma 2024'];
const descArr = ['The RAV4 offers a range of powerful and fuel-efficient engines to suit your driving style. With its responsive handling and smooth ride, you will enjoy every moment behind the wheel.',
'Step inside the Camry, and you will be greeted by a spacious, meticulously crafted interior. Premium materials, comfortable seating, and an abundance of legroom make every journey a pleasure. The quiet cabin, with advanced noise-insulation technology.',
'The Toyota Camry boasts a sleek, aerodynamic design that turns heads wherever it goes. Its bold grille, sharp lines, and stylish LED headlights give it a modern and sophisticated look. Whether you are driving to a business meeting or a weekend getaway, the Camry ensures you arrive in style.',
 'The Toyota Tacoma is renowned for its durability and long-lasting performance. With its high-strength steel frame and robust construction, the Tacoma is built to withstand the harshest conditions and toughest tasks. You can trust it to be your reliable partner for years to come.',
 'The Tacoma is designed to conquer any terrain. With available features like Multi-Terrain Select, Crawl Control, and an electronically locking rear differential, you can tackle mud, sand, and rock with ease. Its impressive ground clearance and rugged suspension ensure you can go places most trucks can’t.']

function loadToyota(){   

    for(let j = 0; j <= 4; j++){   
        const itemContainer = document.createElement('div');
        itemContainer.id = 'container'; 
    for(let i = 0; i <= 4; i++){
        const items = document.createElement('div');
        items.className = 'items';
        const img = document.createElement('img');
        img.src = 'toyota'+(i+1)+'.png';
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
                window.location.href = 'http://localhost:8080/toyota/rav4';
            else if(x==1)   
                window.location.href = 'http://localhost:8080/toyota/camry';
            else if(x==2)   
                window.location.href = 'http://localhost:8080/toyota/camry24';
            else if(x==3)   
                window.location.href = 'http://localhost:8080/toyota/tocoma';
            else if(x==4)   
                window.location.href = 'http://localhost:8080/toyota/tocoma24';
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

} */
