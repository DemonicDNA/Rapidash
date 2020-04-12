export class AlertModel {
    message : string;
    severity : string;
    time : Date;

    constructor(message : string, severity : string, time : Date){
        this.message = message;
        this.severity = severity;
        this.time = time;
    }
}