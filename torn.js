function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function wes() {
    let id = setInterval(_ => {
        console.log('Click!');
        $('#factionQuickItems > main > div.inner-content > div:nth-child(1)').click();
        clearInterval(id);
        wes();
    }, getRandomNumber(30, 35) * 60 * getRandomNumber(1000, 1200));
}


let casino = function () {

    let highlow = function () {
        let interval_id_highlow;
        function start() {
            console.log("Starting High Low Script");
            interval_id_highlow = setInterval(_ => {
                $('div.action-btn-wrap.high.active :visible').click();
                $('div.action-btn-wrap.active.continue :visible').click();
                $('div.action-btn-wrap.low.active :visible').click();
                $('div.action-r.action-btn-wrap.active.startGame :visible').click();
            }, 250);
        }

        function stop() {
            console.log("Stopping High Low Script");
            clearInterval(interval_id_highlow);
        }

        return {
            start,
            stop
        }
    }

    return {
        highlow
    }
}

window.casino = casino()