const express = require("express");
const app = express();
const PORT = 3001;

let phoneBook = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/persons", (req, res) => {
  res.json(phoneBook);
});

app.get("/info", (req, res) => {
  const currentTime = new Date();
  res.send(`<p>Phonebook has info for ${phoneBook.length} people</p>
            <p>${currentTime}</p>
    `);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = phoneBook.find((person) => person.id === id);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = phoneBook.filter((person) => person.id === id);
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  // Validation
  if (!body.name || !body.number) {
    return res.status(400).json({ error: "Name or Number is missings" });
  }

  // Check if name exists

  const nameExists = phoneBook.some((person) => person.name === body.name);
  if (nameExists) {
    return res.status(400).json({ error: "Name Must be Unique" });
  }

  // Create newEntry
  const newPerson = {
    id: String(Math.floor(Math.random() * 100000)),
    number: body.number,
    name: body.name,
  };
  phoneBook.push(newPerson);
  res.status(201).json(newPerson);
});

app.listen(PORT, () => {
  console.log(`Localhost running on ${PORT}`);
});
