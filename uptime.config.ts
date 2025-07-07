const pageConfig = {
  // Title for your status page
  title: "Suzizisu Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
   links: [

  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog_monitor',
      // `name` is used at status page and callback message
      name: 'Wordpress',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://suzi.one',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'https://suzi.one',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://suzi.one',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      //expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
     // timeout: 10000,
      // [OPTIONAL] headers to be sent
     // headers: {
       // 'User-Agent': 'Uptimeflare',
       // Authorization: 'Bearer 8J948BAg8kfQqOe_tGRvDoqqm5pdFX26zO38Bqc5',
     // },
      // [OPTIONAL] body to be sent
     // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      //responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
    //  checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'nezha_monitor',
      // `name` is used at status page and callback message
      name: 'Nezha',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dash.937564.xyz',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'https://dash.937564.xyz',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dash.937564.xyz',

    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'typecho_monitor',
      // `name` is used at status page and callback message
      name: 'Typecho',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://type.937564.xyz',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'https://type.937564.xyz',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://type.937564.xyz',

    },
    // Example TCP Monitor
    {
      id: 'sg_tcp_monitor',
      name: 'SG',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '[2407:cdc0:d010:2508::]:39255',
      timeout: 5000,
    },
    {
      id: 'jp_tcp_monitor',
      name: 'JP',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '45.66.218.105:53810',
      timeout: 5000,
    }, 

  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://uptimeflare-notice.vercel.app/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://5274879934:AAEOQn4q71bgPwKmPQDJLR4vxrMV1TZMfco/623981253",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
