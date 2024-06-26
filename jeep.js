const body = document.getElementById('jeepBody');
const headerArr = ['Jeep Wrangler 2020','Jeep Wrangler 2022','Jeep Wrangler 2024','Jeep Rubicon 2022','Jeep Rubicon 2023'];
const descArr = ['The Jeep Wrangler is synonymous with off-road excellence. Whether you are navigating rugged trails, climbing steep inclines, or fording streams, the Wranglers legendary 4x4 capability ensures you can conquer any terrain.',
    'The Wrangler’s distinctive design, with its iconic seven-slot grille and round headlights, pays homage to its heritage while incorporating modern touches. The removable doors and roof, fold-down windshield, and a plethora of customization options let you experience open-air freedom like never before.',
    'Built to withstand the toughest conditions, the Jeep Wrangler is engineered for durability. Its robust construction, reinforced frame, and premium materials ensure it can handle whatever Mother Nature throws your way.',
    'The Rubicon is powered by a range of formidable engines, from the robust 3.6L Pentastar® V6 to the efficient and powerful 2.0L Turbo. For those seeking cutting-edge innovation, the 4xe plug-in hybrid option delivers impressive torque and efficiency, allowing you to explore further with fewer emissions.',
    'The Rubicon seamlessly blends ruggedness with refined comfort. Its aggressive stance, bold fender flares, and distinctive red tow hooks showcase its off-road prowess. Enjoy the freedom of the open-air experience with removable doors, a fold-down windshield, and various top options, including the Sky One-Touch® Power Top for an instant open-air drive.'
]

function loadJeep(){   

    for(let j = 0; j <= 4; j++){   
        const itemContainer = document.createElement('div');
        itemContainer.id = 'container'; 
    for(let i = 0; i <= 4; i++){
        const items = document.createElement('div');
        items.className = 'items';
        const img = document.createElement('img');
        img.src = 'jeep'+(i+1)+'.png';
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
                window.location.href = 'http://localhost:8080/jeep/wrangler20';
            else if(x==1)   
                window.location.href = 'http://localhost:8080/jeep/wrangler22';
            else if(x==2)   
                window.location.href = 'http://localhost:8080/jeep/wrangler24';
            else if(x==3)   
                window.location.href = 'http://localhost:8080/jeep/rubicon22';
            else if(x==4)   
                window.location.href = 'http://localhost:8080/jeep/rubicon24';
        });
        /* const item = document.getElementById('items')
        const desc = document.getElementById('item-desc')
        item.addEventListener("mouseenter", () => {
            desc.style.visibility = 'visible';
            item.onmouseout = () => {
                desc.style.visibility = 'hidden';
            };
        }) */
    }
    }
}

/* const container = document.getElementById("container");
const items = document.getElementById("items");


const desc = document.getElementById("item-desc");
items.addEventListener("mouseenter", () => {
    desc.style.visibility = 'visible';
})
items.onmouseout = () => {
    desc.style.visibility = 'hidden';
};
 */



