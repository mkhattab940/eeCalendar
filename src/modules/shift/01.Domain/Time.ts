class Time{
    hours: number;
    minutes: number;

    constructor(hours: number, minutes: number){
        this.hours = hours;
        this.minutes = minutes;
    }

    toString(): string {
        const hrs = ((this.hours)%12).toString().padStart(2, '0');
        const mins = this.minutes.toString().padStart(2, '0');
        const ampm = this.hours >= 12 ? 'PM' : 'AM';
        return `${hrs}:${mins} ${ampm}`;
    }
}

export { type Time };