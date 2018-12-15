function action (act){
  var num1, num2, result;

  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  switch(act){
    case 'plus':
      result = num1+num2;
      break;
    case 'minus':
      result = num1-num2;
      break;
    case 'multiply':
      result = num1*num2;
      break;
    case 'divide':
      result = num1/num2;
      break;
    case 'clean':
      document.getElementById('n1').value = '';
      document.getElementById('n2').value = '';
      result = '';
      break;
  }
  document.getElementById('out').innerHTML = result;
}