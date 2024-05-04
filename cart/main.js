const buscaImagens = async () => {
  try {
    const data = await fetch(
      "https://pixabay.com/api/?key=43716968-76e635a21b2ecccf526a280a2&q=car&image_type=photo&per_page=8"
    );
    const response = await data.json();

    console.log(response);
    response.hits.forEach((element) => {
      const { webformatURL } = element;
      console.log(webformatURL);
    });
  } catch (error) {
    console.log(error);
  }
};

buscaImagens();


