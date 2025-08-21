export type BuildMode = "development" | "production";

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  tsConfigPath: string;
}

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
};