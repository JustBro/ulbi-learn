export enum MODE {
    DEV = "development",
    PROD = "production",
}

const mode = MODE.DEV;

export const IS_DEV = mode === MODE.DEV;