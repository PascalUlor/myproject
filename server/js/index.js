function main(){
  $('.frm').hide();
  $('.btn-large').on('click', function(){$(this).next().slideToggle()
  $(this).toggleClass('active');
  /*$(this).text('Projects Viewed');*/   });
}
$(document).ready(main);