// this is for blog page
document.getElementById('btn-blog').addEventListener('click', function(){
    location.href = './blog.html';
})



// this code for triangle clacution
document.getElementById('btn-triangle').addEventListener('click', function(){
    getData( 'triangle-value-b', 'triangle-value-h')
    const valueName = document.getElementById('triangle-value-name').innerText;

    const valueCalculate = 0.5 * parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});


// this code for ractangle clacution
document.getElementById('btn-ractangle').addEventListener('click', function(){
    getData( 'rectangle-value-w', 'rectangle-value-l')
    const valueName = document.getElementById('rectangle-value-name').innerText;

    const valueCalculate = parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});

// this code for parallelogram clacution
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    getData( 'parallelogram-value-b', 'parallelogram-value-h')
    const valueName = document.getElementById('parallelogram-value-name').innerText;

    const valueCalculate = parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});

// this code for rhombos clacution
document.getElementById('btn-rhombus').addEventListener('click', function(){
    getData( 'rhombus-value-d1', 'rhombus-value-d2')
    const valueName = document.getElementById('rhombus-value-name').innerText;

    const valueCalculate = 0.5 * parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});

// this code for pentagon clacution
document.getElementById('btn-pentagon').addEventListener('click', function(){
    getData( 'pentagon-value-p', 'pentagon-value-b')
    const valueName = document.getElementById('pentagon-value-name').innerText;

    const valueCalculate = 0.5 * parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});


// this code for ellipse clacution
document.getElementById('btn-ellipse').addEventListener('click', function(){
    getData( 'ellipse-value-a', 'ellipse-value-b')
    const valueName = document.getElementById('ellipse-value-name').innerText;

    const valueCalculate = 3.14 * parseFloat(value1) * parseFloat(value2);
    const valueCalculateResult = valueCalculate.toFixed(2);
    if (!isNaN(valueCalculate)) {
        showData(valueName, valueCalculateResult);
      } else {
        alert('Please Enter valid numeric values for base and height.');
      }

});