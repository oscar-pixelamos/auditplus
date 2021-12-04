import morgan from "morgan";
import chalk from "chalk";

// Con chalk agregamos color al log de Morgan.

const morganConfig = morgan((tokens, req, res) => {
  return [
    "\n",
    chalk.hex("#ff4757").bold("🍄  Morgan --> "),
    chalk.hex("#34ace0").bold(tokens.method(req, res) + " Request"),
    chalk.hex("#ffb142").bold("Response: " + tokens.status(req, res) + " " + res.statusMessage),
    chalk.hex("#ff5252").bold(tokens.url(req, res)),
    chalk.hex("#fffa65").bold("from " + tokens.referrer(req, res)),
    chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
    chalk.hex("#f78fb3").bold("@ " + tokens.date(req, res)),
    chalk.yellow(tokens["remote-addr"](req, res)),
    chalk.hex("#1e90ff")(tokens["user-agent"](req, res)),
    "\n",
  ].join(" ");
});

export default morganConfig;
