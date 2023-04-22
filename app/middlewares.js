const cors = require("cors");
const express = require("express");

const middlewares = [cors(), express.json()];

module.exports = middlewares;
