# Arbitrage data generator

This repository contains some basic setup for scripting in node.js.

There are 2 files in the `input_data` directory.

1. routers.json
2. tokens.json

Each file contains an object of records.

## index.js file

index.js file contains two functions `getDualDexPaths` and `getTriDexPaths`.
Paths generated by those functions you can find in `output_data` directory.

### Tips

> Run `yarn generate` to generate paths.
