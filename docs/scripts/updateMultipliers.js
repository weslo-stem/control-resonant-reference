import "/control-resonant-reference/assets/javascripts/placeholder-data.js" 

const phTracked = document.querySelector('[data-input-for="TRACKED"]');
const phEmpowered = document.querySelector('[data-input-for="EMPOWERED"]');
const phSpraypaint = document.querySelector('[data-input-for="SPRAYPAINT"]');

var tables = document.getElementsByClassName("combat-ability-damage-table");

// new multiplier(damage, falter)
class multiplier {
    static damage;
    static falter;
    static enabled;
    constructor(d, f) {
        this.damage = d;
        this.falter = f;
    }

    setEnabled = (b) => {
        this.enabled = b
    }
}

class multipliers {
    static tracked;
    static empowered;
    static spraypaint;
    constructor() {
        this.tracked = new multiplier(0.3, 0.3);
        this.empowered = new multiplier(0.25, 0.25);
        this.spraypaint = new multiplier(0.15, 0.0);
    }

    check = () => {
        this.tracked.setEnabled(phTracked.checked)
        this.empowered.setEnabled(phEmpowered.checked)
        this.spraypaint.setEnabled(phSpraypaint.checked)
    }
}

var _multipliers = new multipliers()

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    //cb.addEventListener("click", updateValues);
    //cb.addEventListener("click", updateIcons);

    cb.addEventListener("change", updateValues);
    cb.addEventListener("change", updateIcons);
    cb.addEventListener("change", _multipliers.check)
});

document.addEventListener("PlaceholderPluginConfigJson", updateIcons)
document.addEventListener("PlaceholderPluginConfigJson", updateValues)
document.addEventListener("PlaceholderPluginConfigJson", _multipliers.check)


function updateValues() {
    var k = 0;
    [].forEach.call(tables, function (table) {
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j > 0) {
                    if (j == 1) {
                        if (col != null & col.innerHTML != "DF%") {
                            var dtracked = phTracked.checked ? _multipliers.tracked.damage : 0;
                            var dempowered = phEmpowered.checked ? _multipliers.empowered.damage : 0;
                            var dspraypaint = phEmpowered.checked ? _multipliers.spraypaint.damage : 0;

                            var ftracked = phTracked.checked ? _multipliers.tracked.falter : 0;
                            var fempowered = phEmpowered.checked ? _multipliers.empowered.falter : 0;
                            var fspraypaint = phEmpowered.checked ? _multipliers.empowered.falter : 0;

                            var dfinalmult = dtracked + dempowered + dspraypaint
                            var ffinalmult = ftracked + fempowered + fspraypaint

                            var basecol = parseFloat(col.getAttribute('data-base-value'))/100;

                            if (dfinalmult == ffinalmult) {
                                col.innerHTML = Math.round((parseFloat(basecol) + dfinalmult)*100) + "%"
                            } else {
                                var str = Math.round(parseFloat((basecol) + dfinalmult) * 100) + "%" + "/" + Math.round((parseFloat(basecol) + ffinalmult) * 100) + "%"
                                col.innerHTML = str;
                            }
                        }
                        
                    } else {
                        var col = document.getElementById(k + 'xr' + i + 'x' + j);
                        if (col != null) {
                            var tracked;
                            var empowered;
                            var spraypaint;
                            var header = table.rows[0].cells[j].innerHTML;
                            if (header.includes('Damage')) {
                                tracked = phTracked.checked ? _multipliers.tracked.damage : 0;
                                empowered = phEmpowered.checked ? _multipliers.empowered.damage : 0;
                                spraypaint = phSpraypaint.checked ? _multipliers.spraypaint.damage : 0;
                                console.log(+_multipliers.tracked.enabled * _multipliers.tracked.damage)
                            }
                            else if (header.includes('Falter')) {
                                tracked = phTracked.checked ? _multipliers.tracked.falter : 0;
                                empowered = phEmpowered.checked ? _multipliers.empowered.falter : 0;
                                spraypaint = phSpraypaint.checked ? _multipliers.spraypaint.falter : 0;
                            }
                            var finalmult = tracked + empowered + spraypaint
                            var basecol = col.getAttribute('data-base-value');
                            col.innerHTML = Math.round(parseFloat(basecol) + (parseFloat(basecol) * finalmult))
                        }
                    }
                }
            }
        }
        k++;
    }) 
}
function updateIcons() {
    var tracked_style = document.getElementById("tracked-icon").style
    var empowered_style = document.getElementById("empowered-icon").style
    var spraypaint_style = document.getElementById("spraypaint-icon").style

    tracked_style.height = phTracked.checked ? "auto" : "0";
    tracked_style.width = phTracked.checked ? "auto" : "0";
    tracked_style.visibility = phTracked.checked ? "visible" : "hidden";

    empowered_style.height = phEmpowered.checked ? "auto" : "0";
    empowered_style.width = phEmpowered.checked ? "auto" : "0";
    empowered_style.visibility = phEmpowered.checked ? "visible" : "hidden";

    spraypaint_style.height = phSpraypaint.checked ? "auto" : "0";
    spraypaint_style.width = phSpraypaint.checked ? "auto" : "0";
    spraypaint_style.visibility = phSpraypaint.checked ? "visible" : "hidden";
}

updateIcons()
updateValues()