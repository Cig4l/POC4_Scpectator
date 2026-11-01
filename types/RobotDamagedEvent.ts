export type RobotDamagedEvent = {
    seq: number;
    type: "ROBOT_DAMAGED";
    robot: string;
    hp: number;
    alive: boolean;
}

export function isRobotDamagedEvent(event: unknown): event is RobotDamagedEvent {
    if (typeof event !== "object" || event === null) {
        return false;
    }

    if (!("seq" in event) || typeof event.seq !== "number") {
        return false;
    }

    if (!("type" in event) || event.type !== "ROBOT_DAMAGED") {
        return false;
    }

    if (!("robot" in event) || typeof event.robot !== "string") {
        return false;
    }

    if (!("hp" in event) || typeof event.hp !== "number") {
        return false;
    }

    if (!("alive" in event) || typeof event.alive !== "boolean") {
        return false;
    }

    return true;
}