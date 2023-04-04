exports.getMovies = (req, res, next) => {
    res.send([
    {
        'id' : 1,
        'title' : 'Black Adam',
        'release' : '2022',
    },
    {
        'id' : 2,
        'title' : 'Avengers',
        'release' : '2020',
    },
    {
        'id' : 3,
        'title' : 'Harry Potter',
        'release' : '2010',
    },
    {
        'id' : 4,
        'title' : 'Transformer',
        'release' : '2009',   
    }
]);
};