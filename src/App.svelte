<script>
import { markdownToHtml } from './markdown.js';
let text;

render(location.hash.split('/').pop() || undefined);

let posts = [ 'game', 'charm' ];

async function view({target}) {
  let {innerText: post} = target;
  await render(post);
}

async function render(post) {
  const response = await fetch(`posts/${post}.md`);
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
  margin: 10vh 0;
}

#article {
  text-align: left;
  text-wrap: wrap;
  flex: 3;
  padding: 0 5vw;
  margin-bottom: 10vh;
  min-width: 300px;
  max-width: 1200px;
}

#sidebar {
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
    <a href="#" on:click={() => render()}><h1 id="thinking">Thinking Out Loud.</h1></a>
    {#each posts as post}
      <a href="#/{post}" on:click={view}>{post}</a>
      <br />
    {/each}
  </div>
  <div id="article">
    {@html text}
  </div>
</main>

