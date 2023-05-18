function breedTemplate(breed) {
  return `<option value="${breed}">${breed}</option>`;
}

function catTemplate(cats) {
  return `<li>
            <img
                src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
                alt="Black Cat"
            />
            <h3>Pretty Kitty</h3>
            <p><span>Price: </span>350$</p>
            <p><span>Breed: </span>Bombay Cat</p>
            <p>
                <span>Description: </span>Dominant and aggressive to other cats.
                Will probably eat you in your sleep. Very cute tho.
            </p>
            <ul class="buttons">
                <li class="btn edit"><a href="">Change Info</a></li>
                <li class="btn delete"><a href="">New Home</a></li>
            </ul>
        </li>`;
}

module.exports = {
  breedTemplate,
  catTemplate,
};
