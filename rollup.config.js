import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import liveServer from 'rollup-plugin-live-server';
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
      commonjs([".js", ".ts", ".tsx"]),
      liveServer({
        port: 8001,
        host: "0.0.0.0",
        root: "",
        file: "index.html",
        mount: [['/dist', './dist'], ['/src', './src'], ['/node_modules', './node_modules']],
        open: true,
        wait: 500
      })
    ]
  }
];
