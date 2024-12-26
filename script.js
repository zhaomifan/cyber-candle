window.onload = function() {
    const container = document.getElementById('candle-container');
    const candleWidth = 100;
    const candleHeight = 200;
    const numCandles = 10;
    const minX = 0;
    const maxX = window.innerWidth - candleWidth;
    const minY = 0;
    const maxY = window.innerHeight - candleHeight;
    const placedCandles = [];

    function getRandomPosition() {
        let x, y;
        let validPosition = false;
        while (!validPosition) {
            x = Math.random() * (maxX - minX) + minX;
            y = Math.random() * (maxY - minY) + minY;
            validPosition = true;
            for (let i = 0; i < placedCandles.length; i++) {
                const candle = placedCandles[i];
                const dx = x - candle.x;
                const dy = y - candle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < candleWidth) {
                    validPosition = false;
                    break;
                }
            }
        }
        return { x, y };
    }

    function createCandle() {
        const candle = document.createElement('div');
        candle.className = 'candle';
        const flame = document.createElement('div');
        flame.className = 'flame';
        const wax = document.createElement('div');
        wax.className = 'wax';
        candle.appendChild(flame);
        candle.appendChild(wax);
        return candle;
    }

    for (let i = 0; i < numCandles; i++) {
        const position = getRandomPosition();
        placedCandles.push(position);
        const candle = createCandle();
        candle.style.left = position.x + 'px';
        candle.style.top = position.y + 'px';
        container.appendChild(candle);
    }
};