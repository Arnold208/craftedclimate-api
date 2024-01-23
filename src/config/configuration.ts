export default () => ({
  environment: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY,
  apiData: {
    type: process.env.API_TYPE,
    ip: process.env.API_IP,
  },
});
