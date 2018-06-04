const PROXY_CONFIG = [
  {
    context: [
      "/api/clan",
      "/api/stats",
    ],
    target: "http://localhost:8081",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
