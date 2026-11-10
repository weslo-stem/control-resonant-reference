// data-placeholder="EMPOWERED"
// data-input-for="TRACKED"

const phTracked = document.querySelector('[data-input-for="TRACKED"]');
const phEmpowered = document.querySelector('[data-input-for="EMPOWERED"]');

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", updateValues);
});

function updateValues() {
    var table = document.getElementById("CombatAbilityDamageTable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (j > 0) {
                if (j == 1) {

                } else {
                    var col = document.getElementById('xr' + i + 'x' + j);
                    if (col != null) {
                        var basecol = col.getAttribute('data-base-value');
                        var trackedMult = phTracked.checked ? parseFloat(basecol) * 0.3 : 0;
                        var empoweredMult = phEmpowered.checked ? parseFloat(basecol) * 0.25 : 0;
                        console.log(basecol + " + " + trackedMult + " + " + empoweredMult)
                        col.innerHTML = Math.round(parseFloat(basecol) + parseFloat(trackedMult) + parseFloat(empoweredMult))
                    }
                }
            }
        }
    }
}

updateValues()