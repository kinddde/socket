class ClientMap {
  constructor() {
    this.map = new Map();
  }

  addClient(id, client) {
    this.map.set(id, client);
  }

  removeClient(id) {
    this.map.delete(id);
  }

  clear() {
    this.map = new Map();
  }

  getClient(id) {
    return this.map.get(id);
  }
}

module.exports = ClientMap;
