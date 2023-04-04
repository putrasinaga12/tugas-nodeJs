exports.helloWorld = (req, res, next) => {
    res.send('<h1>Ini halaman /api</h1>');
};

exports.favoriteMovies = (req, res, next) => {
    res.send('<h1>Daftar film terfavorit</h1>');
};

exports.ratedMovies = (req, res, next) => {
    res.send('<h1>Daftar film dengan rating tertinggi</h1>');
};