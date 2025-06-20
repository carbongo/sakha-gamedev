// scripts/generate-games-data.cjs
const fs = require("fs");
const { parse } = require("yaml");

// Traverse the games directory recursively
function findMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  const markdownFiles = [];

  for (const file of files) {
    const filePath = `${dir}/${file}`;
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      markdownFiles.push(...findMarkdownFiles(filePath));
    } else if (file.endsWith(".md")) {
      markdownFiles.push(filePath);
    }
  }

  return markdownFiles;
}

// Find all info.md files in the games directory
const gamesDir = "./public/games";
const markdownFiles = findMarkdownFiles(gamesDir);
const outputJson = "./src/data/games.json";

const games = [];

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf-8");
  const frontmatter = content.split("---")[1];

  const game = parse(frontmatter);
  game.slug = file
    .replace("./public/games/", "")
    .replace("/info.md", "")
    .replaceAll(" ", "%20");
  games.push(game);
}

// Ensure the output directory exists
const outputDir = "./src/data";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputJson, JSON.stringify(games, null, 2));
