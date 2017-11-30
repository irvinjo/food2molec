
var img = document.getElementById("foodImg");
var c = document.getElementById("myCanvas");

function afterAll() {

        c.height = img.naturalHeight;
        c.width = img.naturalWidth;


        var ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var x = []; // X positions vector
        var y = []; // Y positions vector
        var W = c.width; // ancho canvas
        var t = 0;

        for (i = 0; i < imgData.data.length; i += 4) { // recorre cada pixel a traves de sus 4 caracteristicas
            if (imgData.data[i + 2] != 0) { // si el blue del pixel esta a full = si es el fondo (debido a
                // que manualmente se hizo azul el fondo de la pantalla)
                x[t] = (i / 4) % W;
                y[t] = Math.ceil((i / 4) / W);
                t++;
            }
        }


        var id2;
        var pos = 0; //variable que modificara el alfa desde 255 hasta cero

        img.addEventListener("click", zeroPush);

        function zeroPush() {


            img.style.display = "none";
            c.style.display = "block";
            id2 = setInterval(frame0, 5);

            function frame0() {
                if (pos == 255) {
                    window.clearInterval(id2);

                    firstPush();

                } else {
                    pos++;

                    for (u2 = 0; u2 < imgData.data.length; u2 += 4) {
                        imgData.data[u2 + 3] = 255 - pos;
                    }
                    ctx.putImageData(imgData, 0, 0);
                }
            }
        }



  class Molec {
    constructor(x, y, radio, color) {
      this.x = x;
      this.y = y;
      this.radio = radio;
      this.color = color;
      this.moveY = function(posy) {
        this.y = this.y + posy;
      }
      this.moveX = function(posx) {
        this.x = this.x + posx;
      }
    }
  }



    var A = []; // array donde se guardaran las caracteristicas de los atomos
    var z = 0; // inicializar contador de atomos
    var colors = [ '#20B2AA', '#00FF00', '#FF4500', '#DC143C', '#f9d423']; // color vectors

    var qu1 = Number( document.getElementById("c1").innerHTML.slice(-5,-2) );
    var qu2 = Number( document.getElementById("c2").innerHTML.slice(-5,-2) );
    var qu3 = Number( document.getElementById("c3").innerHTML.slice(-5,-2) );
    var qu4 = Number( document.getElementById("c4").innerHTML.slice(-5,-2) );
    var qu5 = Number( document.getElementById("c5").innerHTML.slice(-5,-2) );

    var totQ = Math.round(qu1 + qu2 + qu3 + qu4 + qu5);

    var Q1 = Math.round(qu1 * x.length / (totQ));
console.log(100*Q1/x.length);
    var Q2 = Math.round(qu2 * x.length / (totQ));
console.log(100*Q2/x.length);
    var Q3 = Math.round(qu3 * x.length / (totQ));
console.log(Q3*100/x.length);
    var Q4 = Math.round(qu4 * x.length / (totQ));
console.log(Q4*100/x.length);
    var Q5 = Math.round(qu5 * x.length / (totQ));
console.log(Q5*100/x.length);

    var arr = [];

    var counter1= 0;
    var counter2= 0;
    var counter3= 0;
    var counter4= 0;
    var counter5= 0;

    var ind = -1;

    while (x.length > (counter1 + counter2 + counter3 + counter4 + counter5)) {

        colorcito = Math.round(4 * Math.random());
            switch( colorcito )
            {
                case 0:
                if (Q1 > counter1) {
                    counter1 += 1;
                    arr[ind++] = colorcito;
                }
                break;
                case 1:
                if (Q2 > counter2) {
                    counter2 += 1;
                    arr[ind++] = colorcito;
                }
                break;
                case 2:
                if (Q3 > counter3) {
                    counter3 += 1;
                    arr[ind++] = colorcito;
                }
                break;
                case 3:
                if (Q4 > counter4) {
                    counter4 += 1;
                    arr[ind++] = colorcito;
                }
                break;
                case 4:
                if (Q5 > counter5) {
                    counter5 += 1;
                    arr[ind++] = colorcito;
                }
                break;
            }
        }

        for (z = 0; z < x.length; z++) { //Creacion de los atomos
            A[z] = new Molec(x[z], y[z], (10 * Math.random()) ^ Math.random(), arr[z]);
        }

        var grSiz = 50;
        var maxCy = A[z - 1].y;

        // puntos de convergencia
        var px = [c.width / 6];
        var py = [10];

        px.push(2 * px[0]);
        py.push(py[0]);

        px.push(3 * px[0]);
        py.push(py[0]);

        px.push(4 * px[0]);
        py.push(py[0]);

        px.push(5 * px[0]);
        py.push(py[0]);

        // distancias para aumentar

        var dx = [];
        var dy = [];

        ctx.clearRect(0, 0, c.width, c.height);
        //funcion para plotear algunos atomos
        //el ploteo es cada grSiz atomos
    function firstPush() {

        //c.width = 2 * img.naturalWidth;
        //var foo = c.width / 4;
        var foo = 0;
            for (u2 = 0; u2 < z; u2 += grSiz) {
                var grd = ctx.createRadialGradient(foo + A[u2].x, A[u2].y, 0.01 * A[u2].radio, foo + 0.5 + A[u2].x, 0.5 + A[u2].y, 0.5 + A[u2].radio);
                ctx.beginPath();
                grd.addColorStop(0, '#D3D3D3');
                grd.addColorStop(1, colors[A[u2].color]);
                ctx.fillStyle = grd;
                //ctx.fillStyle = colors[A[u2].color];
                ctx.arc(foo + A[u2].x, A[u2].y, A[u2].radio, 0, 2 * Math.PI);
                ctx.strokeStyle = '#2b2b2b';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fill();
            }
            c.addEventListener("click", secondPush);
        }
        var id;

    function secondPush() {

        //c.width = 2 * img.naturalWidth;
        //var foo = c.width / 4;
        var foo = 0;
        for (u2 = 0; u2 < z; u2 += grSiz) {

            A[u2].x = A[u2].x + foo;

        }
            id = window.setInterval(frame, 10);
        }

        // Agrupamiento de los atomos segun sus colores
    function frame() {

        //c.width = 2 * img.naturalWidth;
        //var foo = 0;
        var foo = 0;
            if (A[0].y > maxCy) {
                window.clearInterval(id);
            } else {
                //for (u2 = 0; u2 < grSiz * n; u2++) {
                for (u2 = 0; u2 < z; u2++) {
                    if (A[u2].y < maxCy - 100 * Math.random()) {
                        A[u2].moveY(15);
                        //break;
                    } else {
                        switch (A[u2].color) {
                            case 0:
                                dx = (px[0] - A[u2].x) / 2;
                                dy = (py[0] - A[u2].y) / 2;

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 10 * Math.random());

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 10 * Math.random());
                                break;
                            case 1:
                                dx = (px[1] - A[u2].x) / 2;
                                dy = (py[1] - A[u2].y) / 2;

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());
                                break;
                            case 2:
                                dx = (px[2] - A[u2].x) / 2;
                                dy = (py[2] - A[u2].y) / 2;

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());

                                break;
                            case 3:
                                dx = (px[3] - A[u2].x) / 2;
                                dy = (py[3] - A[u2].y) / 2;

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());
                                break;
                            case 4:
                                dx = (px[4] - A[u2].x) / 2;
                                dy = (py[4] - A[u2].y) / 2;

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());

                                A[u2].moveX(dx + 10 * Math.random());
                                A[u2].moveY(dy + 5 * Math.random());
                                break;
                        }
                    }
                }

                ctx.clearRect(0, 0, c.width, c.height);

                // ploteo de los atomos agrupandose

                for (u2 = 0; u2 < z; u2 += grSiz) {
                    var grd = ctx.createRadialGradient(foo + A[u2].x, A[u2].y, 0.01 * A[u2].radio, foo + 0.5 + A[u2].x, 0.5 + A[u2].y, 0.5 + A[u2].radio);
                    ctx.beginPath();
                    grd.addColorStop(0, '#D3D3D3');
                    grd.addColorStop(1, colors[A[u2].color]);
                    ctx.fillStyle = grd;
                    //ctx.fillStyle = colors[A[u2].color];
                    ctx.arc(foo + A[u2].x, A[u2].y, A[u2].radio, 0, 2 * Math.PI);
                    ctx.strokeStyle = '#2b2b2b';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.fill();
                }
            }
        }

}
