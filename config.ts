import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

type EnvConfig = {
    baseURL: string;
    user: string;
    pass: string;
};

function getEnvConfig(env: string): EnvConfig {
    return {
        baseURL: process.env[`${env.toUpperCase()}_URL`] || '',
        user: process.env[`${env.toUpperCase()}_USER`] || '',
        pass: process.env[`${env.toUpperCase()}_PASS`] || ''
    };
}
const env = (process.env.ENV || 'qa').trim();

export const config = getEnvConfig(env);