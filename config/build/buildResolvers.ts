import webpack from "webpack";

const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [".ts", ".tsx", ".js"],
  };
};

export { buildResolvers };
