async function init() {
    const memory = new WebAssembly.Memory({ initial: 1 });
    const importObj = {
        js: {
            mem: memory
        },
        console: {
            log: () => {
                console.log("log from wasm file");
            },
            error: () => {
                console.error('error from wasm file');
            }
        }
    };
    const response = await fetch("addTwo.wasm");
    const buffer = await response.arrayBuffer();
    const wasm = await WebAssembly.instantiate(buffer, importObj);
    const uint8Array = new Uint8Array(memory.buffer, 0, 2);
    const text = new TextDecoder().decode(uint8Array);
}

init();