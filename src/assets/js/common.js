var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    $html = $('html');

$(document).ready(function(){
    var $wrap = $('#wrap'),
        $btnNav = $('.btn_t.nav'),
        $nav = $('#navigation'),
        $btnTop = $('#btnTop'),
        $header = $('#header'),
        $footer = $('#footer'),
        $autoSearch = $('#autoSearch'),
        $subtop = $('.subtop'),
        $mlink = $('.mlink');

    // navigation
    $btnNav.click(function(){
        if(!$html.hasClass('openNav')){
            $html.addClass('openNav');
            $nav.addClass('open');
        } else {
            $nav.removeClass('open');
        }
        mask();
    });
    $nav.find('.close').click(function(){
        $nav.removeClass('open');
        mask();
    });
    $nav.find('.mnu dt a').click(function(e){
        if(matchMedia('(max-width:767px)').matches || ( $wrap.hasClass('app') && matchMedia('(max-width:1246px)').matches )){
            e.preventDefault();
            $(this).closest('dl').addClass('active')
                .siblings('dl').removeClass('active');
        }
    });
    $nav.find('.mnu .open').click(function(e){
        if(matchMedia('(max-width:767px)').matches || ( $wrap.hasClass('app') && matchMedia('(max-width:1246px)').matches )){
            e.preventDefault();
            $(this).toggleClass('on')
                .next('ul').stop().slideToggle(300);
        }
    });

    // top button
    $btnTop.click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: 0}, 600);
    });

    // scroll detector
    $(this).on('scrollUp',function(){
        $html.removeClass('scrollDown');
        $html.addClass('scrollUp');
    });
    $(this).on('scrollDown',function(){
        $html.removeClass('scrollUp');
        $html.addClass('scrollDown');
    });

    // toggle
    $(this).on('click', '.btn_tg', function(){
        var action = $(this).data('action');

        if(action === 'fade'){
            $(this).next('.tgcon').stop().fadeToggle(300);
        } else if(action === 'slide'){
            if(!$(this).hasClass('mfix') || ($(this).hasClass('mfix') && matchMedia('(min-width:768px)').matches)){
							// 220419
                $(this).toggleClass('on').closest('.tgwrp').find('.tgcon:not(".mnav")').stop().slideToggle(300, function(){
                    $(this).find('input, textarea').focus();
                });
            }
			//���� �� �ϴ� ����� ���� Ŭ�� �� ���ϴ����� �ڵ� �̵�
            if($(this).hasClass('gotoend')){
                $('html, body').stop().animate({scrollTop: $(document).height() - 100}, 600);
            }
        }
    });

    // fold
    $(this).on('click', '.btn_fold', function(){
        var h = $(this).outerHeight(),
            $fdcon = $(this).next('.fdcon');

        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            $fdcon.css('height', $fdcon.find('.inner').outerHeight());
        } else {
            $(this).removeClass('on');
            $fdcon.css('height', h);
        }
    });

    if(!isMobile){
        $html.addClass('notM');

        // custom scrollbar
        $('.scrollarea').mCustomScrollbar({
            scrollInertia: 100
        });
    }

    // modal
    $(document).on('click', '.modal .close:not(.fix)', function(){
        modal('#'+$(this).closest('.modal').attr('id'));
    });

    // attach file
    $(document).on('change', '.frm_attach input', function(){
        $(this).closest('.frm_file').find('.frmbox').text($(this).val());
    });

    $(window).on('load scroll resize', function(){
        var scrollTop = $(this).scrollTop(),
            winH = $(this).height(),
            fTop = ($footer.length > 0)? $footer.offset().top : $(document).height();
            $tfix = (matchMedia('(min-width:768px)').matches)? $header.find('.fix_p') : $header.find('.home'),
            $sfilter = $('.sorting_filter');

        // top button floating
        if(scrollTop > 0){
            $html.addClass('scroll');
            if($autoSearch.parents('.search').hasClass('on')) $autoSearch.blur();
        } else {
            $html.removeClass('scroll');
        }
        if(scrollTop > fTop - winH + $btnTop.outerHeight()){
            $html.addClass('foot');
        } else {
            $html.removeClass('foot');
        }

        // header floating
        if($tfix.length > 0){
            if($html.hasClass('scrollDown') && scrollTop > $tfix.offset().top + $tfix.outerHeight()){
                $header.addClass('fixed');
                if($nav.is(':visible') && scrollTop > $tfix.offset().top + $tfix.outerHeight() + $nav.outerHeight()){
                    $nav.addClass('fixed');
                } else if(!$nav.is(':visible')){
                    $nav.addClass('fixed');
                }
            } else if($html.hasClass('scrollUp') && scrollTop <= $tfix.offset().top){
                $header.removeClass('fixed');
                $nav.removeClass('fixed');
            }
        }

        // search filter floating
        if($sfilter.length > 0){
            if($html.hasClass('scrollDown') && scrollTop > $sfilter.offset().top + $sfilter.outerHeight()){
                $sfilter.addClass('fixed');
                if($sfilter.hasClass('on')) $sfilter.addClass('h');
            } else if($html.hasClass('scrollUp') && scrollTop <= $sfilter.offset().top - $tfix.outerHeight()){
                $sfilter.removeClass('fixed h');
            }
        }

        // image tag
        $('.img_tag').each(function(){
            var $photo = $(this).closest('.wrp_photo'),
                top = $photo.offset().top;

            if(scrollTop >= top - winH*0.7 && scrollTop < top + $photo.outerHeight()){
                $(this).find('span').addClass('on');
            } else {
                $(this).find('span').removeClass('on');
            }
        }).find('span').each(function(){
            $(this).parent().hover(function(){
                $(this).find('span').removeClass('on');
            });
        });
    }).on('load resize', function(){
        var $fullh = $('.fullh'),
            $fbar = $('#fbar'),
            $container = $('#container'),
            $bottomBtn = $('.bottom_btn'),
            $subFold = $subtop.find('.btn_fold');

        // fullh
        if($fullh.length > 0 && (matchMedia('(max-width:767px)').matches || (matchMedia('(max-width:1246px)').matches && $wrap.hasClass('app') ))){
            var padding = ($fullh.find('.nospace').length > 0)? 0 : $container.outerHeight() - $container.height(),
                btn = ($bottomBtn.is(':visible'))? $bottomBtn.outerHeight() + parseInt($bottomBtn.css('margin-top')) : 0;

            $fullh.css('min-height', $(window).height() - $header.outerHeight() - padding - btn);
        }

        // floating bar
        if($fbar.is(':visible')){
            $footer.css('padding-bottom', $fbar.outerHeight());
        }

        // subtop fold
        if($subFold.length > 0){
            if($subtop.find('.subtab').outerHeight() > $subtop.find('.subtab li').outerHeight()){
                $subFold.addClass('show');
                if($subFold.hasClass('on')) $subFold.next('.fdcon').css('height', $subtop.find('.inner').outerHeight());
            } else {
                $subFold.removeClass('show');
            }
        }

        // mobile link
        if(!isMobile || matchMedia('(min-width:768px)').matches){
            $mlink.css('cursor', 'default').click(function(e){
                e.preventDefault();
            });
        }
    });
});

// custom select
function customSelect(){
    if(!isMobile){
        $('select.custom_select:not(.init)').customSelect();
    } else {
        $(document).on('change', '.custom_select', function(){
            if($(this).val().length > 0){
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    }
}
customSelect();

// slider
function slider(el){
    $(el).each(function(index){
        if(!$(this).hasClass('on')){
            $(this).addClass('on slider'+index);

            var space = $('.slider'+index).data('space'),
                min = $('.slider'+index).data('min'),
                pagertype = $('.slider'+index).data('pagertype'),
                $controls = $(this).next('.slide_controls'),
                start = 0,
                sum = 0;

            $controls.find('.pager').addClass('sliderPager'+index);
            $controls.find('.prev').addClass('sliderPrev'+index);
            $controls.find('.next').addClass('sliderNext'+index);
            $controls.find('.scrollbar').addClass('sliderScrollbar'+index);

            if(min >= $('.slider'+index).find('.swiper-slide').length) $controls.addClass('noslider');
            if($(this).hasClass('checkstart')){
                start = $(this).find('.active').index();
                for(var i = 0; i <= start+1; i++){
                    sum += $('.slider'+index).find('li').eq(i).width();
                }
            }

            var margin = (matchMedia('(max-width:767px)').matches) ? 30 : (matchMedia('(max-width:1246px)').matches) ? 46 : 0,
                conW = (matchMedia('(max-width:1246px)').matches) ? $(window).width() - margin : 1200,
                initial = (start > 0) ? (conW < sum) ? start : 0 : 0;

            new Swiper('.slider'+index, {
                slidesPerView: 'auto',
                speed: 600,
                loop: false,
                allowTouchMove: (min > $('.slider'+index).find('.swiper-slide').length)? false : true,
                spaceBetween: space[0],
                initialSlide: initial,
                pagination: {
                    el: '.sliderPager'+index,
                    type: pagertype
                },
                navigation: {
                    nextEl: '.sliderNext'+index,
                    prevEl: '.sliderPrev'+index
                },
                scrollbar: {
                    el: '.sliderScrollbar'+index
                },
                breakpoints: {
                    1246 : {
                        spaceBetween: space[1]
                    },
                    767 : {
                        allowTouchMove: true,
                        spaceBetween: space[2]
                    }
                }
            });
        }
    });
}
function loopslider(el){
    $(el).each(function(index){
        if(!$(this).hasClass('on')){
            if($(this).hasClass('manual')) index = index+'m';
            $(this).addClass('on loopslider'+index);

            var pagertype = $('.loopslider'+index).data('pagertype');
                $controls = $(this).next('.slide_controls');
                swiperDelay = $('.loopslider'+index).data('delay');
                auto = $(this).hasClass('auto') ? {delay: ($(this).hasClass('delay') ? swiperDelay : 3000)} : false;


            $controls.find('.pager').addClass('loopsliderPager'+index);
            $controls.find('.prev').addClass('loopsliderPrev'+index);
            $controls.find('.next').addClass('loopsliderNext'+index);
            $controls.find('.scrollbar').addClass('loopsliderScrollbar'+index);

            var loopslider = new Swiper('.loopslider'+index, {
                slidesPerView: 'auto',
                speed: 600,
                loop: ($('.loopslider'+index).find('.swiper-slide').length < 2)? false : true,
                autoHeight: true,
                autoplay: auto,
                pagination: {
                    el: '.loopsliderPager'+index,
                    type: pagertype,
                    clickable: true
                },
                navigation: {
                    nextEl: '.loopsliderNext'+index,
                    prevEl: '.loopsliderPrev'+index
                },
                scrollbar: {
                    el: '.loopsliderScrollbar'+index
                }
            });
            if($(this).hasClass('auto')){
                $(this).hover(function(){
                    loopslider.autoplay.stop();
                }, function(){
                    loopslider.autoplay.start();
                });
            }
        }
    });
}
slider('.slider');
loopslider('.loopslider:not(.manual)');

$(window).on('load resize', function(){
    // swiparea
    swiperLoad('.swiper');
    if(matchMedia('(max-width:767px)').matches){
        swiperLoad('.mswiper');
    } else {
        sliderDestory('.mswiper');
    }
    if(matchMedia('(max-width:1023px)').matches){
        swiperLoad('.tswiper:not(.fix)');
    } else {
        sliderDestory('.tswiper:not(.fix)');
    }
});

// rolling
function rolling(el){
    $(el).each(function(index){
        if(!$(this).hasClass('on') && $(this).find('li').length > $(this).data('view')){
            $(this).addClass('on rolling'+index);

            var dir = $('.rolling'+index).data('direction'),
                group = $('.rolling'+index).data('group');

            new Swiper('.rolling'+index, {
                direction: dir,
                slidesPerView: 'auto',
                slidesPerGroup: group,
                speed: 400,
                loop: true,
                autoplay: {
                    delay: 2000
                }
            });
        }
    });
}
rolling('.rolling');

// swiparea
function swiperLoad(el){
    $(el).each(function(index){
        if(!$(this).hasClass('on')){
            $(this).addClass('on swiper'+index);

            var start = $('.swiper'+index).data('start'),
                sum = 0;

            if(start !== null){
                for(var i = 0; i <= start; i++){
                    sum += $('.swiper'+index).find('li').eq(i).width();
                }
            }

            var margin = (matchMedia('(max-width:767px)').matches)? 30 : (matchMedia('(max-width:1246px)').matches)? 46 : 0,
                initial = (start !== null) ? ($(window).width() - margin < sum) ? start : 0 : 0;

            new Swiper(this, {
                slidesPerView: 'auto',
                freeMode: true,
                initialSlide: initial
            });
        }
    });
}

function sliderDestory(el){
    if($(el).hasClass('on')){
        $(el).removeClass('on').each(function(){
            this.swiper.destroy(true, true);
        });
    }
}

// mask
function mask(){
    if($('#wrap').find('.mask').length < 1){
        disabledScroll();
        $('<span class="mask"></span>').appendTo($('#wrap'))
            .stop().fadeIn(300)
            .click(function(){
                var $openModal = $('.modal:not(.toast):visible'),
                    $nav = $('#navigation');

                if(!$openModal.hasClass('admin')){
					if($openModal.length > 0){
						if(matchMedia('(max-width:767px)').matches && !$openModal.hasClass('view') && !$openModal.hasClass('shop')){
							$openModal.removeClass('on').stop().slideUp(300);
						} else {
							$openModal.removeClass('on').stop().fadeOut(300);
							if($openModal.find('iframe').length > 0) $openModal.find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
						}
						if($openModal.hasClass('dark')) $html.removeClass('dark');
					} else if($nav.is(':visible')){
						$nav.find('.close').click();
					}
					$('.mask').stop().fadeOut(300, function(){
						enabledScroll();
						$(this).remove();
						if($html.hasClass('openNav')) $html.removeClass('openNav');
					});
				}
            });
    } else {
        if(!$html.hasClass('overlap')){
            $('#wrap').find('.mask').stop().fadeOut(300, function(){
				enabledScroll();
                $(this).remove();
                if($html.hasClass('openNav')) $html.removeClass('openNav');
            });
        }
    }
}

// modal
function alertModal(el, m){
    var $wrpImg = $(el).closest('.wrp_photo'),
        tW = $(el).outerWidth(),
        tTop = parseInt($(el).css('top')),
        tLeft = parseInt($(el).css('left')),
        mW = $(m).outerWidth(),
        mH = $(m).outerHeight(),
        top = ($wrpImg.height() - tTop > mH)? tTop + tW : tTop - mH - tW/2,
        left = (tLeft < mW/2)? tW/2 : ($wrpImg.width() - tLeft > mW/2)? tLeft - mW/2 : tLeft - mW;

    $(m).css({top: top, left: left});
    $('.alert.on').removeClass('on').stop().fadeOut(300);
    modal(m);
}
function modal(el){
    if(!$(el).hasClass('on')){
        $(el).addClass('on');
        if($('.modal.default:visible').length > 0){
            $(el).addClass('overlap');
            $html.addClass('overlap');
        }
        if($(el).hasClass('dark')) $html.addClass('dark');
        if($(el).hasClass('view')){
            var pos = (matchMedia('(max-width:767px)').matches)? $(window).height()*0.4 : $(window).height()*0.5,
                top = $(window).scrollTop() - $('#container').offset().top + pos - $(el).outerHeight()/2;

            if(top <= 0) top = 0;

            $(el).css({'position':'absolute', 'top': top});

            var space = (matchMedia('(max-width:767px)').matches)? 100 : (matchMedia('(max-width:1246px)').matches)? 200 : 250;

            if($(el).hasClass('auto') && top + $(el).height() + space > $('#wrap').height()){
                var h = $('#wrap').height() - top - space;

                $(el).find('img').css({'width': 'auto', 'height': h});
            }
        }
        if((matchMedia('(max-width:767px)').matches && $(el).hasClass('default') && !$(el).hasClass('view') && !$(el).hasClass('shop')) || $(el).hasClass('toast')){
            $(el).stop().slideDown(300);
        } else {
            $(el).stop().fadeIn(300);
        }
        if($(el).find('.loopslider')) loopslider($(el).find('.loopslider'));
        if($(el).find('.tswiper')) swiperLoad('.tswiper');
    } else {
        $(el).removeClass('on');
        if($(el).hasClass('overlap')){
            $(el).removeClass('overlap');
            if($('.modal.admin:visible').length > 0 && $('.modal.overlap:visible').length < 1) $('.modal.admin').removeClass('under');
        } else if(!$(el).hasClass('overlap') && $html.hasClass('overlap')){
            $html.removeClass('overlap');
        }
        if($(el).hasClass('dark')) $html.removeClass('dark');
        if((matchMedia('(max-width:767px)').matches && $(el).hasClass('default') && !$(el).hasClass('view') && !$(el).hasClass('shop')) || $(el).hasClass('toast')){
            $(el).stop().slideUp(300);
        } else {
            $(el).stop().fadeOut(300);
            if($(el).find('iframe').length > 0) $(el).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    }
    if($(el).hasClass('default')) mask();
}

// toast
var timer;
function toastOn(el){
    $(el).addClass('on').stop().slideDown(300, function(){
        timer = setTimeout(function(){
            $(el).removeClass('on').stop().slideUp(300);
            clearTimeout(timer);
        }, 1800);
    });
}
function toastOff(el){
    clearTimeout(timer);
    $(el).removeClass('on').stop().slideUp(300);
}

// recomment
function recomment(el){
    if(($(el).hasClass('btn_tg') && !$(el).hasClass('mfix')) || ($(el).hasClass('btn_tg') && $(el).hasClass('mfix') && matchMedia('(min-width:768px)').matches)){
        var $parent = $(el).closest('.tgwrp'),
            $txtbox = $parent.find('.txtbox'),
            padding = (matchMedia('(min-width:1247px)').matches)? 38 : (matchMedia('(min-width:768px)').matches)? 30 : 12,
            tab = $parent.find('.profile > a').outerWidth() + padding;

        $txtbox.attr('placeholder', '').css('padding-left', tab);
    } else {
        var $profile = $(el).closest('li').find('.profile > a'),
            $txtbox = $(el).parents('.comment').find('.wte_comment .txtbox'),
            re = '@'+$profile.contents().not($profile.children()).text().trim(),
            start = re.length;

        if($(el).hasClass('mfix')){
            $('#fbar').addClass('hide');
            $('.wte_comment.fixed').removeClass('hide');
        }
        $txtbox.empty().attr('data-start', start).append('<span class="fc1">'+re+'</span>&nbsp;');
        setCaret('wte');
    }
}

function setCaret(el){
    var el = document.getElementById(el);
    var range = document.createRange();
    var sel = window.getSelection();

    range.setStart(el, 2);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

function commentInput(el){
    if($(el).attr('data-start')){
        var start = $(el).attr('data-start'),
            state = $(el).text().length;

        if(start >= state){
            if($(el).hasClass('reonly')){
                $('#fbar').removeClass('hide');
                $('.wte_comment').addClass('hide');
                $(el).blur();
            } else {
                $(el).empty().removeAttr('data-start');
            }
        }
    }
}

function disabledScroll(){
    $html.addClass('disabled').find('body').css('overflow-y', 'hidden');
}
function enabledScroll(){
    $html.removeClass('disabled').find('body').css('overflow-y', 'auto');
}

// ��Ű ����
function setCookie(cName, cValue, cDay){
	var expire = new Date();
	var time = expire.getTime();
	time += 3600 * 1000 * cDay;
	//expire.setDate(expire.getDate() + cDay);
	cookies = cName + '=' + escape(cValue) + '; path=/ '; // �ѱ� ������ �������� escape(cValue)�� �մϴ�.
	cookies += '; domain=.shouse.garden ';
	if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toUTCString() + ';';
	document.cookie = cookies;
}

// ���ѷ�����(210427)
function hideAppModal(){
	setCookie("app_link","y",3);
}
$(window).on('load', function(){
    var $modalApp = $('#appStore');
    if(isMobile && $modalApp.length>0) {
        $('#appStore').slideDown(300);
        mask()
    }
});
