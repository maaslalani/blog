const pageDisplay = document.querySelector('page-number');
const pageSize = 15;

let page = 0;

function updatePageDisplay() {
  pageDisplay.innerHTML = page;
  setPosts();
}

function pageCount(posts) {
  const postsCount = posts ? posts.split('\n').length - 1 : pageSize;
  return Math.floor((postsCount - 1) / pageSize);
}

function paginated(posts) {
  return posts
    .split('\n')
    .slice(page * pageSize, (page + 1) * pageSize)
    .join('\n')
}

function nextPage() {
  page = Math.min(page + 1, pageCount(posts));
  updatePageDisplay();
}

function previousPage() {
  page = Math.max(page - 1, 0);
  updatePageDisplay();
}

function handleKeydown(event) {
  switch (event.keyCode) {
    case 37:
    case 72:
      previousPage();
      break;
    case 39:
    case 76:
      nextPage();
      break;
  }
}

document.addEventListener('keydown', handleKeydown);
pageDisplay.addEventListener('click', nextPage);
