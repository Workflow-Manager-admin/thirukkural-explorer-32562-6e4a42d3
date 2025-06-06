#!/bin/bash
cd /home/kavia/workspace/code-generation/thirukkural-explorer-32562-6e4a42d3/thirukkural_explorer_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

