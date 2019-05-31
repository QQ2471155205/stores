
$(document).ready(function() {
    /* 回到顶部 */
      $(function() {
        $('#gotoTop').hide();        //隐藏go to top按钮
        $(window).scroll(function() {
           // console.log($(this).scrollTop());
           //当window的scrolltop距离大于1时，go to
            if($(this).scrollTop() > 100) {
              $('#gotoTop').fadeIn();
            }else{
              $('#gotoTop').fadeOut();
            }
        });

      $('#gotoTop').click(function(){
            $('html ,body').animate({scrollTop: 0}, 300);
          return false;
        });
      $("#gotoTop").mouseover(function() {
        $("#gotoTop").toggleClass("hover");
        $("#gotoTop a").css("color","#ffffff");
      })
      $("#gotoTop").mouseout(function() {
        $("#gotoTop").toggleClass("hover");
        $("#gotoTop a").css("color","#000");
      })
      })

	
        /*添加弹窗*/
        $(".tjsj a").click(function() {
            $(".tjtancbg").css("display","block");
            $("#tjsji").css("display","block");
        })
        $(".closeWindow").click(function() {
            $(".tjtancbg").css("display","none");
            $("#tjsji").css("display","none");
        })
        /*修改弹窗*/
        $(".btnxg").click(function() {
            $(".tjtancbg").css("display","block");
            $("#xgsji").css("display","block");
        })
        $(".closeWindow").click(function() {
            $(".tjtancbg").css("display","none");
            $("#xgsji").css("display","none");
        })
        /**/
        $(function(){   
                $(".mingxing").hover(function(){
                    $(this).find(".piao").css({display:'block', 'opacity':'0'});
                    $(this).find(".piao").stop().animate({'opacity':'1'}, 400);
                },function(){
                    $(this).find(".piao").stop().animate({'opacity':'0'},400);
                    $(this).find(".piao").css({display:'none', 'opacity':'0'});
                });
            });
    
})