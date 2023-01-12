export default (function () {
  const showMore = document.querySelector('.show-more');
  const productsLength = document.querySelectorAll('.item-portfolio').length;
  let items = 27;

  showMore.addEventListener('click', () => {
    items += 6;
    const array = Array.from(document.querySelector('.portfolio-grid').children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add('is-visible'));
    if (visItems.length === productsLength) {
      showMore.style.display = 'none';
    }    
  });
}())