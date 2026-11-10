phTracked.addEventListener("click", updateIcons);
phEmpowered.addEventListener("click", updateIcons);

function updateIcons()
{
    var tracked_style = document.getElementById("tracked-icon").style
    var empowered_style = document.getElementById("empowered-icon").style

    tracked_style.height = phTracked.checked ? "auto" : "0px";
    tracked_style.width = phTracked.checked ? "auto" : "0px";
    tracked_style.visibility = phTracked.checked ? "visible" : "hidden";

    empowered_style.height = phEmpowered.checked ? "auto" : "0px";
    empowered_style.width = phEmpowered.checked ? "auto" : "0px";
    empowered_style.visibility = phEmpowered.checked ? "visible" : "hidden";
}

