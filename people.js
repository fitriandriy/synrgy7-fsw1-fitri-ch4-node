const fs = require('fs')

const people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  }
]

const write = (data) => {
  fs.writeFile('./dummy.txt', JSON.stringify(data), 'utf-8', (err) => {
    if (err) console.log('error saving data!')
  })
}

// array of string
const read = (file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    const parsed = JSON.parse(data).map((row) => row.name)
    console.log(parsed)
  })
}

// return object
const getDetail = (id) => {
  fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
    const parsed = JSON.parse(data)

    const result = parsed.find((row) => row.id === id)
    console.log(result)
  })
}

module.exports = {
  people,
  write,
  read,
  getDetail
}