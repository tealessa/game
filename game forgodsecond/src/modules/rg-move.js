const movementModule = () => {
    const hero = document.getElementById("rg-hero")
    const escapeScreen = document.querySelector('.escape-screen')
    let xPosition = 0
    let yPosition = 0
    let escapeCount = 0
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') {
            // console.log('Вода верх');
            yPosition = +yPosition - 10
            hero.style.top= yPosition+'px'
        } else if (event.code == 'ArrowRight') {
            // console.log('Вода идёт вправо'); 
            xPosition = +xPosition + 10
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(-1,1)'
        } else if (event.code == 'ArrowDown') {
            // console.log('Вода идёт вниз');
            yPosition = +yPosition + 10
            hero.style.top= yPosition+'px'
        } else if (event.code == 'ArrowLeft') {
            // console.log('Вода идёт влево');
            xPosition = +xPosition - 10
            hero.style.left= xPosition+'px'
            hero.style.transform='scale(1,1)'
        } else if (event.code == 'Escape') {
            if (escapeCount == 0) {
                escapeScreen.style.display="block" 
                escapeCount = 1
            } else {
                escapeScreen.style.display="none"
                escapeCount = 0
            }
        }
      });
}
export default movementModule