const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-db');
const Celebrity = require('../models/celebrity')

const CelebrityData = [
  {name: 'Ginger Minj', occupation: 'Actress', catchPhrase: 'Eat it!' },
  {name: 'Valentina', occupation: 'Singer', catchPhrase: 'I rather keep it on.' },
  {name: 'Bianca del Rio', occupation: 'Comedian', catchPhrase: 'Baloney!' },
];

Celebrity.create(CelebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((data) => {
    console.log(data.name);
    console.log(data.occupation);
    console.log(data.catchPhrase);

  });
  mongoose.connection.close();
});
