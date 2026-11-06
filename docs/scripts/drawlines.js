/**
*(function () {
*    const canvas = document.getElementById("drawlines");
*    const treewindow = document.getElementById("treewindow");
*    const ctx = canvas.getContext('2d');
*
*    // resize the canvas to fill browser window dynamically
*    window.addEventListener('draw', resizeCanvas, false);
*
*    function resizeCanvas() {
*        canvas.width = treewindow.clientWidth;
*        canvas.height = treewindow.clientHeight;
*
*        /**
*         * Your drawings need to be inside this function otherwise they will be reset when 
*         * you resize the browser window and the canvas goes will be cleared.
*         *
*        drawStuff();
*    }
*
*    resizeCanvas();
*
*    function drawStuff() {
*        for (cvidstr of jsUplist.split(",")) {
*            var cvid = cvidstr.split("|")[0];
*            var requiredstr = (cvidstr?.split("|")[1]);
*            var required = requiredstr?.split(";");
*            var cvidobj = document.getElementById(cvid);
*            for (conn of required) {
*                if (conn != 0) {
*                    var connobj = document.getElementById(conn);
*                    ctx.beginPath();
*                    ctx.lineWidth = "2";
*                    ctx.strokeStyle = "white";
*                    ctx.setLineDash([5,5]);
*                    var connrect = connobj.getBoundingClientRect();
*                    var cvidrect = cvidobj.getBoundingClientRect();
*
*                    ctx.moveTo(cvidrect.left, cvidrect.top);
*                    ctx.lineTo(connrect.left, connrect.top);
*                    ctx.stroke();
*                }
*            }
*        }
*    }
*}) ();
**/