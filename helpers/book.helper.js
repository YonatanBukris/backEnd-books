function buildCritiria(query) {
  const critiria = {};

  if (query.title) {
    critiria.title = { $regex: query.title, $options: "i" };
  }

  if (query.author) {
    critiria.author = { $regex: query.author, $options: "i" };
  }

  if (query.genre) {
    critiria.genre = { $regex: query.genre, $options: "i" };
  }

 

 

  return critiria;
}

module.exports = {
  buildCritiria,
};
