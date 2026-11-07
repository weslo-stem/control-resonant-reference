
/**(function () {

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('scroll', resizeCanvas, false);

    function resizeCanvas() {

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         
        drawStuff();
    }

    resizeCanvas();

    function drawStuff() {
        for (cvidstr of jsUplist.split(",")) {
            var cvid = cvidstr.split("|")[0];
            var requiredstr = (cvidstr?.split("|")[1]);
            var required = requiredstr?.split(";");
            for (conn of required) {
                if (conn != 0) {
                    var c1 = new Connector({ ele1: cvid, ele2: conn, lineStyle: '1px dashed white' })
                    Setup(c1, cvid);
                    Setup(c1, conn);

                    new muConnector({
                        ele1: "conn",
                        ele2: "cvid",
                        lineStyle: "5px solid pink",
                        defaultGap: -35
                    })
                }
            }
        }
    }
}) ();
**/
