class Logger {

  constructor() {
    this.config = {
      appName: 'Not configured'
    }
  }

  setConfig(config) {
    this.config = config;
  }


  log(message, ...params) {
    console.log(this.config.appName, message, ...params)
  }

}

// Node.js faz cache dos módulos em tempo de inicialização
// Assim, a instância será alocada no cache e deverá ser recebida para os requires subsequentes
module.exports = new Logger();