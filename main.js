canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car_image="car1.png";
car_x=50;
car_y=60;
car_width=100;
car_height=100;

car_image="car2.png";
car_x=90;
car_y=100;
car_width=100;
car_height=100;

function addimage(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;

      bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;
}
function uploadbackground(){
ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log ("upkeypressed");
    }
    if(keypressed=='37'){
        left();
        console.log ("leftkeypressed");
    }
    if(keypressed=='39'){
        right();
        console.log ("rightkeypressed");
    }
    if(keypressed=='40'){
        down();
        console.log ("downkeypressed");
    }
}

