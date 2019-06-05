class Planning {
    constructor(planningId) {
        this.planningId = planningId;
        this.dayTable = ["#", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        this.hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.thTitle = [];
    }

    createPlanning(){
        $('table').append('<thead>');
        $('thead').append('<tr>');
        this.createHeadTable();
        $('table').append('<tbody>');
        this.createBodyTable();
    };

    createHeadTable(){
        for (let day = 0; day < this.dayTable.length; day++) {
            const cellDay = $('<th scop="col">').addClass(this.dayTable[day]).text(this.dayTable[day]);
            $('tr').append(cellDay);
        };
    };

    createBodyTable(){
        for (let y = 0; y < this.hours.length; y++ ){
            const cellTr = $('<tr>');
            $('tbody').append(cellTr);
        }

        // pb pour lh'eure ecrit dans les cases ...
        const cellTitleHour = $('<th scope="row">'); //.text(this.hours[0])
        $('tbody > tr').prepend(cellTitleHour);
        this.thTitle.push($('tbody > tr > th'));

        this.thTitle.forEach( th => {
            let indexTh = this.thTitle.indexOf(th);
            console.log(indexTh);
            console.log(th);

        }); 


        for (let i = 0; i < this.dayTable.length-1; i++){
            const cellHour = $('<td>');
            $('tbody > tr').append(cellHour);
        }
    }

}