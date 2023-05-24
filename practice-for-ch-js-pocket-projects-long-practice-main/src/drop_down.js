const dogs = 
{
  "Corgi":"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];
  Object.keys(dogs).forEach(dog => {
    const link = document.createElement('a')
    link.innerHTML = dog;
    link.href = dogs[dog];
    const li = document.createElement('li');
    li.classList.add('dog-link');
    li.appendChild(link);
    dogLinks.push(li);
  });
  console.log(dogLinks)
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  const dropDown = document.querySelector('.drop-down-dog-list')

  dogLinks.forEach(dog => {
    dropDown.appendChild(dog);
  })
}

attachDogLinks();