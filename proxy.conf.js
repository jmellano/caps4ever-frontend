const PROXY_CONFIG = [
  {
    context: [
      "/clan",
      "/stats",
    ],
    target: "http://localhost:8081",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
