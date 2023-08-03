const Classes = {
    '0' : 'Warrior',
    '1' : 'Hashashin',
    '2' : 'Sage',
    '4' : 'Ranger',
    '5' : 'Guardian',
    '7' : 'Drakania',
    '8' : 'Sorceress',
    '9' : 'Nova',
    '10' : 'Corsair',
    '11' : 'Lahn',
    '12' : 'Berserker',
    '15' : 'Maegu',
    '16' : 'Tamer',
    '17' : 'Shai',
    '19' : 'Striker',
    '20' : 'Musa',
    '21' : 'Maehwa',
    '23' : 'Mystic',
    '24' : 'Valkyrie',
    '25' : 'Kunoichi',
    '26' : 'Ninja',
    '27' : 'Dark Knight',
    '28' : 'Wizard',
    '29' : 'Archer',
    '30' : 'Woosa',
    '31' : 'Witch'
};

// Lottery js
(function($) {
    var Roulette = function(options) {
        var defaultSettings = {
            maxPlayCount: null,
            speed: 10,
            stopImageNumber: null,
            rollCount: 3,
            duration: 3,
            stopCallback: function() {},
            startCallback: function() {},
            slowDownCallback: function() {}
        };
        var defaultProperty = {
            playCount: 0,
            $rouletteTarget: null,
            imageCount: null,
            $images: null,
            originalStopImageNumber: null,
            totalHeight: null,
            topPosition: 0,
            maxDistance: null,
            slowDownStartDistance: null,
            isRunUp: true,
            isSlowdown: false,
            isStop: false,
            distance: 0,
            runUpDistance: null,
            isIE: navigator.userAgent.toLowerCase().indexOf("msie") > -1
        };
        var p = $.extend({}, defaultSettings, options, defaultProperty);
        var reset = function() {
            p.maxDistance = defaultProperty.maxDistance;
            p.slowDownStartDistance = defaultProperty.slowDownStartDistance;
            p.distance = defaultProperty.distance;
            p.isRunUp = defaultProperty.isRunUp;
            p.isSlowdown = defaultProperty.isSlowdown;
            p.isStop = defaultProperty.isStop;
            p.topPosition = defaultProperty.topPosition
        };
        var slowDownSetup = function() {
            if (p.isSlowdown) {
                return
            }
            p.slowDownCallback();
            p.isSlowdown = true;
            p.slowDownStartDistance = p.distance;
            p.maxDistance = p.distance + 2 * p.totalHeight;
            p.maxDistance += p.imageHeight - p.topPosition % p.imageHeight;
            if (p.stopImageNumber != null) {
                p.maxDistance += (p.totalHeight - p.maxDistance % p.totalHeight + p.stopImageNumber * p.imageHeight) % p.totalHeight
            }
        };
        var roll = function() {
            var speed_ = p.speed;
            if (p.isRunUp) {
                if (p.distance <= p.runUpDistance) {
                    var rate_ = ~~(p.distance / p.runUpDistance * p.speed);
                    speed_ = rate_ + 1
                } else {
                    p.isRunUp = false
                }
            } else if (p.isSlowdown) {
                var rate_ = ~~((p.maxDistance - p.distance) / (p.maxDistance - p.slowDownStartDistance) * p.speed);
                speed_ = rate_ + 1
            }
            if (p.maxDistance && p.distance >= p.maxDistance) {
                p.isStop = true;
                reset();
                p.stopCallback(p.$rouletteTarget.find("img").eq(p.stopImageNumber));
                return
            }
            p.distance += speed_;
            p.topPosition += speed_;
            if (p.topPosition >= p.totalHeight) {
                p.topPosition = p.topPosition - p.totalHeight
            }
            if (p.isIE) {
                p.$rouletteTarget.css("top", "-" + p.topPosition + "px")
            } else {
                p.$rouletteTarget.css("transform", "translate(0px, -" + p.topPosition + "px)")
            }
            setTimeout(roll, 1)
        };
        var init = function($roulette) {
            $roulette.css({
                overflow: "hidden"
            });
            defaultProperty.originalStopImageNumber = p.stopImageNumber;
            if (!p.$images) {
                p.$images = $roulette.find("img").remove();
                p.imageCount = p.$images.length;
                p.$images.eq(0).bind("load", function() {
                    p.imageHeight = $(this).height();
                    $roulette.css({
                        height: p.imageHeight + "px"
                    });
                    p.totalHeight = p.imageCount * p.imageHeight;
                    p.runUpDistance = 2 * p.imageHeight
                }).each(function() {
                    if (this.complete || this.complete === undefined) {
                        var src = this.src;
                        this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                        this.src = src
                    }
                })
            }
            $roulette.find("div").remove();
            p.$images.css({
                display: "block"
            });
            p.$rouletteTarget = $("<div>").css({
                position: "relative",
                top: "0"
            }).attr("class", "roulette-inner");
            $roulette.append(p.$rouletteTarget);
            p.$rouletteTarget.append(p.$images);
            p.$rouletteTarget.append(p.$images.eq(0).clone());
            $roulette.show()
        };
        var start = function() {
            p.playCount++;
            if (p.maxPlayCount && p.playCount > p.maxPlayCount) {
                return
            }
            p.stopImageNumber = $.isNumeric(defaultProperty.originalStopImageNumber) && Number(defaultProperty.originalStopImageNumber) >= 0 ? Number(defaultProperty.originalStopImageNumber) : Math.floor(Math.random() * p.imageCount);
            p.startCallback();
            roll();
            setTimeout(function() {
                slowDownSetup()
            }, p.duration * 1e3)
        };
        var stop = function(option) {
            if (!p.isSlowdown) {
                if (option) {
                    var stopImageNumber = Number(option.stopImageNumber);
                    if (0 <= stopImageNumber && stopImageNumber <= p.imageCount - 1) {
                        p.stopImageNumber = option.stopImageNumber
                    }
                }
                slowDownSetup()
            }
        };
        var option = function(options) {
            p = $.extend(p, options);
            p.speed = Number(p.speed);
            p.duration = Number(p.duration);
            p.duration = p.duration > 1 ? p.duration - 1 : 1;
            defaultProperty.originalStopImageNumber = options.stopImageNumber
        };
        var ret = {
            start: start,
            stop: stop,
            init: init,
            option: option
        };
        return ret
    };
    var pluginName = "roulette";
    $.fn[pluginName] = function(method, options) {
        return this.each(function() {
            var self = $(this);
            var roulette = self.data("plugin_" + pluginName);
            if (roulette) {
                if (roulette[method]) {
                    roulette[method](options)
                } else {
                    console && console.error("Method " + method + " does not exist on jQuery.roulette")
                }
            } else {
                roulette = new Roulette(method);
                roulette.init(self, method);
                $(this).data("plugin_" + pluginName, roulette)
            }
        })
    }
})(jQuery);


var option = {
    speed: 10,
    duration: 3,
    stopImageNumber: 0
}

var count = $('div.roulette').children().length

$('div.roulette').roulette(option);

$('#go').click(function() {
    option.stopImageNumber = (Math.random() * count) >> 0;
    $('#config').text(JSON.stringify(option))
    $('div.roulette')
        .roulette('option', option)
        .roulette('start');
})
// End Lottery js

// Start class images load
function load_class_images() {
    for(var i = 0; i <= 31; i++) {
        if (i == 3 || i == 6 || i == 13 || i == 14 || i == 18 || i == 22) continue;
        $('#bos-classes').append('<img id="'+ Classes[String(i)] +'" class="bos-class-img bos-class-active" src="https://bdocodex.com/images/skillcalc/class_' + i + '.webp" />');
    }
}
// End class images load

// Sort classes
$.fn.sort_select_box = function(){
    // Get images from div
    var images = $("#" + this.attr('id')).find('img');
    // sort alphabetically by id
    images.sort(function(a,b) {
        if ($(a).attr('id') > $(b).attr('id')) return 1;
        else if ($(a).attr('id') < $(b).attr('id')) return -1;
        else return 0
    })
   //replace with sorted images;
   $(this).empty().append( images );
}
// End sort classes

// Start class selection counter
function updateItemCount(className) {
    const itemCount = $("." + className).length;
    $("." + className + "-count").text(itemCount);
}
// End class selection counter

// On page load
$(window).on("load", function() {
   // Load class images
    load_class_images();

    // Sort class images
    $('#bos-classes').sort_select_box(); 

    // Use mousedown and click event handlers for the images
    $('#bos-classes').on('click', 'img', function() {
        $(this).toggleClass('bos-class-inactive');
        $(this).toggleClass('bos-class-active');
        updateItemCount('bos-class-active');
    });

    // Prevent the default dragging behavior when clicking on images
    $('#bos-classes img').on('dragstart', function(event) {
        event.preventDefault();
    });

    // Initialize class selection counter
    updateItemCount('bos-class-active');
    // Display the initial item count in the target element
    $('#bos-class-count-total').text($("." + 'bos-class-active').length);
});
