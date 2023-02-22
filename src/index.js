const fs = require("fs");
const path = require("path");

(function init() {
  const { routers } = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/routers.json"), "utf-8")
  );
  const { tokens } = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/tokens.json"), "utf-8")
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
    path.resolve(__dirname, "../data/dual_dex_paths.json"),
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
    path.resolve(__dirname, "../data/tri_dex_paths.json"),
    JSON.stringify(triPaths),
    "utf-8"
  );
}

/*
{
            "sym": "ABR",
            "address": "0x2BAe00C8BC1868a5F7a216E881Bae9e662630111"
        },
        {
            "sym": "atLUNA",
            "address": "0xC4bdd27c33ec7daa6fcfd8532ddB524Bf4038096"
        },
        {
            "sym": "atUST",
            "address": "0x5ce9F0B6AFb36135b5ddBF11705cEB65E634A9dC"
        },
        {
            "sym": "abBUSD",
            "address": "0x5C92A4A7f59A9484AFD79DbE251AD2380E589783"
        },
        {
            "sym": "PAD",
            "address": "0x0fAD0ED848A7A16526E8a7574e418B015Dbf41B5"
        },
        {
            "sym": "SOL",
            "address": "0x0f00576d07B594Bdc1caf44b6014A6A02E5AFd48"
        },
        {
            "sym": "agEUR",
            "address": "0xdc7acde9ff18b4d189010a21a44ce51ec874ea7c"
        },
        {
            "sym": "ANGLE",
            "address": "0xb7e3617adb58dc34068522bd20cfe1660780b750"
        },
        {
            "sym": "AURORA",
            "address": "0x8bec47865ade3b172a928df8f990bc7f2a3b9f79"
        },
        {
            "sym": "BAKED",
            "address": "0x8973c9ec7b79fe880697cdbca744892682764c37"
        },
        {
            "sym": "BAL",
            "address": "0xb59d0fdaf498182ff19c4e80c00ecfc4470926e2"
        },
        {
            "sym": "BAT",
            "address": "0x2b9025aecc5ce7a8e6880d3e9c6e458927ecba04"
        },
        {
            "sym": "bHOME",
            "address": "0xe4baf0af161bf03434d1c5a53957981493c12c99"
        },
        {
            "sym": "COMP",
            "address": "0xdeacf0faa2b80af41470003b5f6cd113d47b4dcd"
        },
        {
            "sym": "CREAM",
            "address": "0xabe9818c5fb5e751c4310be6f0f18c8d85f9bd7f"
        },
        {
            "sym": "CRF",
            "address": "0x026dda7f0f0a2e42163c9c80d2a5b6958e35fc49"
        },
        {
            "sym": "DAI",
            "address": "0xe3520349f477a5f6eb06107066048508498a291b"
        },
        {
            "sym": "DODO",
            "address": "0xe301ed8c7630c9678c39e4e45193d1e7dfb914f7"
        },
        {
            "sym": "FLX",
            "address": "0xea62791aa682d455614eaa2a12ba3d9a2fd197af"
        },
        {
            "sym": "FRAX",
            "address": "0xda2585430fef327ad8ee44af8f1f989a2a91a3d2"
        },
        {
            "sym": "FXS",
            "address": "0xc8fdd32e0bf33f0396a18209188bb8c6fb8747d2"
        },
        {
            "sym": "JUMBO",
            "address": "0x6454e4a4891c6b78a5a85304d34558dda5f3d6d8"
        },
        {
            "sym": "KSW",
            "address": "0xE4eB03598f4DCAB740331fa432f4b85FF58AA97E"
        },
        {
            "sym": "LINK",
            "address": "0x94190d8ef039c670c6d6b9990142e0ce2a1e3178"
        },
        {
            "sym": "LUNA",
            "address": "0xfca152a9916895bf564e3f26a611f9e1e6aa6e73"
        },
        {
            "sym": "MKR",
            "address": "0x1d1f82d8b8fc72f29a8c268285347563cb6cd8b3"
        },
        {
            "sym": "MNFT",
            "address": "0xd126b48c072f4668e944a8895bc74044d5f2e85b"
        },
        {
            "sym": "MODA",
            "address": "0x74974575d2f1668c63036d51ff48dbaa68e52408"
        },
        {
            "sym": "NDOL",
            "address": "0xC86Ca2BB9C9c9c9F140d832dE00BfA9e153FA1e3"
        },
        {
            "sym": "wNEAR",
            "address": "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d"
        },
        {
            "sym": "NECC",
            "address": "0x6EBA841F1201fFDDe7DDC2ba995D3308f6C4aEa0"
        },
        {
            "sym": "NFD",
            "address": "0x90eb16621274fb47a071001fbbf7550948874cb5"
        },
        {
            "sym": "nNECC",
            "address": "0x449f661c53aE0611a24c2883a910A563A7e42489"
        },
        {
            "sym": "OCT",
            "address": "0x951cfdc9544b726872a8faf56792ef6704731aae"
        },
        {
            "sym": "OIN",
            "address": "0x07b2055fbd17b601c780aeb3abf4c2b3a30c7aae"
        },
        {
            "sym": "PAD",
            "address": "0x885f8CF6E45bdd3fdcDc644efdcd0AC93880c781"
        },
        {
            "sym": "PICKLE",
            "address": "0x291c8fceaca3342b29cc36171deb98106f712c66"
        },
        {
            "sym": "PULSE",
            "address": "0x8828a5047d093f6354e3fe29ffcb2761300dc994"
        },
        {
            "sym": "REN",
            "address": "0x18921f1e257038e538ba24d49fa6495c8b1617bc"
        },
        {
            "sym": "SNX",
            "address": "0xdc9be1ff012d3c6da818d136a3b2e5fdd4442f74"
        },
        {
            "sym": "SUSHI",
            "address": "0x7821c773a12485b12a2b5b7bc451c3eb200986b1"
        },
        {
            "sym": "TRI",
            "address": "0xFa94348467f64D5A457F75F8bc40495D33c65aBB"
        },
        {
            "sym": "UMINT",
            "address": "0x984c2505a14da732d7271416356f535953610340"
        },
        {
            "sym": "UNI",
            "address": "0x1bc741235ec0ee86ad488fa49b69bb6c823ee7b7"
        },
        {
            "sym": "USDC",
            "address": "0xb12bfca5a55806aaf64e99521918a4bf0fc40802"
        },
        {
            "sym": "USDT",
            "address": "0x4988a896b1227218e4a686fde5eabdcabd91571f"
        },
        {
            "sym": "UST",
            "address": "0x098d5b6a26bca1d71f2335805d71b244f94e8a5f"
        },
        {
            "sym": "WBTC",
            "address": "0xf4eb217ba2454613b15dbdea6e5f22276410e89e"
        },
        {
            "sym": "WSTR",
            "address": "0xf34d508bac379825255cc80f66cbc89dfeff92e4"
        },
        {
            "sym": "XNL",
            "address": "0x7ca1c28663b76cfde424a9494555b94846205585"
        },
        {
            "sym": "YFI",
            "address": "0xa64514a8af3ff7366ad3d5daa5a548eefcef85e0"
        },
        {
            "sym": "EMPYR",
            "address": "0xE9F226a228Eb58d408FdB94c3ED5A18AF6968fE1"
        }

        */