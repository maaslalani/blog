const navigation = document.querySelector('ul');
const main = document.querySelector('main');

const converter = new showdown.Converter();
converter.setFlavor('github');

let posts = [];

async function fetchPosts(postsFile) {
  posts = await fetchFile(postsFile);
}

async function fetchFile(filename) {
  return await (await fetch(filename)).text();
}

function setPosts() {
  navigation.innerHTML = posts
    .replace(/(\w+)/g, '<a href="#/$1"><li>$1</li></a>');
}

// fetch contents of post and display it
async function setPost(postTitle) {
  main.innerHTML = converter.makeHtml(await fetchFile(postTitle));
}

function handleHashChange() {
  const { hash } = window.location;
  setPost(`posts/${hash.split('/')[1]}.md`);
}

fetchPosts('./posts.md')
  .then(setPosts);

handleHashChange();
window.onhashchange = handleHashChange;
