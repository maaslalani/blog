# Blog

This post is about how this blog works (meta), and my workflow for writing a post.

## Code
Behind this blog is a simple JS script that takes a markdown file and displays it as HTML. Even this post is a simple [markdown file](./posts/blog.md).

Because of this this entire blog can be read through just curling links. Try it out:

Get a list of all blog posts:
```bash
curl https://maaslalani.com/blog/posts.md
```

Then, view any particular blog post:

```bash
curl https://maaslalani.com/blog/posts/blog.md
```

The sidebar to the left is populated by the same script that reads [a file](./posts.md) and converts each line in that file to a link that goes to the URL of this page followed by `#/title`. Whenever the `window.location.hash` of this page changes, the script loads in the matching markdown file from the [`./posts`](./posts) directory.

That is pretty much all there is to it. I love simplicity. There are definitely some features missing, though.

This project uses `showdown` to convert from markdown to HTML on the fly as well as `Prism` for syntax highlighting on code blocks.

## Workflow

In addition to the JS script that powers all of this, I have a few bash scripts that I use to improve workflow. This is probably way too over optimized for right now.

I can type `new hello` and the `new.sh` script will be executed which will create a file `hello.md` in the `posts/` directory and will update the posts list so that it shows up in the sidebar.

I can type `delete hello` and the `delete.sh` script will reverse the effects of a `new` operation. Namely, it will `rm` (remove) the `hello.md` file in the `posts/` directory and update the posts list to reflect the folder.

The `update.sh` script's main functionality is that it lists out all files in the `posts/` directory and then removes the `.md` file extensions and removes the `undefined.md` file and then writes to the `posts.md` file which is then read upon site visit to populate the sidebar. The `undefined.md` file contains [the introduction](./posts/undefined.md) to this blog. It is named `undefined.md` since I use a little javascript trick that makes use of javascript return undefined when a file is not found to make the logic in the code a little more simple (although this might make it more magical).

```bash
ls -1 ../posts | sed -e 's/.md//' -e '/undefined/d' > ../posts.md
```

The [source code](https://github.com/maaslalani/blog) is available on github. 
