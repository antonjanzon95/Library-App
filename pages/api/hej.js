export default function handler(req, res) {
  const { method } = req;

  switch (req.url) {
    case "/api/hej":
      if (method === "GET") {
        console.log("hej");
        res.status(200).send("Hello World");
      }
      break;

    case "/api/hej/bye":
      if (method === "GET") {
        res.status(200).send("Bye World");
      }
      break;
  }
}
