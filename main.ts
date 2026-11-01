import { Spectator } from "./classes/Spectator";
import file from "./poc4-logs.json" with { type: "json" };

let spectator : Spectator = new Spectator();

console.log(spectator.run(file));







