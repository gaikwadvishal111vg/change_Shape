let changeColorBtn=document.getElementById( 'changeColor' );
let changeShapeBtn = document.getElementById('changeShape');
let changeshapess =document.querySelector( '.get_Shape' ) ;
 const colors=['green','red','blue','yellow','brown','pink', 'purple'];
 const shapes = ['square','triangle-bottomleft','rectangle','circle','triangle-up','pentagon','arrow_left'];

const getRandomNumber = (max)=>{
    return Math.floor((Math.random() * 10)) %max;
};
changeColorBtn.addEventListener( "click", ()=>{
   let randomColorIndex=getRandomNumber(colors.length)
   document.querySelector('.shapes').style.backgroundColor = colors[randomColorIndex]
});
// /* shape */
const getRandomShape = (max)=>{
    return Math.floor((Math.random() * 10)) %max;
};
changeShapeBtn.addEventListener( "click", ()=>{
   let randomShapeIndex=getRandomShape(shapes.length)
   changeshapess.id=shapes[randomShapeIndex];
});

