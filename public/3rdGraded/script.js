function plotPoint() {
    // get values from input fields
    var x0 = parseInt(document.getElementById('x0').value);
    var y0 = parseInt(document.getElementById('y0').value);
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);

    console.log(x0, y0, x, y);

    // display input
    document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + x + " " + y;

    // create point
    var point = document.createElement('div');  
    point.className = 'point';

    // position the point
    point.style.position = 'absolute';
    point.style.left = (x - x0 + 200 - 5) + 'px';
    point.style.bottom = (y - y0 + 200 - 5) + 'px';

    // add to plane
    document.getElementById('coordinatePlane').appendChild(point);

    // determine location
    if (x === x0 || y === y0){
        document.getElementById('out1').innerHTML = "divisa";
    }
    else if (x > x0 && y > y0){
        document.getElementById('out1').innerHTML = "NE";
    }
    else if (x < x0 && y > y0){
        document.getElementById('out1').innerHTML = "NO";
    }
    else if (x > x0 && y < y0){
        document.getElementById('out1').innerHTML = "SE";
    }
    else {
        document.getElementById('out1').innerHTML = "SO";
    }
}