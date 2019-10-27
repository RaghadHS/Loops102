'use strict';

function findhouse ()

{
  var size = prompt('Tell us what is the size of the house you are looking for ?');
  var message;

  if(size < 75){
    message = 'We have special studio apartments that will suit your taste.';
  }

  if ((size >= 75) && (size < 150))
  {
    message = 'We have small apartments located in the city.';

  }

  if ((size >= 150) && (size < 225))
  {
    message = 'We have country-side houses with spectacular view';

  }

  if (size >= 225) {
    message = 'Unfortunalety, we do not have what you are looking for at the moment. Care to see other sizes?';
  }

  return message;
}

document.write(findhouse());


var con = confirm('would you like to choose another house?');
if (con)
{
  document.write(findhouse());
}