# a script that updates the posts.md file with the current posts
# from the posts/ directory.
directory=`dirname $0`
cd $directory
ls -1 ../posts | sed -e 's/.md//' -e '/undefined/d' > ../posts.md