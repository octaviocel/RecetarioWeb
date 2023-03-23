import { config } from 'dotenv';

config();

export const _dbName = process.env.API_DB_NAME;
export const _dbPort = parseInt(process.env.API_DB_PORT, 10) || 5432;
export const _dbHost = process.env.API_DB_HOST;
export const _dbUser = process.env.API_DB_USER;
export const _dbPassword = process.env.API_DB_PASSWORD;
export const _dbSync = Boolean(process.env.API_DB_SYNC);

export const _isProd = Boolean(process.env.API_IS_PROD);
export const _apiPort = parseInt(process.env.API_PORT, 10) || 4000;
export const _clientURL = process.env.API_CLIENT_URL;
export const _secretSession = process.env.API_SECRET_SESSION;

export const _accessToken = process.env.ACCESS_TOKEN_SECRET;
export const _refreshToken = process.env.REFRESH_TOKEN_SECRET;

export const _s3KeyId = process.env.Q_ACCESS_KEY_ID;
export const _s3Secret = process.env.Q_SECRET_ACCESS_KEY;
export const _s3Region = process.env.Q_AWS_REGION;
export const _s3Bucket = process.env.Q_S3_BUCKET;

export const _waPhoneId = process.env.W_PHONE_KEY;
export const _waToken = process.env.W_TOKEN;

export const _zoomKey = process.env.ZOOM_SDK_KEY;
export const _zoomSecret = process.env.ZOOM_SDK_SECRET;
export const _zoomClientId = process.env.ZOOM_SDK_CLIENT_ID;
export const _zoomApiSecret = process.env.ZOOM_API_SECRET;
export const _zoomApiClientId = process.env.ZOOM_API_CLIENT_ID;

export const _smtpIAMUser = process.env.SMTP_AWS_IAM_USER;
export const _smtpUser = process.env.SMTP_AWS_USER;
export const _smtpPassword = process.env.SMTP_AWS_PASSWORD;
export const _smtpUrl = process.env.SMTP_URL;
export const _smtpSender = process.env.SMTP_SENDER;
export const _smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;
export const _testReceiverEmail = process.env.SMTP_RECEIVER;
