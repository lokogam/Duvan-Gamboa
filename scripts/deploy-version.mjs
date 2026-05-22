import { execSync, spawnSync } from "node:child_process";

function run(cmd, { stdio = "pipe" } = {}) {
  return execSync(cmd, {
    stdio,
    encoding: "utf8",
  }).trim();
}

function runInteractive(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function getNextVersion() {
  const refs = run("git branch -a --list 'deploy/v*' 'remotes/origin/deploy/v*'");
  const matches = refs
    .split("\n")
    .map((line) => line.replace("*", "").trim())
    .map((line) => line.match(/deploy\/v(\d+)$/))
    .filter(Boolean)
    .map((match) => Number(match[1]));

  if (matches.length === 0) {
    return 1;
  }

  return Math.max(...matches) + 1;
}

function branchExists(branchName) {
  try {
    run(`git show-ref --verify --quiet refs/heads/${branchName}`);
    return true;
  } catch {
    return false;
  }
}

function main() {
  const baseRef = process.env.DEPLOY_BASE_REF || "master";

  run("git fetch --all --prune", { stdio: "inherit" });
  run(`git rev-parse --verify ${baseRef}`);

  const version = getNextVersion();
  const deployBranch = `deploy/v${version}`;
  const ghPagesVersionBranch = `deploy-gh/gh-pages-v${version}`;
  const baseCommit = run(`git rev-parse ${baseRef}`);

  run(`git branch ${deployBranch} ${baseCommit}`);
  run(`git push -u origin ${deployBranch}`, { stdio: "inherit" });

  runInteractive("npm", ["run", "build"]);
  runInteractive("npx", ["gh-pages", "-d", "dist", "-m", `deploy v${version}`]);

  run("git fetch origin gh-pages", { stdio: "inherit" });
  const ghPagesCommit = run("git rev-parse origin/gh-pages");

  if (branchExists(ghPagesVersionBranch)) {
    run(`git branch -f ${ghPagesVersionBranch} ${ghPagesCommit}`);
  } else {
    run(`git branch ${ghPagesVersionBranch} ${ghPagesCommit}`);
  }

  run(`git push -u origin ${ghPagesVersionBranch}`, { stdio: "inherit" });

  console.log("\nDeploy versionado completado:");
  console.log(`- Base: ${baseRef} (${baseCommit})`);
  console.log(`- Rama codigo: ${deployBranch}`);
  console.log(`- Rama publicacion (gh-pages): ${ghPagesVersionBranch} (${ghPagesCommit})`);
}

main();
