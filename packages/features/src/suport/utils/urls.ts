
export default class URL {


  public static PROD_URL_NO_HTTPS = 'yourprodurl.com'

  public static IS_IN_PRODUCTION_ENVIRONMENT =
    process.env.NEXT_PUBLIC_APP_STAGE !== 'development'


  public static FRONTEND_URL = !this.IS_IN_PRODUCTION_ENVIRONMENT
    ? 'http://localhost:3001'
    : `https://${this.PROD_URL_NO_HTTPS}`

  public static APP_BUNDLE_URL = `next.supertokens.app` // used to create the deep link

  public static REDIRECT_URL = !this.IS_IN_PRODUCTION_ENVIRONMENT
    ? this.FRONTEND_URL
    : 'https://yourprodurl.vercel.app'


  public static APP_ORIGIN_URLS = [
    'capacitor://localhost',
    'http://localhost',
    'capacitor://',
    `capacitor://${this.FRONTEND_URL.split('://')[1]}`,
    `http://${this.FRONTEND_URL.split('://')[1]}`,
  ]

  public static ALLOWED_CORS_URLS = [
    ...this.APP_ORIGIN_URLS,
    'http://localhost:3000',
    'http://localhost:3001',
  ]
}



