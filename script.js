const navigation = document.querySelector('ul');
const main = document.querySelector('main');
const converter = new showdown.Converter();

// get list of posts and populate archives
const postsFile = './posts.md';

fetch(postsFile)
  .then(file => file.text())
  .then(setPosts);

function setPosts(text) {
  const posts = text.split('\n');
  const postsList = posts.map(createListElement);
  const postsHtml = postsList.join('\n');
  navigation.innerHTML = postsHtml;
}

function createListElement(text) {
  return `<a href="#/${text}"><li>${text}</li></a>`;
}

// fetch contents of post and display it
function setPost(postTitle) {
  fetch(postTitle)
    .then(file => file.text())
    .then(text => {
      main.innerHTML = converter.makeHtml(text);
      Prism.highlightAll();
    })
}

function handleHashChange() {
  const { hash } = window.location;
  setPost(`posts/${hash.split('/')[1]}.md`);
}

handleHashChange();
window.onhashchange = handleHashChange;
