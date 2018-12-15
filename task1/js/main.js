// Product name trimming

var header = document.getElementsByClassName('product-name');

for (var i = 0; i < header.length; i++) {
  $clamp(header[i], {clamp: 2, useNativeClamp: false});
}