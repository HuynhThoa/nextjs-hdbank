const cli = require("next/dist/cli/next-start");
const env = require("@next/env");

const envConfig = env.loadEnvConfig("./", false);
cli.nextStart(["-p", envConfig.combinedEnv.PORT || 3000]);
