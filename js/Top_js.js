
      // トップ画面表示した１秒後に画像が消える
      $(document).ready(function() {
        $(".Topimg_fade")
          .delay(1000) //何秒後消える
          .fadeOut();
      });
      //  Runaway・文字モーション
      // Runaway・大文字
      $(document).ready(function() {
      $('.Run').animate({'left':'4%',},500);
      });

      $(document).ready(function() {
      $('.Away').delay(500).animate({
      'left':'3%',
           },500);
      });
      // Runaway・小文字
       $(document).ready(function() {
      $('.Run').delay(1000).animate({left:'12%',
      'font-size':'8em',
      top:'180px',},1000);
      });

      $(document).ready(function() {
      $('.Away').delay(580).animate({
      left:'12%','font-size':'8em',
      top:'180px',},1000);
      });

      // Runaway・文字消える
      $(document).ready(function() {
        $('.Run').delay(90).fadeOut();
      })

      $(document).ready(function() {
        $('.Away').fadeOut();
      })
      // Runaway・LOGO表示
      $(document).ready(function() {
        $('#Runaway_Logo')
        .hide()
        .delay(3000)
        .fadeIn();
      })

      $(document).ready(function() {
        $('.border-radius_scroll')
        .hide()
        .delay(4500)
        .fadeIn();
      })
      $(document).ready(function() {
        $('.div_scroll')
        .hide()
        .delay(4500)
        .fadeIn();
      })


      function RunawayLogo_motion() {
        var Runaway_Logo=document.getElementById('Runaway_Logo');
        var xSpeed=1;
        setInterval(function(){
            var Runaway_Logo_speed=parseInt(Runaway_Logo.style.top)+xSpeed;
            //给动画设置边界
            if(Runaway_Logo_speed>300) xSpeed*=-1;
            else if(Runaway_Logo_speed<265) xSpeed*=-1;
            Runaway_Logo.style.top=Runaway_Logo_speed+'px';
        },1000/50);}




      $(document).ready(function() {
        $('.Catch_phrase')
        .hide()
        .delay(4000)
        .fadeIn();
      })


// ↓↓↓未使用
      $(document).ready(function() {
        $('.Award_phrase')
        .hide()
        .delay(4500)
        .fadeIn();
      })

      $(document).ready(function() {
        $('.Award_Logo')
        .hide()
        .delay(4500)
        .fadeIn();
      })
      
      $(document).ready(function() {
        $('.Top_banner')
        .hide()
        .delay(4500)
        .fadeIn();
      })
      $(document).ready(function() {
        $('.globalNavi')
        .hide()
        .delay(4500)
        .fadeIn();
      })
// ↑↑↑未使用

// Background

      $(document).ready(function() {
        $('#Top_Background')
        .hide()
        .delay(3500)
        .fadeIn();
      })




      function TopBackground_motion() {
        var Top_Background=document.getElementById('Top_Background');
        var xSpeed=1;
        setInterval(function(){
        var TopBackground_speed=parseInt(Top_Background.style.top)+xSpeed;
        //给动画设置边界
        if(TopBackground_speed>70) xSpeed*=-1;
        else if(TopBackground_speed<40) xSpeed*=-1;
        Top_Background.style.top=TopBackground_speed+'px';
    },1000/10);}

     




// ↓↓↓未使用
      $(document).ready(function() {
        $('.subMenu_Concept')
        .hide()
        .delay(4500)
        .fadeIn();
      })

      $(document).ready(function() {
        $('.subMenu_mediumBar')
        .hide()
        .delay(4500)
        .fadeIn();
      })

      $(document).ready(function() {
        $('.subMenu_Use')
        .hide()
        .delay(4500)
        .fadeIn();
      })


      $(document).ready(function() {
        $('.downArrow')
        .hide()
        .delay(4500)
        .fadeIn();
      })
      $(document).ready(function() {
        $('.downArrow_triangle')
        .hide()
        .delay(4500)
        .fadeIn();
      })

    // ↑↑↑未使用

// ----------トップ以下-----------------------------------

$(document).ready(function() {
  $('#Introduction_section')
  .hide()
  .delay(4500)
  .fadeIn();
})


$(document).ready(function() {
  $('#instructions_section')
  .hide()
  .delay(4500)
  .fadeIn();
})

$(document).ready(function() {
  $('#Detail_section')
  .hide()
  .delay(4500)
  .fadeIn();
})
$(document).ready(function() {
  $('#Award_section')
  .hide()
  .delay(4500)
  .fadeIn();
})

$(document).ready(function() {
  $('#Designer_section')
  .hide()
  .delay(4500)
  .fadeIn();
})

$(document).ready(function() {
  $('.Footer_section')
  .hide()
  .delay(4500)
  .fadeIn();
})


// 下方移動スクロール・動き


// function box_motion() {
//   var box=document.getElementById('box');
//   var xSpeed=1;
//   setInterval(function(){
//       var box_speed=parseInt(box.style.top)+xSpeed;
//       //给动画设置边界
//       if(box_speed>644) xSpeed*=-1;
//       else if(box_speed<600) xSpeed*=-1;
//       box.style.top=box_speed+'px';
//   },1000/40);}

// window.addEventListener('load', box_motion);
function box_motion(box_ID) {
  var box = document.getElementById(box_ID);
  var top_original = parseInt(box.style.top)

  var xSpeed = 1;
  setInterval(function() {
    var top = parseInt(box.style.top);
    console.log(top);
    var box_speed = top + xSpeed;
    //给动画设置边界
    if (box_speed > top_original + 33) xSpeed *=-1;
    else if (box_speed < top_original) xSpeed *=-1;
    box.style.top = box_speed + "px";
    console.log("box_speed", box_speed);
  }, 1000 / 40);
}


// On scroll show div
