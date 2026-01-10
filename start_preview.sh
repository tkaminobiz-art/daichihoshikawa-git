#!/bin/bash
# Kill any process on port 3005 just in case
lsof -ti:3005 | xargs kill -9 2>/dev/null

export PATH=$PWD/.local/node/bin:$PATH
echo "Starting preview server on port 3005..."
nohup npm run dev -- -p 3005 > preview.log 2>&1 &
echo "Server process backgrounded. Check preview.log for details."
