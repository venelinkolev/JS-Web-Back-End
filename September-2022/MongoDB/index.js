const mongoose = require('mongoose');
const Person = require('./models/Person');
const Article = require('./models/Article');
const Comment = require('./models/Comment');

const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log('Database connected');

  //   const person = new Person({
  //     firstName: 'Venelin',
  //     lastName: 'Kolev',
  //     age: 40,
  //   });

  //   await person.save();

  //   const data = await Person.find({});
  //   console.log(data[0].sayHi());
  //   console.log(data[0].name);

  //   data[0].name = 'John Peterson';
  //   await data[0].save();

  //   const person = await Person.find({ firstName: 'Venelin' });
  //   const personOne = await Person.findOne({ firstName: 'Venelin' });
  //   const personById = await Person.findById('64483c3369f8b56501a1083b');

  //  console.log(personById);

  //   await Person.create({
  //     firstName: 'Maria',
  //     lastName: 'Petkova',
  //     age: 33,
  //   });

  //   await Person.create({
  //     firstName: 'Ivan',
  //     lastName: 'Petkov',
  //     age: 36,
  //   });

  //const result = await Person.find({ age: { $gte: 30, $lte: 40 } });

  //   const result = await Person.find()
  //     .where({ age: { $gte: 30 } })
  //     .and({ age: { $lte: 44 } });

  //   const resultOne = await Person.find()
  //     .where('age')
  //     .gte(30)
  //     .lte(44)
  //     .sort({ age: -1 })
  //     .skip(10)
  //     .limit(10);

  //   const resultTwo = await Person.find().where('firstName').equals('Venelin');

  //  console.log(resultOne);

  //   await Comment.create({
  //     author: 'John',
  //     title: 'First Article',
  //     content: 'Lorem Ipsum',
  //   });

  // await Comment.create({
  //     author: 'John',
  //     content: 'Nice article!',
  //   });

  //  const article = await Article.findOne({});

  //   const comment = await Comment.findOne({});

  //   article.comments.push(comment);

  //await article.save();

  const article = await Article.findOne({}).populate('comments', 'content');

  console.log(article.comments[0]);

  await mongoose.disconnect();
}
