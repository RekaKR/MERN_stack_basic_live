const Dog = require('../models/dogModel')

const dog_create_get = (req, res) => {
  Dog.find()
    .then(dogs => res.json(dogs))
    .catch(err => res.json({ message: err }))
}

const dog_create_post = (req, res) => {
  const dog = new Dog({
    dog: req.body.dog,
    dogSec: req.body.dogSec
  })

  dog.save()
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

module.exports = {
  dog_create_get,
  dog_create_post
}