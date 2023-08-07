const Classes = {
    '0' : 'Berseker',
    '1' : 'Ranger',
    '2' : 'Sorceress',
    '3' : 'Tamer',
    '4' : 'Valkyrie',
    '5' : 'Warrior',
    '6' : 'Witch',
    '7' : 'Wizard',
    '8' : 'Musa',
    '9' : 'Maehwa',
    '10' : 'Ninja',
    '11' : 'Kunoichi',
    '12' : 'Dark Knight',
    '13' : 'Striker',
    '14' : 'Mystic',
    '15' : 'Lahn',
    '16' : 'Archer',
    '17' : 'Shai',
    '18' : 'Guardian',
    '19' : 'Hashashin',
    '20' : 'Nova',
    '21' : 'Sage',
    '22' : 'Corsair',
    '23' : 'Drakania',
    '24' : 'Woosa',
    '25' : 'Maegu'
};

const State = {
    '0' : 'Awakening',
    '1' : 'Succession'
}

const MainWeapons = {
    // Main Weapons
    'Striker' : {11210 : 'Kzarka Gauntlet', 11287 : 'Offin Tett\'s Radiant Gauntlet'},
    'Mystic' : {11210 : 'Kzarka Gauntlet', 11287 : 'Offin Tett\'s Radiant Gauntlet'},
    'Musa' : {13310 : 'Kzarka Blade', 13386 : 'Offin Tett\'s Radiant Blade'},
    'Maehwa' : {13310 : 'Kzarka Blade', 13386 : 'Offin Tett\'s Radiant Blade'},
    'Berserker' : {10610 : 'Kzarka Axe', 10686 : 'Offin Tett\'s Radiant Axe'},
    'Ranger' : {10210 : 'Kzarka Longbow', 10286 : 'Offin Tett\'s Radiant Longbow'},
    'Sorceress' : {10410 : 'Kzarka Amulet', 10486 : 'Offin Tett\'s Radiant Amulet'},
    'Tamer' : {13210 : 'Kzarka Shortsword', 13286 : 'Offin Tett\'s Radiant Shortsword'},
    'Valkyrie' : {10010 : 'Kzarka Longsword', 10086 : 'Offin Tett\'s Radiant Longsword'},
    'Warrior' : {10010 : 'Kzarka Longsword', 10086 : 'Offin Tett\'s Radiant Longsword'},
    'Witch' : {14410 : 'Kzarka Staff', 14486 : 'Offin Tett\'s Radiant Staff'},
    'Wizard' : {14410 : 'Kzarka Staff', 14486 : 'Offin Tett\'s Radiant Staff'},
    'Ninja' : {13210 : 'Kzarka Shortsword', 13286 : 'Offin Tett\'s Radiant Shortsword'},
    'Kunoichi' : {13210 : 'Kzarka Shortsword', 13286 : 'Offin Tett\'s Radiant Shortsword'},
    'Dark Knight' : {11360 : 'Kzarka Kreigsmesser', 11436 : 'Offin Tett\'s Radiant Kreigsmesser'},
    'Lahn' : {13410 : 'Kzarka Crescent Pendulum', 13487 : 'Offin Tett\'s Radiant Crescent Pendulum'},
    'Archer' : {13780 : 'Kzarka Crossbow', 13786 : 'Offin Tett\'s Radiant Crossbow'},
    'Shai' : {718510 : 'Kzarka Florang', 718586 : 'Offin Tett\'s Radiant Florang'},
    'Guardian' : {690513 : 'Kzarka Battle Axe', 690541 : 'Offin Tett\'s Radiant Battle Axe'},
    'Hashashin' : {692011 : 'Kzarka Shamshir', 692039 : 'Offin Tett\'s Radiant Shamshir'},
    'Nova' : {730511 : 'Kzarka Morning Star', 730539 : 'Offin Tett\'s Radiant Morning Star'},
    'Sage' : {732260 : 'Kzarka Kyve', 732288 : 'Offin Tett\'s Radiant Kyve'},
    'Corsair' : {733010 : 'Kzarka Serenaca', 733038 : 'Offin Tett\'s Radiant Serenaca'},
    'Drakania' : {733971 : 'Kzarka Slayer', 733972 : 'Offin Tett\'s Radiant Slayer'},
    'Woosa' : {739410 : 'Kzarka Swallowtail Fan', 739438 : 'Offin Tett\'s Radiant Swallowtail Fan'},
    'Maegu' : {740710 : 'Kzarka Foxspirit Charm', 740738 : 'Offin Tett\'s Radiant Foxspirit Charm'}
};
const AwaWeapons = {
    // Awakening Weapons
    'Striker' : {14822 : 'Dandelion Gardbrace'},
    'Mystic' : {14830 : 'Dandelion Cestus'},
    'Musa' : {14762 : 'Dandelion Blade'},
    'Maehwa' : {14772 : 'Dandelion Kerispear'},
    'Berserker' : {14722 : 'Dandelion Iron Buster'},
    'Ranger' : {14732 : 'Dandelion Kamasylven Sword'},
    'Sorceress' : {14712 : 'Dandelion Scythe'},
    'Tamer' : {14742 : 'Dandelion Celestial Bo Staff'},
    'Valkyrie' : {14752 : 'Dandelion Lancia'},
    'Warrior' : {14702 : 'Dandelion Greatsword'},
    'Witch' : {14802 : 'Dandelion Aad Sphera'},
    'Wizard' : {14812 : 'Dandelion Godr Sphera'},
    'Ninja' : {14782 : 'Dandelion Sura Katana'},
    'Kunoichi' : {14792 : 'Dandelion Sah Chakram'},
    'Dark Knight' : {14817 : 'Dandelion Vediant'},
    'Lahn' : {550502 : 'Dandelion Crimson Glaives'},
    'Archer' : {13903 : 'Dandelion Greatbow'},
    'Shai' : {690005 : 'Artina Sol'},
    'Guardian' : {691503 : 'Kzarka Jordun'},
    'Hashashin' : {692802 : 'Dandelion Dual Glaives'},
    'Nova' : {730903 : 'Dandelion Sting'},
    'Sage' : {732652 : 'Dandelion Kibelius'},
    'Corsair' : {733402 : 'Dandelion Patraca'},
    'Drakania' : {735802 : 'Dandelion Trion'},
    'Woosa' : {740402 : 'Dandelion Soul Tome'},
    'Maegu' : {741702 : 'Dandelion Foxtail Fans'}
};
const SubWeapons = {
    // Sub Weapons
    'Striker' : {701097 : 'Nouver Vambrace', 701098 : 'Kutum Vambrace'},
    'Mystic' : {701097 : 'Nouver Vambrace', 701098 : 'Kutum Vambrace'},
    'Musa' : {701091 : 'Nouver Horn Bow', 701092 : 'Kutum Horn Bow'},
    'Maehwa' : {701091 : 'Nouver Horn Bow', 701092 : 'Kutum Horn Bow'},
    'Berserker' : {701088 : 'Kutum Axe', 701087 : 'Nouver Axe'},
    'Ranger' : {701083 : 'Nouver Dagger', 701084 : 'Kutum Dagger'},
    'Sorceress' : {701085 : 'Nouver Talisman', 701086 : 'Kutum Talisman'},
    'Tamer' : {701089 : 'Nouver Trinket', 701090 : 'Kutum Trinket'},
    'Valkyrie' : {701081 : 'Nouver Shield', 701082 : 'Kutum Shield'},
    'Warrior' : {701081 : 'Nouver Shield', 701082 : 'Kutum Shield'},
    'Witch' : {701083 : 'Nouver Dagger', 701084 : 'Kutum Dagger'},
    'Wizard' : {701083 : 'Nouver Dagger', 701084 : 'Kutum Dagger'},
    'Ninja' : {701095 : 'Nouver Shuriken', 701096 : 'Kutum Shuriken'},
    'Kunoichi' : {701093 : 'Nouver Kunai', 701094 : 'Kutum Kunai'},
    'Dark Knight' : {701087 : 'Nouver Ornamental Knot', 701088 : 'Kutum Ornamental Knot'},
    'Lahn' : {701099 : 'Nouver Noble Sword', 701100 : 'Kutum Noble Sword'},
    'Archer' : {701101 : 'Nouver Ra\'ghon', 701102 : 'Kutum Ra\'ghon'},
    'Shai' : {719055 : 'Nouver Vitclari', 719056 : 'Kutum Vitclari'},
    'Guardian' : {701081 : 'Nouver Shield', 701082 : 'Kutum Shield'},
    'Hashashin' : {692531 : 'Nouver Haladie', 692532 : 'Kutum Haladie'},
    'Nova' : {730733 : 'Nouver Quoratum', 730734 : 'Kutum Quoratum'},
    'Sage' : {701085 : 'Nouver Talisman', 701086 : 'Kutum Talisman'},
    'Corsair' : {733232 : 'Nouver Mareca', 733233 : 'Kutum Mareca'},
    'Drakania' : {733973 : 'Nouver Shard', 733974 : 'Kutum Shard'},
    'Woosa' : {739931 : 'Nouver Do Stave', 739932 : 'Kutum Do Stave'},
    'Maegu' : {741030 : 'Nouver Binyeo Knife', 741031 : 'Kutum Binyeo Knife'}
};
const Helmets = {
    // Helmets
    11013: "Giath's Helmet",
    11101: "Griffon's Helmet"
};
const Gloves = {
    // Gloves
    11102: "Leebur's Gloves",
    11015: "Bheg's Gloves"
};
const Boots = {
    // Boots
    11016: "Muskan's Shoes",
    11103: "Urugon's Shoes"
};
const Armor = {
    // Armor
    11017: "Dim Tree Spirit's Armor",
    740603: "Slumbering Sage's Armor"
};
const Rings = {
    // Rings
    12068: "Ominous Ring",
    12042: "Forest Ronaros Ring",
    12031: "Ring of Crescent Guardian",
    740605: "Stormy Eye Ring"
};
const Earrings = {

    // Earrings
    11828: "Tungrad Earring",
    11855: "Dawn Earring",
    11834: "Narc Ear Accessory",
    740606: "Peaceful Vagabond's Earring"
};
const Necklaces = {
    // Necklaces
    11663: "Revived Lunar Necklace",
    11625: "Sicil's Necklace",
    11607: "Ogre Ring"
};
const Belts = {
    // Belts
    12229: "Centaurus Belt",
    12257: "Turo's Belt",
    12251: "Orkinrad's Belt",
    12230: "Basilisk's Belt",
    12233: "Stormy Eye Belt"
};
// PATHS
// Armors
const helmetPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/13_hel/%ITEM_ID%.webp"; // Path to helmet icons
const armorPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/09_upperbody/%ITEM_ID%.webp"; // Path to armor icons
const bootPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/12_foot/%ITEM_ID%.webp"; // Path to boot icons
const glovePath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/11_hand/%ITEM_ID%.webp"; // Path to glove icons
// Accessories
const ringPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/16_ring/%ITEM_ID%.webp"; // Path to ring icons
const earringPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/17_earring/%ITEM_ID%.webp"; // Path to earring icons
const necklacePath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/15_necklace/%ITEM_ID%.webp"; // Path to necklace icons
const beltPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/18_belt/%ITEM_ID%.webp"; // Path to belt icons
// Weapons
const classIconPath = "https://assets.garmoth.com/classes/200/%INDEX%.webp"; // Path to class icons
const weaponPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/01_weapon/%ITEM_ID%.webp"; // Path to main/awa weapon icons
const subWeaponPath = "https://assets.garmoth.com/img/new_icon/06_pc_equipitem/00_common/08_subweapon/%ITEM_ID%.webp"; // Path to sub weapon icons
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
    // Iterate through classes and load images
    for (const [key, value] of Object.entries(Classes)) {
        $('#bos-classes').append('<img id="'+ value +'" class="bos-class-img bos-class-active" src="'+ classIconPath.replace("%INDEX%", key) + '" />');
      }
}
// End class images load
// Start item generation
function generate_items() {
    // Set generation button to disabled
    $('#gen-button').attr('disabled', true);
    // Set gen-result to hidden
    $('#gen-result').css('display', 'none');
    // Iterate through all classes that have 'bos-class-active' class
    var activeClasses = $('.bos-class-active');
    // Pick 1 random class from the list
    var randomClass = activeClasses[Math.floor(Math.random() * activeClasses.length)];
    var randomClassId = randomClass.id;
    // Display class image in 'gen-class-img'
    $('#gen-class-img').attr('src', randomClass.src);
    // Pick succession or awakening
    var state = '';
    if (randomClassId == "Shai" || randomClassId == "Archer") {
        
    }
    else {
        var state_id = get_random_from_dict(State);
        state = State[state_id];
    }
    // Display class name in 'gen-class-name'
    $('#gen-class-name').text(randomClassId + ' ' + state);
    // Pick random items for that class
    var helmet_id = fill_id(get_random_from_dict(Helmets));
    var armor_id = fill_id(get_random_from_dict(Armor));
    var gloves_id = fill_id(get_random_from_dict(Gloves));
    var boots_id = fill_id(get_random_from_dict(Boots));
    var main_weapon_id = fill_id(get_random_from_dict(MainWeapons[randomClassId]));
    var awa_weapon_id = fill_id(get_random_from_dict(AwaWeapons[randomClassId]));
    var sub_weapon_id = fill_id(get_random_from_dict(SubWeapons[randomClassId]));
    // Pick random accs
    var ring1_id = fill_id(get_random_from_dict(Rings));
    var ring2_id = fill_id(get_random_from_dict(Rings));
    var earring1_id = fill_id(get_random_from_dict(Earrings));
    var earring2_id = fill_id(get_random_from_dict(Earrings));
    var belt_id = fill_id(get_random_from_dict(Belts));
    var necklace_id = fill_id(get_random_from_dict(Necklaces));
    // Remove all items from 'gen-item-container'
    $('#gen-item-helmet, #gen-item-armor, #gen-item-gloves, #gen-item-shoes, #gen-item-mainhand, #gen-item-subweapon, #gen-item-awakening, #gen-item-ring1, #gen-item-ring2, #gen-item-earring1, #gen-item-earring2, #gen-item-belt, #gen-item-necklace').empty();
    // Display items in 'gen-item-container'
    $('#gen-item-helmet').append('<img class="gen-item" src="'+ helmetPath.replace("%ITEM_ID%", helmet_id) + '" />');
    $('#gen-item-armor').append('<img class="gen-item" src="'+ armorPath.replace("%ITEM_ID%", armor_id) + '" />');
    $('#gen-item-gloves').append('<img class="gen-item" src="'+ glovePath.replace("%ITEM_ID%", gloves_id) + '" />');
    $('#gen-item-shoes').append('<img class="gen-item" src="'+ bootPath.replace("%ITEM_ID%", boots_id) + '" />');
    $('#gen-item-mainhand').append('<img class="gen-item" src="'+ weaponPath.replace("%ITEM_ID%", main_weapon_id) + '" />');
    $('#gen-item-awakening').append('<img class="gen-item" src="'+ weaponPath.replace("%ITEM_ID%", awa_weapon_id) + '" />');
    $('#gen-item-subweapon').append('<img class="gen-item" src="'+ subWeaponPath.replace("%ITEM_ID%", sub_weapon_id) + '" />');
    $('#gen-item-ring1').append('<img class="gen-item" src="'+ ringPath.replace("%ITEM_ID%", ring1_id) + '" />');
    $('#gen-item-ring2').append('<img class="gen-item" src="'+ ringPath.replace("%ITEM_ID%", ring2_id) + '" />');
    $('#gen-item-earring1').append('<img class="gen-item" src="'+ earringPath.replace("%ITEM_ID%", earring1_id) + '" />');
    $('#gen-item-earring2').append('<img class="gen-item" src="'+ earringPath.replace("%ITEM_ID%", earring2_id) + '" />');
    $('#gen-item-belt').append('<img class="gen-item" src="'+ beltPath.replace("%ITEM_ID%", belt_id) + '" />');
    $('#gen-item-necklace').append('<img class="gen-item" src="'+ necklacePath.replace("%ITEM_ID%", necklace_id) + '" />');
    // Set generation button to enabled
    $('#gen-button').attr('disabled', false);
    // Set gen-result to visible
    $('#gen-result').css('display', 'block');
}
// End item generation
// Get random item from dictionary
function get_random_from_dict(dict) {
    if (!dict || typeof dict !== 'object') {
        console.error('Invalid input. Please provide a valid dictionary.');
        return;
    }
    
    var keys = Object.keys(dict);
    var randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
// Fill id's to match this format: 00000000. Example: 00715017
function fill_id(id) {
    var result = '';
    for (var i = id.length; i < 8; i++) {
        result += '0';
    }
    result += id;
    return result;
}
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
    // Add generate button click event
    $('#gen-button').on('click', function() {
        generate_items();
    });
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
