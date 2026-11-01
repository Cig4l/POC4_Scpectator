export type MatchStartedEvent = {
    seq: number;
    type: "MATCH_STARTED";
    robots: string[];
}

export function isMatchStartedEvent(event: unknown): event is MatchStartedEvent {
    if (typeof event !== "object" || event === null) {
        return false;
    }

    if (!("seq" in event) || typeof event.seq !== "number") {
        return false;
    }

    if (!("type" in event) || event.type !== "MATCH_STARTED") {
        return false;
    }

    if (!("robots" in event) || !Array.isArray(event.robots)) {
        return false;
    }

    for (const robot of event.robots) {
        if (typeof robot !== "string") {
            return false;
        }
    }

    return true;
}