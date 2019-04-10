import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
// import typescript from "rollup-plugin-typescript";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "./App.tsx",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "mfeTestTypeScript",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      postcss(),
      typescript(),
      babel({
        runtimeHelpers: true,
        exclude: ["node_modules/**"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      commonjs([".js", ".ts", ".tsx"])
    ]
  }
];
