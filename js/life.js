$(document).ready(function(){

  $('.scrollspy').scrollSpy();
  $('.materialboxed').materialbox();


  var options = [
    {selector: '#staggered-test', offset: 200, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {{selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")'  }
  ];
  Materialize.scrollFire(options);



});