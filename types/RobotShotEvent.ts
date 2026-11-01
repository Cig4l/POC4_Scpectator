export type RobotShotEvent = {
    seq: number;
    type: "ROBOT_SHOT";
    robot: string;
    hit: string;
}

export function isRobotShotEvent(event: unknown): event is RobotShotEvent {
    if (typeof event !== "object" || event === null) {
        return false;
    }

    if (!("seq" in event) || typeof event.seq !== "number") {
        return false;
    }

    if (!("type" in event) || event.type !== "ROBOT_SHOT") {
        return false;
    }

    if (!("robot" in event) || typeof event.robot !== "string") {
        return false;
    }

    if (!("hit" in event) || typeof event.hit !== "string") {
        return false;
    }

    return true;
}