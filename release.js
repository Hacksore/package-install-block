#!/usr/bin/env node
import path from "path";
import fs from "fs";
import { exec } from "child_process";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Loop over each directory inside of the dist directory and generate a tar ball for each of them
const distDir = path.resolve(__dirname, "./dist");
const distBlocks = fs.readdirSync(distDir);

distBlocks.forEach((distBlock) => {
  const tarBall = `${distBlock}.tar.gz`;
  const tarBallPath = path.resolve(__dirname, "./dist", tarBall);
  const tarBallCmd = `tar -czf ${tarBallPath} -C ${distDir} ${distBlock}`;
  exec(tarBallCmd);
});
