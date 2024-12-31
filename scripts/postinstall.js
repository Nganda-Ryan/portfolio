import { execSync } from 'child_process';

try {
  execSync('npm install --force', { stdio: 'inherit' });
} catch (error) {
  console.error('Error during postinstall:', error);
}
