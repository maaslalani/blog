# a script that deletes a post
directory=`dirname $0`
cd $directory
rm "../posts/$1.md"
sh update.sh
