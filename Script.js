
document.addEventListener('DOMContentLoaded', () => {
    let carrucelPrincipal = new carrucel(
        document.querySelector(".carrucel")
    )
    carrucelPrincipal.init();
})


class carrucel {
    contenedor = null;
    track = null;
    items = [];

    direction = 1;

    timeInSeconds = 3;
    timerId = null;
    currentItem = 0;


    constructor(contenedor){
        this.contenedor = contenedor;
        this.track = this.contenedor.querySelector(".carrucel-track");
        
        this.items = [...this.track.querySelectorAll(".carrucel-item")];
    }

    init(){
        this.tick();
    }


    moveTodirection(nextDirection) {
        clearTimeout(this.timerId);
        this.direction = nextDirection;
        this.moveTonext();
        this.tick();
    }

    tick(){
        this.timerId = setTimeout(
            ()=>{
                this.moveTonext();
                this.tick();
            },
            this.timeInSeconds * 1000
        );
    }

    moveTo(index){
        this.track.style.transform = `translateX(-${index * 100}vw)`;
    }

    moveTonext(){
        let nextIndex = this.currentItem + 1;

        if (nextIndex >= this.items.length) {
            nextIndex = 0;
        }

        this.currentItem = nextIndex;
        this.moveTo(nextIndex);
    }
}