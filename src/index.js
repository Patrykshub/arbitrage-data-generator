const fs = require("fs");
const path = require("path");

(function init() {
  const { routers } = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../input_data/routers.json"),
      "utf-8"
    )
  );
  const { tokens } = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../input_data/tokens.json"),
      "utf-8"
    )
  );

  getDualDexPaths(routers, tokens);
  getTriDexPaths(routers, tokens);
})();

function getDualDexPaths(routers, tokens) {
  let dualPaths = [];

  for (let i = 0; i < routers.length; i++) {
    for (let j = 0; j < routers.length; j++) {
      if (i === j) continue; // skip identical routers

      for (let k = 0; k < tokens.length; k++) {
        for (let l = 0; l < tokens.length; l++) {
          if (k === l) continue; // skip identical tokens

          dualPaths.push([
            routers[i].address,
            routers[j].address,
            tokens[k].address,
            tokens[l].address,
          ]);
        }
      }
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../output_data/dual_dex_paths.json"),
    JSON.stringify(dualPaths),
    "utf-8"
  );
}

function getTriDexPaths(routers, tokens) {
  let triPaths = [];

  for (let i = 0; i < routers.length; i++) {
    for (let j = 0; j < routers.length; j++) {
      if (i === j) continue; // skip identical routers

      for (let k = 0; k < routers.length; k++) {
        if (k === i || k === j) continue; // skip identical routers

        for (let l = 0; l < tokens.length; l++) {
          for (let m = 0; m < tokens.length; m++) {
            if (l === m) continue; // skip identical tokens

            for (let n = 0; n < tokens.length; n++) {
              if (n === l || n === m) continue; // skip identical tokens

              triPaths.push([
                routers[i].address,
                routers[j].address,
                routers[k].address,
                tokens[l].address,
                tokens[m].address,
                tokens[n].address,
              ]);
            }
          }
        }
      }
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../output_data/tri_dex_paths.json"),
    JSON.stringify(triPaths),
    "utf-8"
  );
}
