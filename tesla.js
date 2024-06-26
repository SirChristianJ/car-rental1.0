
const body = document.getElementById('teslaBody');
const teslaNames = ['Model Y', 'Model X', 'Model S','Model 3','Cybertruck'];
function loadTesla(){
    for(let j = 0; j <= 4; j++){   
        const itemContainer = document.createElement('div');
        itemContainer.id = 'container'; 
    for(let i = 0; i <= 4; i++){
        const items = document.createElement('div');
        items.className = 'items';
        const img = document.createElement('img');
        img.src = 'tesla'+(i+1)+'.png';
        img.className = 'item-image';
        const header = document.createElement('h1');
        header.id = 'item-header';
        header.textContent = teslaNames[i];
        const price = document.createElement('h2');
        price.id = 'price';
        price.textContent = 'Starting at $70/day,';
        const desc = document.createElement('h3');
        desc.id = 'item-desc';
        desc.textContent = 'The Tesla Model Y is an exceptional electric vehicle that combines performance, technology, and practicality in a sleek, modern package';
        items.appendChild(img);
        items.appendChild(header);
        items.appendChild(price);
        items.appendChild(desc);
        itemContainer.appendChild(items);
    
    body.appendChild(itemContainer);
    //const items_ = document.getElementsByClassName("items");
    items.addEventListener("click", () => {
        let x = i;
        if(x == 0)
            window.location.href = 'http://localhost:8080/tesla/modelY';
        else if(x==1)   
            window.location.href = 'http://localhost:8080/tesla/modelX';
        else if(x==2)   
            window.location.href = 'http://localhost:8080/tesla/modelS';
        else if(x==3)   
            window.location.href = 'http://localhost:8080/tesla/model3';
        else if(x==4)   
            window.location.href = 'http://localhost:8080/tesla/cybertruck';
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

