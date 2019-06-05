class App {
    constructor(){
        this.planning = new Planning('#planning');
    }

    generatePlanning(){
        this.planning.createPlanning();
    }
}