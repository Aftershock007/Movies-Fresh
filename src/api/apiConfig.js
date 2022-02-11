const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e547e7929e7c24d7ee3dee4b66e46621',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;