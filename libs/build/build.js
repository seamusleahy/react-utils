#!/usr/bin/env node

const microbundle = require("microbundle");

const name = "food";

microbundle({
  name,
  pkg: {
    name,
  },
});
