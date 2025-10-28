import os from 'node:os'

import { defineBuilderConfig } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  storage: {
    // provider: 's3',
    // bucket: 'images',
    // region: 'us-east-1',
    // endpoint: 'http://10.0.0.33:18888',
    // accessKeyId: 'KNdrQOUegLC5WHXaydMf',
    // secretAccessKey: 'a1huEYFImzLd7Y1vH7Q2x11Jdf2S1bItE1dXF8Xm',
    // prefix: '',
    // customDomain: 'https://s3-private.innei.in/images',
    provider: 'local',
    basePath: './photos',
    baseUrl: '/photos',
    distPath: './apps/web/public/originals',
  },
  options: {
    defaultConcurrency: 10,
    enableLivePhotoDetection: true,
    showProgress: true,
    showDetailedStats: true,
    digestSuffixLength: 0,
  },
  logging: {
    verbose: false,
    level: 'info',
    outputToFile: false,
  },
  performance: {
    worker: {
      workerCount: os.cpus().length * 2,
      timeout: 30_000,
      useClusterMode: true,
      workerConcurrency: 2,
    },
  },
  plugins: [],
}))
