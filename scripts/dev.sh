#!/bin/bash

# AI ASMR - Development Server
# Starts local development server

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}   AI ASMR Dev Server${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "${GREEN}Starting development server...${NC}"
echo -e "${BLUE}URL: http://localhost:8080${NC}"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop${NC}"
echo ""

# Start simple HTTP server
cd www
python3 -m http.server 8080 2>/dev/null || python -m SimpleHTTPServer 8080 2>/dev/null || npx http-server -p 8080
