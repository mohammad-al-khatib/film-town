const fetchData = async (url, setData, setFilteredMovies) => {
    const response = await fetch(url);
    const data =  await response.json()
    setData(data.results)
    setFilteredMovies(data.results)
}

module.exports = {
    fetchData,
}