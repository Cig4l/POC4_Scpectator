import { isMatchStartedEvent, MatchStartedEvent } from "../types/MatchStartedEvent";
import { isRobotDamagedEvent, RobotDamagedEvent } from "../types/RobotDamagedEvent";
import { isRobotMovedEvent, RobotMovedEvent } from "../types/RobotMovedEvent";
import { isRobotShotEvent } from "../types/RobotShotEvent";
import { Robot } from "./Robot";

export class Spectator {
    private robots: Map<string, Robot> = new Map();

    private file : Record<string, any> = {};

    private processStartEvent(event: MatchStartedEvent): void {
        this.robots.clear();
        const robotsNames : string[] = event.robots;

        if (robotsNames.length === 0) {
            throw new Error("No robots in sequence 0 robots list");
        }

        for (let i : number = 0; i < robotsNames.length; i++) {
            const name : string = robotsNames[i];
            this.robots.set(name, new Robot(name));
        }
    }

    private processMovedEvent(event: RobotMovedEvent): void {
        const robot : Robot = this.getRobot(event.robot);

        robot.setX(event.x);
        robot.setY(event.y);
    }

    private processDamagedEvent(event: RobotDamagedEvent): void {
        const robot : Robot = this.getRobot(event.robot);

        robot.setHp(event.hp);
    }

    private getRobot(name: string): Robot {
        const robot = this.robots.get(name);

        if (!robot) {
            throw new Error(`Robot ${name} does not exist`);
        }

        return robot;
    }

    private processEvent(event: unknown): void {
        if (
            typeof event !== "object" || event === null || !("type" in event) || typeof event.type !== "string") {
            throw new Error("Event does not contain a valid type");
        }

        switch (event.type) {
            case "MATCH_STARTED":
                if (!isMatchStartedEvent(event)) {
                    throw new Error("Match Started Event with invalid format");
                }

                if (event.seq !== 0) {
                    throw new Error("Start Match Event at sequence " + event.seq);
                }

                this.processStartEvent(event);
                break;

            case "ROBOT_MOVED":
                if (!isRobotMovedEvent(event)) {
                    throw new Error("Robot Moved Event with invalid format");
                }

                this.processMovedEvent(event);
                break;

            case "ROBOT_SHOT":
                if (!isRobotShotEvent(event)) {
                    throw new Error("Robot Shot Event with invalid format");
                }

                break;

            case "ROBOT_DAMAGED":
                if (!isRobotDamagedEvent(event)) {
                    throw new Error("Robot Damaged Event with invalid format");
                }

                this.processDamagedEvent(event);
                break;

            default:
                throw new Error(`Unknown event type: ${event.type}`);
        }
    }

    private processRes(): Record<string, any> {
        const res: Record<string, any> = {};

        for (const [name, robot] of this.robots) {
            res[name] = {
                x: robot.getX(),
                y: robot.getY(),
                hp: robot.getHp(),
                alive: robot.isAlive()
            };
        }

        return res;
    }

    public run(file : Record<string, any>): Record<string, any> {
        this.file = file;

        if (this.file.length === 0) {
            throw new Error("The file contains no events");
        }

        if (!isMatchStartedEvent(this.file[0])) {
            throw new Error("First sequence is not a MatchStartedEvent");
        }

        for (let i = 0; i < this.file.length; i++) {
            this.processEvent(this.file[i]);
        }

        return this.processRes();
    }
}
