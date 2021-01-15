let config = {
    fsRoot: __dirname+'/files',
    rootName: 'My Folder On Server',
    port: process.env.PORT || '3020',
    host: process.env.HOST || '0.0.0.0'
  };
  
  let filemanager = require('@opuscapita/filemanager-server');
  filemanager.server.run(config);