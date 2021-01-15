let config = {
    fsRoot: __dirname+'/files',
    rootName: 'Abhishek Demo Folder on API server',
    port: process.env.PORT || '3020',
    host: process.env.HOST || '0.0.0.0'
  };
  
  let filemanager = require('@opuscapita/filemanager-server');
  filemanager.server.run(config);