function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

var isDebug = getQueryString('debug') >= 1;
var layout = {
  initAni: function () {
    var $animates = $('.animated');
    $.each($animates, function (index, el) {
      var delay = $(el).data('delay') || .3;
      var duration = $(el).data('duration');
        $(el).css({'-webkit-animation-delay': delay + 's'});
      if (duration) {
        $(el).css({'-webkit-animation-duration': duration + 's'});
      }
    });
  },
  init: function () {
    this.initAni();
    this.bind();
    if (isDebug) {
      $('.layout').addClass('swiper-slide-active');
    } else {
      CLMPlayer.registerEventListener('viewappearing', function () {
        $('.layout').addClass('swiper-slide-active');
      });
      CLMPlayer.registerEventListener('viewdisappearing', function () {
        $('.layout').removeClass('swiper-slide-active');
      })
    }
  },
  disablePageSwipe: function () {
    if (isDebug) {
      return
    }
    CLMPlayer.defineNoSwipeRegion('pageRegion', 0, 0, window.innerWidth, window.innerHeight);
  },
  enablePageSwipe: function () {
    if (isDebug) {
      return
    }
    CLMPlayer.destroyNoSwipeRegion('pageRegion');
  },
  goToSlide: function (slide) {
    this.prevSlide = slide;
    if (isDebug) {
      location.href = slide + '?debug=1';
    } else {
      CLMPlayer.gotoSlide(null, slide);
    }
  },
  goToSequence: function (name) {
    if (isDebug) {
      location.href = '../' + name + '/01_slide.html?debug=1';
    } else {
      CLMPlayer.gotoSlide(name, '01_slide.html', null);
    }
  },
  bind: function () {
    var self = this;
    $(document).on('click', '.J_slide', function (e) {
      var $target = $(e.currentTarget), slide = $target.data('slide');
      self.goToSlide(slide);
    }).on('click', '.J_home', function () {
      self.goToSequence('01_sequences');
    })
  }
};
layout.init();
