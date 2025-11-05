#!/bin/bash

# AI ASMR - Clean Script
# Cleans build artifacts and caches

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}   AI ASMR Clean Script${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

echo -e "${YELLOW}Cleaning build artifacts...${NC}"

# Clean Gradle builds
if [ -d "android" ]; then
    echo -e "${BLUE}Cleaning Android builds...${NC}"
    cd android
    ./gradlew clean
    cd ..
    echo -e "${GREEN}✓ Android builds cleaned${NC}"
fi

# Clean node modules (optional)
read -p "Do you want to clean node_modules? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}Removing node_modules...${NC}"
    rm -rf node_modules
    echo -e "${GREEN}✓ node_modules removed${NC}"

    echo -e "${BLUE}Reinstalling dependencies...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencies reinstalled${NC}"
fi

echo ""
echo -e "${GREEN}Clean complete!${NC}"
echo ""
