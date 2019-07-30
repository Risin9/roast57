var api_url = '';

switch (process.env.NODE_ENV) {
    case 'developer':
        api_url = 'http://roast57.test/api/v1';
        break;

    case 'production':
        api_url = 'http://roast57.com/api/v1';
        break;
    default:
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}