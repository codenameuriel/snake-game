import init, { greet } from "snake_game";

async function start() {
    const wasm = await init();
    greet("Uriel");
    console.log("executed without any errors");
}

start();