import "/control-resonant-reference/assets/javascripts/placeholder-data.js" 

var catables = document.getElementsByClassName("combat-ability-damage-table");
var wtables = document.getElementsByClassName("weapon-damage-table");
var clearbutton = document.getElementById("clear-all");
var artifactslabel = document.getElementById("artifacts-label");
var chargeCount = document.querySelector('[data-input-for="CHARGE_COUNT"]');
var summonCount = document.querySelector('[data-input-for="SUMMON_COUNT"]');
var secHeader = document.getElementsByTagName("h2").item(0)

// new multiplier(name, element tag (data-input-for), damage, falter)
class multiplier {
    static name;
    static damage;
    static falter;
    static enabled;
    static element;
    static iconid;
    static buffsrc;
    constructor(n, dif, icn, src, d, f) {
        this.name = n;
        this.damage = d;
        this.falter = f;
        this.element = document.querySelector('[data-input-for="' + dif + '"]');
        this.enabled = this.element?.checked;
        this.iconid = icn;
        this.buffsrc = src;
    }

    matchCheck = () => {
        this.enabled = this.element?.checked
        if (this.buffsrc == 'Talent') { this.talentSolve() }
        if (secHeader.innerHTML.includes("Primary")) { this.aberrantSolve("Primary") }
        else if (secHeader.innerHTML.includes("Secondary")) { this.aberrantSolve("Secondary") }
        else if (secHeader.innerHTML.includes("Combo Finisher")) { this.aberrantSolve("Combo Finisher") }
    }

    talentSolve = () => {
        if (this.name=="Stored Command") {
            var attrVal = parseInt(chargeCount.value)
            if (chargeCount && attrVal <= 5 && attrVal >= 0) {
                this.damage = 0.05 * attrVal
                this.falter = 0.05 * attrVal
            }
        }
        if (this.name == "Retribution") {
            var tryGetRetaliation = document.querySelector('[data-input-for="RETALIATION"]');
            if (tryGetRetaliation && tryGetRetaliation.checked) {
                this.falter = 0.25
            } else {
                this.falter = 0
            }
        }
        if (this.name == "Summon Synergy") {
            var attrVal = parseInt(summonCount.value)
            if (summonCount && attrVal <= 5 && attrVal >= 0) {
                this.damage = 0.1 * attrVal
                this.falter = 0.1 * attrVal
            }
        }
        if (this.name == "Energized Melee") {
            var attrVal = parseInt(chargeCount.value)
            if (chargeCount && attrVal <= 5 && attrVal >= 0) {
                this.damage = 0.05 * attrVal
                this.falter = 0.05 * attrVal
            }
        }
    }

    aberrantSolve = (form) => {
        var tryGetDominance = document.querySelector('[data-input-for="DOMINANCE"]');
        if (form == "Primary" && tryGetDominance && tryGetDominance.checked) {
            this.damage = 1
        }
        else if (form == "Secondary" && tryGetDominance && tryGetDominance.checked) {
            this.damage = 0.5
        }
        else if (form == "Combo Finisher" && tryGetDominance && tryGetDominance.checked) {
            this.damage = 1
        }
    }
}

class multipliers {
    static multArray;
    constructor() {
        this.multArray = [];
        this.multArray.push(new multiplier("Critical Hit", "CRITICAL", "critical-icon", 'Other', 0, 0));
        this.multArray.push(new multiplier("Compact", "COMPACT", "compact-icon", 'Artifact', 0, 0));

        this.multArray.push(new multiplier('Tracked', "TRACKED", "tracked-icon", 'EnemyDebuff', 0.3, 0.3));
        this.multArray.push(new multiplier('Empowered', "EMPOWERED", "empowered-icon", 'Buff', 0.25, 0.25));
        this.multArray.push(new multiplier('Focused', "FOCUSED", "focused-icon", 'Buff', 0, 0.2));
        this.multArray.push(new multiplier('Weakened', "WEAKENED", "weakened-icon", 'EnemyDebuff', 0.25, 0.25));
        this.multArray.push(new multiplier('Ruthless', "RUTHLESS", "ruthless-icon", 'Buff', 2, 2));
        this.multArray.push(new multiplier('Retaliation', "RETALIATION", "retaliation-icon", 'Buff', 0.5, 0.5));
        this.multArray.push(new multiplier('Vengeance', "VENGEANCE", "vengeance-icon", 'Buff', 0.5, 0.5));

        this.multArray.push(new multiplier('Spray Paint', "SPRAYPAINT", "spraypaint-icon", 'Artifact', 0.15, 0.0));
        this.multArray.push(new multiplier('World Tour Tickets', "WORLD_TOUR_TICKETS", "world-tour-tickets-icon", 'Artifact', 1, 0.0));
        this.multArray.push(new multiplier('Whetstone', "WHETSTONE", "whetstone-icon", 'Artifact', 0.2, -0.2));
        this.multArray.push(new multiplier('Trusted Spanner', "TRUSTED_SPANNER", "trusted-spanner-icon", 'Artifact', 0.15, 0.0));
        this.multArray.push(new multiplier('Fork', "FORK", "fork-icon", 'Artifact', 0.15, 0.0));
        this.multArray.push(new multiplier('Fingerboard', "FINGERBOARD", "fingerboard-icon", 'Artifact', 0.25, 0.25));
        this.multArray.push(new multiplier('Bug Spray', "BUG_SPRAY", "bug-spray-icon", 'Artifact', 0.3, 0.3));
        this.multArray.push(new multiplier('Golden Earrings', "GOLDEN_EARRINGS", "golden-earrings-icon", 'Artifact', -0.3, 0.2));
        this.multArray.push(new multiplier('Medical Alert Bands', "MEDICAL_ALERT_BANDS", "medical-alert-bands-icon", 'Artifact', 0.0, 0.25));
        this.multArray.push(new multiplier("Mother's Locket", "MOTHERS_LOCKET", "mothers-locket-icon", 'Artifact', 0.25, 0.0));
        this.multArray.push(new multiplier("Practice Knot", "PRACTICE_KNOT", "practice-knot-icon", 'Artifact', 0.0, 0.15));
        this.multArray.push(new multiplier("Brass Dusters", "BRASS_DUSTERS", "brass-dusters-icon", 'Artifact', 0.5, -9999999));
        this.multArray.push(new multiplier("Framing Hammer", "FRAMING_HAMMER", "framing-hammer-icon", 'Artifact', -9999999, 0.3));
        this.multArray.push(new multiplier("Scrunchie", "SCRUNCHIE", "scrunchie-icon", 'Artifact', 0.1, 0));
        this.multArray.push(new multiplier("The Weekend Crossword", "THE_WEEKEND_CROSSWORD", "the-weekend-crossword-icon", 'Artifact', 0.15, 0));
        this.multArray.push(new multiplier("Unfinished Lollipop", "UNFINISHED_LOLLIPOP", "unfinished-lollipop-icon", 'Artifact', 0.1, 0));


        this.multArray.push(new multiplier("Dominance", "DOMINANCE", "dominance-icon", 'Talent', 0, 0));
        this.multArray.push(new multiplier("Stored Command", "STORED_COMMAND", "stored-command-icon", 'Talent', 0, 0));
        this.multArray.push(new multiplier("All-Rounder", "ALL_ROUNDER", "all-rounder-icon", 'Talent', 0.05, 0.05));
        this.multArray.push(new multiplier("Extra Impact", "EXTRA_IMPACT", "extra-impact-icon", 'Talent', 0, 0.1));
        this.multArray.push(new multiplier("Retribution", "RETRIBUTION", "retribution-icon", 'Talent', 0, 0));
        this.multArray.push(new multiplier("Optimized Projectiles", "OPTIMIZED_PROJECTILES", "optimized-projectiles-icon", 'Talent', 0.25, 0.25));
        this.multArray.push(new multiplier("Peak Condition", "PEAK_CONDITION", "peak-condition-icon", 'Talent', 0, 0.25));
        this.multArray.push(new multiplier("Field Master", "FIELD_MASTER", "field-master-icon", 'Talent', 0.2, 0.2));
        this.multArray.push(new multiplier("Skilled Backstab", "SKILLED_BACKSTAB", "skilled-backstab-icon", 'Talent', 0.5, 0.5));
        this.multArray.push(new multiplier("Summon Synergy", "SUMMON_SYNERGY", "summon-synergy-icon", 'Talent', 0, 0));
        this.multArray.push(new multiplier("Energized Melee", "ENERGIZED_MELEE", "energized-melee-icon", 'Talent', 0, 0));

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
clearbutton?.addEventListener("click", _multipliers.clearall)

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("change", _multipliers.check)
    cb.addEventListener("change", updateValues);
    cb.addEventListener("change", updateElements);
});

chargeCount?.addEventListener("change", _multipliers.check)
chargeCount?.addEventListener("change", updateValues);
chargeCount?.addEventListener("change", updateElements);

document.addEventListener("PlaceholderPluginConfigJson", _multipliers.check)
document.addEventListener("PlaceholderPluginConfigJson", updateValues)
document.addEventListener("PlaceholderPluginConfigJson", updateElements)

function updateElements() {

    var enabledArtifacts = _multipliers.multArray.filter((x) => x.enabled && x.buffsrc == 'Artifact')

    _multipliers.multArray.forEach((mult) => {

        // Update Icons
        var style = document.getElementById(mult.iconid)?.style
        if (style != null) {
            style.height = mult.enabled ? "auto" : "0";
            style.width = mult.enabled ? "auto" : "0";
            style.visibility = mult.enabled ? "visible" : "hidden";
        }

        // Update Artifacts checkboxes
        if (mult.element != null) {
            if (enabledArtifacts.length == 4) {
                if (mult.buffsrc == 'Artifact' && mult.element.checked == false) {
                    mult.element.disabled = true;
                }
            } else {
                mult.element.disabled = false;
            }

            if (mult.name == "Focused" || mult.name == "Peak Condition") {
                var tfilt = _multipliers.multArray.filter((x) => (x.name == "Medical Alert Bands" || x.name == "Mother's Locket") && x.enabled == true)
                if (tfilt.length > 0) {
                    mult.element.disabled = true;
                }
            } else if (mult.name == "Medical Alert Bands" || mult.name == "Mother's Locket") {
                var tfilt = _multipliers.multArray.filter((x) => (x.name == "Focused" || x.name == "Peak Condition") && x.enabled == true)
                if (tfilt.length > 0) {
                    mult.element.disabled = true;
                }
            }
        }
    })

    if (artifactslabel) { artifactslabel.innerHTML = "Artifacts (" + enabledArtifacts.length + "/4) <i style='font-size: 12px'>(3 in base NG)</i>" }
}

function updateValues() {
    var k = 0;
    [].forEach.call(catables, function (table) {
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j > 0) {
                    if (j == 1) {
                        if (col != null & col.innerHTML != "DF%") {
                            var mappedDamage = _multipliers.multArray.map((x) => x.enabled ? x.damage : 0)
                            var mappedFalter = _multipliers.multArray.map((x) => x.enabled ? x.falter : 0)

                            var finalDamage = mappedDamage?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var finalFalter = mappedFalter?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                            var basecol = parseFloat(col.getAttribute('data-base-value')) / 100;

                            if (finalDamage == finalFalter) {
                                col.innerHTML = Math.round((parseFloat(basecol) + finalDamage) * 100) + "%"
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
                            finalOut = finalMap?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var basecol = col.getAttribute('data-base-value');
                            col.innerHTML = Math.max(0, Math.round(parseFloat(basecol) + (parseFloat(basecol) * finalOut)))
                        }
                    }
                }
            }
        }
        k++;
    });

    [].forEach.call(wtables, function (table) {
        var colCount = table.rows.length;
        var rowCount = table.rows[0].cells.length;
        for (var i = 0; i < rowCount; i++) {
            for (var j = 0; j < colCount; j++) {
                col = table.rows[j].cells[i]
                if (j > 0) {
                    if (j == 1) {
                        if (col != null & col.innerHTML != "DF%") {
                            var mappedDamage = _multipliers.multArray.map((x) => x.enabled ? x.damage : 0)
                            var mappedFalter = _multipliers.multArray.map((x) => x.enabled ? x.falter : 0)

                            var finalDamage = mappedDamage.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var finalFalter = mappedFalter.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                            var basecol = parseFloat(col.getAttribute('data-base-value')) / 100;
                            console.log(basecol)
                            if (finalDamage == finalFalter) {
                                col.innerHTML = Math.round((parseFloat(basecol) + finalDamage) * 100) + "%"
                            } else {
                                var str = Math.max(0, Math.round(parseFloat((basecol) + finalDamage) * 100)) + "%" + "/" + Math.max(0, Math.round(parseFloat((basecol) + finalFalter) * 100)) + "%"
                                col.innerHTML = str;
                            }
                        }

                    } else {
                        var col = document.getElementById('0' + 'xr' + i + 'x' + j);
                        if (col != null) {
                            var finalMap;
                            var finalOut;

                            var header = table.rows[j].cells[0].innerHTML;
                            if (header.includes('Damage')) {
                                finalMap = _multipliers.multArray.map((x) => x.enabled ? x.damage : 0)
                            }
                            else if (header.includes('Falter')) {
                                finalMap = _multipliers.multArray.map((x) => x.enabled ? x.falter : 0)
                            }
                            finalOut = finalMap?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            var basecol = col.getAttribute('data-base-value');
                            col.innerHTML = Math.max(0, Math.round(parseFloat(basecol) + (parseFloat(basecol) * finalOut)))
                        }
                    }
                }
            }
        }
    })
}

updateElements()
updateValues()