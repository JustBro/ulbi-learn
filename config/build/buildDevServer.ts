import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServer = (port: number): DevServerConfiguration => {
    return {
        port,
        open: true,
    };
};

export { buildDevServer };