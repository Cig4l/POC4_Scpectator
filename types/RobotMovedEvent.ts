export type RobotMovedEvent = {
    seq: number;
    type: "ROBOT_MOVED";
    robot: string;
    x: number;
    y: number;
}

export function isRobotMovedEvent(event: unknown): event is RobotMovedEvent {
    if (typeof event !== "object" || event === null) {
        return false;
    }

    if (!("seq" in event) || typeof event.seq !== "number") {
        return false;
    }

    if (!("type" in event) || event.type !== "ROBOT_MOVED") {
        return false;
    }

    if (!("robot" in event) || typeof event.robot !== "string") {
        return false;
    }

    if (!("x" in event) || typeof event.x !== "number") {
        return false;
    }

    if (!("y" in event) || typeof event.y !== "number") {
        return false;
    }

    return true;
}
