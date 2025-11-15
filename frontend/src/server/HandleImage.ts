const handleImage = (image: string) => {
    const Api = 'http://localhost:8000/storage/'
    return Api + image;
}

export default handleImage;