console.log("-- Test 1 (...) --");
(function(html){
  var elResult = document.getElementsByClassName('reactive-result')[0];
  while (elResult.firstChild)
    elResult.removeChild(elResult.firstChild);
  
  // Create editor
  elResult.appendChild(html.h1("Super-duper simple:"));
  elResult.appendChild(supersimple.editor.html({class: "extra-class", style: "color: #f00;"}));
})(html);
