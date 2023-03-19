$(document).ready(function() {
  var del = 2000;
  setTimeout(function() {
    $('.tophalf, .tophalfOverlay').css({
      'opacity': '1',
      'transform': 'translateY(0px)',
    })
  },del + 500)
  setTimeout(function() {
    $('.mainTitle').css({
      'opacity': '1',
      'transform': 'translateY(-10px)',
      // 'letter-spacing': '8px'
    })
  },del + 800); //1000
  setTimeout(function() {
    $('.mainTitle').css({
      'letter-spacing': '15px'
    })
  },del + 1200); //1400
  setTimeout(function() {
    $('.subTitle').css( {
      'opacity': '1',
      'transform': 'translateY(0)'
    })
  }, del + 1800) //1800
  setTimeout(function() {
    $('.scrollImg').css( {
      'opacity': '1',
      'transform': 'translateY(0)'
    })
  }, del + 2300) //1800

  $('.page').css({
    'top': $(window).height(),
  })
  $('img').click(function() {
      var url = $(this).attr('src');
      window.open(url, '_blank');
  })

  // $(document).scroll(function() {
  //   var st = $(document).scrollTop();
  //   if( st <= $('.firstPage').offset().top ) {
  //     $('.page1').css({
  //       'transform': 'translateY(-'+st/10+'px) scale('+ (1 - st/(2 * $('.firstPage').offset().top)) + ')',
  //       // 'border-radius': st/50 + 'px',
  //     })
  //   }
  // })


  var imgCaraTeamDet = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2011, 2010];
  var imgCaraTeamTrack = 0;
  $('.imageCaraTeam .rightArr').click(function(){
    imgCaraTeamTrack = (imgCaraTeamTrack+1)%(imgCaraTeamDet.length);
    $('.imageCaraTeam .caraImgCont').attr('src', './img/team/'+imgCaraTeamDet[imgCaraTeamTrack]+'.jpg');
    $('.imageCaraTeamTitle span').html(imgCaraTeamDet[imgCaraTeamTrack]);
  })
  $('.imageCaraTeam .leftArr').click(function(){
    imgCaraTeamTrack = ((imgCaraTeamTrack-1)%(imgCaraTeamDet.length) + imgCaraTeamDet.length)%(imgCaraTeamDet.length);
    $('.imageCaraTeam .caraImgCont').attr('src', './img/team/'+imgCaraTeamDet[imgCaraTeamTrack]+'.jpg');
    $('.imageCaraTeamTitle span').html(imgCaraTeamDet[imgCaraTeamTrack]);
  })

  var robodiaryArr = [2018, 2016, 2015, 2013, 2012, 2011, 2009, 2008, 2007];
  for(var i=0; i < robodiaryArr.length; i++) {
    $('.robodiaryCont').append("<div class='robodiaryEle " + "robodiaryEle" + robodiaryArr[i] + "'></div>")
    $('.robodiaryEle' + robodiaryArr[i]).html(
      "<div class='robodiaryEleOver'><div class='robodiaryEleText'>" + robodiaryArr[i] + "</div></div>"
    );
    $('.robodiaryEle' + robodiaryArr[i]).css('background-image', "url('./robodiary/logos/logo" + robodiaryArr[i] + ".jpg')")
    $('.robodiaryEle' + robodiaryArr[i]).click(function() {
      window.open('./robodiary/Robocon_' + $(this).find('.robodiaryEleText').html() + '.pdf', '_blank');
    })
  }

  $('.projTile').click(function() {
  	let title = $(this).find('.tileTitle').html();
  	let description = $(this).find('.tileDescription').html();
    let imgNum = $(this).find('.tileImagesContainer').find('img').length;
    let imgArr = [];
    var i;
    for (i=0; i < imgNum; i++) {
      imgArr.push($(this).find('.tileImagesContainer').find('img:eq(' + i + ')').attr('src'));
    }
    // alert(imgArr[2].attr('src'));
    var imgTracker = 0;
  	$('.bodyOverlay').css({
  		'display': 'flex',
  	})
    setTimeout(function() {
      $('.overlayContentContainer').css({
        'opacity': '1',
        'transform': 'translateY(0)',
      })
    }, 5)
  	$('.overlayContentTitle').html(title);
  	$('.overlayContentTextContainer').html(description);
    $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
    $('.leftArr').click(function(){
      imgTracker = ((((imgTracker - 1) % imgNum) + imgNum) % imgNum) ;
      $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
    })
    $('.rightArr').click(function(){
      imgTracker = (imgTracker + 1) % imgNum;
      $('.overlayCaraImgCont').attr('src', imgArr[imgTracker]);
    })
  })
  $('.overlayContentClose').click(function(){
    setTimeout(function() {
      $('.bodyOverlay').css({
        'display': 'none',
      })
    }, 300)
    $('.overlayContentContainer').css({
      'opacity': '0',
      'transform': 'translateY(20px)',
    })
    $('.overlayCaraImgCont').attr('src', "");
  });


  $(document).scroll(function(){
    var st = $(document).scrollTop();
    if(st >= $('.firstPage').offset().top/1.4) {
      $('.navbar').css({
        'opacity': '1',
      })
    } else {
      $('.navbar').css({
        'opacity': '0'
      })
    }
    if( st < $('.page2').offset().top - 50 ) {
      $('.navbar').css({
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'color': 'black'
      })
    }else if( st >= $('.page2').offset().top - 50 && st < $('.page3').offset().top) {
      $('.navbar').css({
        'background-color': 'rgba(0, 0, 0, 0.5)',
        'color': 'white'
      })

    }else if( st > $('.page3').offset().top && st < $('.pageSection').offset().top - 50 ){
      $('.navbar').css({
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'color': 'black'
      })
    } else if( st >= $('.pageSection').offset().top - 50 && st < $('.page4').offset().top - 50 ){
      $('.navbar').css({
        'background-color': 'rgba(0, 0, 0, 0.5)',
        'color': 'white'
      })
    } else if( st >= $('.page4').offset().top - 50 && st < $('.contactPage').offset().top - 50){
      $('.navbar').css({
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'color': 'black'
      });
    } else if( st >= $('.contactPage').offset().top - 50 && st < $('.formPage').offset().top ){
      $('.navbar').css({
        'background-color': 'rgba(0, 0, 0, 0.5)',
        'color': 'white'
      })
    } else {
      $('.navbar').css({
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'color': 'black'
      });
    }



  })

  $('.ni1, .scrollImg').click(function(){
    $('html,body').animate({
      scrollTop : $('.firstPage').offset().top - 50
    },800,"swing");
  })
  $('.ni2').click(function(){
    $('html,body').animate({
      scrollTop : $('.page2').offset().top - 50
    },800,"swing");
  })
  $('.ni3').click(function(){
    $('html,body').animate({
      scrollTop : $('.page4').offset().top - 50
    },800,"swing");
  })
  $('.ni4').click(function(){
    $('html,body').animate({
      scrollTop : $('.page5').offset().top - 50
    },800,"swing");
  })
  $('.ni5').click(function(){
    $('html,body').animate({
      scrollTop : $('.contactPage').offset().top - 50
    },800,"swing");
  });
  $('.ni6').click(function() {
    window.location.href = './archive/index.html';
  })
  var trig = 0;
  $('.formPageBtn').click(function() {
    if(!trig){
      $('.formPage').css('height', 'auto');
      trig = 1;
    } else {
      $('.formPage').css('height', '60px');
      trig = 0;
    }
  })


  setTimeout(function(){
    $('.loadanim').css({
      'transform': 'translate(0px, -40px)',
      'opacity': '0'
    })
  },2000)
  setTimeout(function(){
    $('.loadanim').css('display','none');
  },3000)

})
