#!/bin/bash

# Function to check if 'basePath' is present in 'sanity.config.ts'
checkBasePath() {
  if [[ -f "./sanity.config.ts" ]]; then
    if grep -q "basePath" ./sanity.config.ts; then
      echo "✅ basePath found in sanity.config.ts"
    else
      echo "❌ basePath not found in sanity.config.ts"
    fi
  else
    echo "⚠️ sanity.config.ts file not found"
  fi
}

# Function to check if '.env' file has been modified recently
checkEnvFile() {
  if [[ -f "./.env" ]]; then
    if [ $(stat -c %Y .env) -ge $(date +%s -d '1 minutes ago') ]; then
      echo "⚠️ .env file was modified recently"
    else
      echo "✅ .env file is stable"
    fi
  else
    echo "⚠️ .env file not found"
  fi
}

# Function to check for running service on port 9315
checkPort() {
  if lsof -i :9315 > /dev/null; then
    echo "✅ Service running on port 9315"
  else
    echo "❌ No service found running on port 9315"
  fi
}

# Run checks
checkBasePath
checkEnvFile
checkPort
