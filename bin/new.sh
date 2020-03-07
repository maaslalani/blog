# a script that creates a new post
directory=`dirname $0`
cd $directory
touch "../posts/$1.md"
sh update.sh
