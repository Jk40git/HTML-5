class Team {
    protected id: number;
    public name: string;
    private address: string;
    private contact : number;
    public homeGround: string;
    public founded_at: string;

}

class Player{
    protected id: string;
    public name: string;
    private nationality: string;
    private dob: Date;
    public preferredFoot: string;

}

class Squad{
    protected id: number;
    public team: string;
    public player:string;
    public jerseyNumber: number;
    public position: string;

}

class Game{
    protected id: number;
    public homeTeam: string;
    public awayTeam: string;
    public start_date: Date;
    public end_date: Date;
    public location: string;
    public league: string;
}













class Student {

    // public Can use in this and all child class
    // protected Can use in this class and only in child class
    // private Can only work in the class

    protected id: string;

    public firstName: string;
    public lastName: string;

    private _accountNumber : string;

    public get accountNumber() : string {
        return this._accountNumber;
    }

    public set accountNumber(v : string) {
        this._accountNumber = v;
    }
    
}




const student = new Student();