# Rendering Test

## Overview

Nebula development serve uses [mocked Qlik core engine (Enigma mocker)](https://github.com/qlik-oss/nebula.js/blob/master/apis/enigma-mocker/README.md) to render the sn-action-button based on the [testing fixture files](https://github.com/qlik-oss/nebula.js/tree/master/commands/serve/docs).

Testing cases use [Playwright](https://playwright.dev/) to capture screenshots of those rendered charts and matches against the baseline to ensure our charts look as intended.

Visual regression testing flow:

1. Start Nebula development serve and launch Playwright
1. Iterate testing fixture files
1. Create a test case per testing fixture file
1. Render a chart based on the testing fixture file in Nebula serve using Enigma mocker
1. Capture a screenshot by Playwright
1. Compare screenshot with the baseline image

To capture the same screenshot on the same operating system both locally and on a CI server, we use a docker instance to take the contents of `dist` and start a http-server. The rendering tests then run on your local machine or the CI server.

## Updating snapshots

If you've updated the UI, you need to run the update-screenshots.sh script:

    # Install dependencies
    pnpm --frozen-lockfile

    # Build nebula.js visualization
    pnpm build

    chmod 777 ./test/rendering/commands/update-screenshots.sh
    pnpm test:local:update:screenshots

It will spin up a docker container with playwright and enable us to emulate our CI server for updating the reference screenshots. The `--update-snapshots` will generate new screenshots for you.

Make sure to commit these after you've **confirmed the screenshot changes**.

Sometimes tests might break, if you are certain no UI changes have been made just re-run the failed workflow.

<!-- ## Test cases description -->

<!-- scenario_1.fix.js:  -->
