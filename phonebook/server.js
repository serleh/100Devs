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
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/persons", (req, res) => {
  res.json(phoneBook);
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(`<p>Phonebook has info for ${phoneBook.length} people</p>
      <h4>${date}</h4>
    `);
});
app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const book = phoneBook.find((book) => book.id === id);
  if (book) {
    return res.json(book);
  }
  res.status(404).json({ error: "contact not found" });
});

// Delete an entry
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const entry = phoneBook.find((person) => person.id === id);

  if (!entry) {
    return res.status(404).json({ error: "Entry not found" });
  }
  phoneBook = phoneBook.filter((person) => person.id !== id);
  res.status(204).end();
});

// Adding new entry
app.post("/api/persons", (req, res) => {
  body = req.body;

  // Check if name or number is missing
  if (!body.name || !body.number) {
    res.status(400).json({ error: "Name or number missing" });
  }

  // Check if name exixts
  const nameExists = phoneBook.some((entry) => entry.name === body.name);
  if (nameExists) {
    res.status(400).json({ error: "Name must be unique" });
  }

  const newEntry = {
    id: Math.floor(Math.random() * 10000),
    name: body.name,
    number: body.number,
  };
  phoneBook = phoneBook.concat(newEntry);
  res.status(201).json(newEntry);
});
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
