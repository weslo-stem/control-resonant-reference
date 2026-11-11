import "/control-resonant-reference/assets/javascripts/placeholder-data.js" 

var tables = document.getElementsByClassName("combat-ability-damage-table");
var clearbutton = document.getElementById("clear-all");

// new multiplier(name, element tag (data-input-for), damage, falter)
class multiplier {
    static name;
    static damage;
    static falter;
    static enabled;
    static element;
    static iconid;
    constructor(n, dif, icn, d, f) {
        this.name = n;
        this.damage = d;
        this.falter = f;
        this.element = document.querySelector('[data-input-for="' + dif + '"]');
        this.enabled = this.element?.checked;
        this.iconid = icn;
    }

    matchCheck = () => {
        this.enabled = this.element?.checked
    }
}

class multipliers {
    static multArray;
    constructor() {
        this.multArray = [];
        this.multArray.push(new multiplier("Critical Hit", "CRITICAL", "critical-icon", 0, 0));
        this.multArray.push(new multiplier("Compact", "COMPACT", "compact-icon", 0, 0));

        this.multArray.push(new multiplier('Tracked', "TRACKED", "tracked-icon", 0.3, 0.3));
        this.multArray.push(new multiplier('Empowered', "EMPOWERED", "empowered-icon", 0.25, 0.25));
        this.multArray.push(new multiplier('Weakened', "WEAKENED", "weakened-icon", 0.25, 0.25));
        this.multArray.push(new multiplier('Ruthless', "RUTHLESS", "ruthless-icon", 2, 2));
        this.multArray.push(new multiplier('Retaliation', "RETALIATION", "retaliation-icon", 0.5, 0.5));
        this.multArray.push(new multiplier('Vengeance', "VENGEANCE", "vengeance-icon", 0.5, 0.5));

        this.multArray.push(new multiplier('Spray Paint', "SPRAYPAINT", "spraypaint-icon", 0.15, 0.0));
        this.multArray.push(new multiplier('World Tour Tickets', "WORLD_TOUR_TICKETS", "world-tour-tickets-icon", 1, 0.0));
        this.multArray.push(new multiplier('Whetstone', "WHETSTONE", "whetstone-icon", 0.2, -0.2));
        this.multArray.push(new multiplier('Trusted Spanner', "TRUSTED_SPANNER", "trusted-spanner-icon", 0.15, 0.0));
        this.multArray.push(new multiplier('Fork', "FORK", "fork-icon", 0.15, 0.0));
        this.multArray.push(new multiplier('Fingerboard', "FINGERBOARD", "fingerboard-icon", 0.25, 0.25));
        this.multArray.push(new multiplier('Bug Spray', "BUG_SPRAY", "bug-spray-icon", 0.3, 0.3));
        this.multArray.push(new multiplier('Golden Earrings', "GOLDEN_EARRINGS", "golden-earrings-icon", -0.3, 0.2));
        this.multArray.push(new multiplier('Medical Alert Bands', "MEDICAL_ALERT_BANDS", "medical-alert-bands-icon", 0.0, 0.25));
        this.multArray.push(new multiplier("Mother's Locket", "MOTHERS_LOCKET", "mothers-locket-icon", 0.25, 0.0));
        this.multArray.push(new multiplier("Practice Knot", "PRACTICE_KNOT", "practice-knot-icon", 0.0, 0.15));
        this.multArray.push(new multiplier("Brass Dusters", "BRASS_DUSTERS", "brass-dusters-icon", 0.5, -999999));
        this.multArray.push(new multiplier("Framing Hammer", "FRAMING_HAMMER", "framing-hammer-icon", -999999, 0.3));
    }

    check = () => {
        this.multArray.forEach((mult) => {
            mult.matchCheck()
        })
    }

    clearall = () => {
        this.multArray.forEach((mult) => {
            if (mult != null && mult.element != null && mult.element.checked) {
                mult.element.checked = false;
                mult.element.dispatchEvent(new Event("change"));
            }
        })
    }
}

var _multipliers = new multipliers()
clearbutton.addEventListener("click", _multipliers.clearall)

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("change", _multipliers.check)
    cb.addEventListener("change", updateValues);
    cb.addEventListener("change", updateIcons);
});

document.addEventListener("PlaceholderPluginConfigJson", _multipliers.check)
document.addEventListener("PlaceholderPluginConfigJson", updateIcons)
document.addEventListener("PlaceholderPluginConfigJson", updateValues)

function updateValues() {
    var k = 0;
    [].forEach.call(tables, function (table) {
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j > 0) {
                    if (j == 1) {
                        if (col != null & col.innerHTML != "DF%") {
                            var mappedDamage = _multipliers.multArray.map((x) => x.enabled ? x.damage : 0)
                            var mappedFalter = _multipliers.multArray.map((x) => x.enabled ? x.falter : 0)

                            var finalDamage = mappedDamage.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var finalFalter = mappedFalter.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                            var basecol = parseFloat(col.getAttribute('data-base-value'))/100;

                            if (finalDamage == finalFalter) {
                                col.innerHTML = Math.round((parseFloat(basecol) + finalDamage)*100) + "%"
                            } else {
                                var str = Math.max(0, Math.round(parseFloat((basecol) + finalDamage) * 100)) + "%" + "/" + Math.max(0, Math.round(parseFloat((basecol) + finalFalter) * 100)) + "%"
                                col.innerHTML = str;
                            }
                        }
                        
                    } else {
                        var col = document.getElementById(k + 'xr' + i + 'x' + j);
                        if (col != null) {
                            var finalMap;
                            var finalOut;

                            var header = table.rows[0].cells[j].innerHTML;
                            if (header.includes('Damage')) {
                                finalMap = _multipliers.multArray.map((x) => x.enabled ? x.damage : 0)
                            }
                            else if (header.includes('Falter')) {
                                finalMap = _multipliers.multArray.map((x) => x.enabled ? x.falter : 0)
                            }
                            finalOut = finalMap.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var basecol = col.getAttribute('data-base-value');
                            col.innerHTML = Math.max(0, Math.round(parseFloat(basecol) + (parseFloat(basecol) * finalOut)))
                        }
                    }
                }
            }
        }
        k++;
    }) 
}
function updateIcons() {
    _multipliers.multArray.forEach((mult) => {
        var style = document.getElementById(mult.iconid)?.style
        if (style != null) {
            style.height = mult.enabled ? "auto" : "0";
            style.width = mult.enabled ? "auto" : "0";
            style.visibility = mult.enabled ? "visible" : "hidden";
        }
    })
}

updateIcons()
updateValues()