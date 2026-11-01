export class Robot {
    private name: string;
    private x: number;
    private y: number;
    private hp: number;

    public constructor(name : string) {
        this.name = name;
        this.x = 0.0;
        this.y = 0.0;
        this.hp = 100;
    }

    public isAlive() : boolean {
        if(this.hp > 0) {
            return true;
        }
        return false;
    }

    public getName() : string {
        return this.name;
    }

    public getX() : number {
        return this.x;
    }

    public setX(x : number) : void {
        this.x = x;
    }

    public getY() : number {
        return this.y;
    }

    public setY(y : number) : void {
        this.y = y;
    }

    public getHp() : number {
        return this.hp;
    }

    public setHp(hp : number) : void {
        this.hp = hp;
    }
}