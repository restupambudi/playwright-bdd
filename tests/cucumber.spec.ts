import { test } from '@playwright/test';
import { execSync } from 'child_process';

test('Run Cucumber tests', async () => {
    try {
        execSync('yarn cucumber-js', { stdio: 'inherit' });
    } catch (error) {
        throw new Error('Cucumber tests failed');
    }
});