const newButton =document.getElementById('newButton')

function changeBackgroundColor(){

    const randomColor=`hsl(${Math.random()*360},100%,75%)`;

    document.body.style.backgroundColor=randomColor;

}

newButton.addEventListener('click' ,changeBackgroundColor);

