$(function(){$(window).on('resize',function(){infoHeaderUpdateDropdown();})
$('#info-header-nav-chevron').hover(function(e){e.preventDefault();infoHeaderUpdateDropdown();$('#info-header-nav-list').addClass('visible')},function(){$('#info-header-nav-list').removeClass('visible');});function infoHeaderUpdateDropdown(){if($('#info-header-nav-list').width()>=$('#info-header-nav-container').width()-37&&$('#info-header-nav-list li.dropdown-item').length>0)
$('#info-header-nav-chevron').show();else
$('#info-header-nav-chevron').hide();$('li','#info-header-nav-list').each(function(i,e){$(e).removeClass('dropdown-item');$(e).unbind('mouseenter mouseleave');if($(e)[0].offsetTop>0){$(e).addClass('dropdown-item');$(e).hover(function(){$('#info-header-nav-list').addClass('visible')},function(){$('#info-header-nav-list').removeClass('visible');});}});}
infoHeaderUpdateDropdown();});