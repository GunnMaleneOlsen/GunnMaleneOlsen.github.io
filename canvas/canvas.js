function setup(){
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');
    
    //hus
    ctx.fillStyle = 'rgb(240, 120, 0)';
    ctx.fillRect(110, 180, 280, 280);
    //vindu venstre
    ctx.fillStyle = 'rgba(0, 0, 200, 0.4)';
    ctx.fillRect(130, 230, 60, 50);
    //vindu midten
    ctx.fillStyle = 'rgba(0, 0, 200, 0.4)';
    ctx.fillRect(220, 230, 60, 50);
    //vindu høyre
    ctx.fillStyle = 'rgba(0, 0, 200, 0.4)';
    ctx.fillRect(310, 230, 60, 50);
    //Dør
    ctx.fillStyle = 'rgba(80, 40, 20, 1)';
    ctx.fillRect(220, 370, 60, 90);

    //Tak
    ctx.beginPath();
    ctx.moveTo(250, 90);
    ctx.lineTo(110, 180);
    ctx.lineTo(390, 180);
    ctx.fill();        

    //Human
    ctx.beginPath();
    ctx.arc(100, 400, 20, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(115, 400);
    ctx.arc(100, 400, 15, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(95, 395);
    ctx.arc(90, 395, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(115, 395);
    ctx.arc(110, 395, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    

  
}