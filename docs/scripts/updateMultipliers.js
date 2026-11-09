// data-placeholder="EMPOWERED"
// data-input-for="TRACKED"

const phTracked = document.querySelectorAll('[data-input-for="TRACKED"]');
const phEmpowered = document.querySelectorAll('[data-input-for="EMPOWERED"]');

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", updateValues);
});

function updateValues() {
    
    var table = document.getElementById("CombatAbilityDamageTable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (j > 0 && i > 0) {
                if (j == 1) {

                } else {
                    colval = parseFloat(col.innerHTML)
                    console.log(phTracked.checked + " " + phEmpowered.checked)
                    col.innerHTML = Math.round(colval + (colval * phTracked.innerHTML) + (colval * phEmpowered.innerHTML))
                }
            }
        }
    }
}