const handleImage = (image: string) => {
    // const Api = 'http://localhost:8000/storage/'
    const Api = 'https://outgamble-backend.setionugraha.my.id/storage/'
    return Api + image;
}

export default handleImage;