import { execSync } from 'child_process';

try {
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during postinstall:', error);
}
