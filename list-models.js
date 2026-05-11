const { readFileSync } = require('fs');

async function listModels() {
  try {
    const envContent = readFileSync('.env', 'utf8');
    const match = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
    if (!match) {
      console.error('API Key not found in .env');
      return;
    }
    const apiKey = match[1].trim();
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error listing models:', error);
  }
}

listModels();
