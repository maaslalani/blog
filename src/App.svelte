<script>
import { markdownToHtml } from './markdown.js';
let text;

render(location.hash.split('/').pop() || undefined);

let posts = [ 'game' ];

async function view({target}) {
  let {innerText: post} = target;
  location.hash = `#/${post}`;
  await render(post);
}

async function render(post) {
  const response = await fetch(`/posts/${post}.md`);
  const content = await response.text();
  text = markdownToHtml(content);
}
</script>

<style>
#thinking {
  line-height: 1.5;
  text-align: right;

  transform: rotate(180deg);

  font-size: 1.75em;
  font-family: -apple-system, Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}

a {
  font-size: 1.1em;
  font-family: Menlo, monospace;
  color: #333;

  line-height: 2;
  link-style: none;
  text-decoration: none;

  cursor: pointer;
}

a:hover {
  opacity: 0.75;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10vh 0;
}

#article {
  text-align: left;
  text-wrap: wrap;
  flex: 3;
  padding: 0 5vw;
  margin-bottom: 10vh;
  min-width: 300px;
}

#sidebar {
  flex: 1;
  padding: 0 5vw;
  min-width: 300px;
}

:global(pre) {
  font-size: 1em;
  font-family: Menlo, monospace;
}

:global(li) {
  margin: 0;
  padding-left: 1em;
  line-height: 1.5;
}
</style>

<main>
  <div id="sidebar">
    <a href="/"><h1 id="thinking">Thinking Out Loud.</h1></a>
    {#each posts as post}
      <a on:click={view}>{post}</a>
    {/each}
  </div>
  <div id="article">
    {@html text}
  </div>
</main>

