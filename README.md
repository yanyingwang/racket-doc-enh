# Racket Documentation Enhancement
A web browser plugin to enhance Racket Documentation.

**WARNING: This was implemented by racket 8.3, you don't need this for docs.racket-lang.org now.**

# Installation
1. Chorme: Open `chrome://extensions/` and enable the developer mode, and then, click to load the directory of this repo.
2. Firefox: Directly click [this link](https://addons.mozilla.org/zh-CN/firefox/addon/doc-racket-enh) and install it.


# Explanation
Currently, this plugin will only be automatically enabled for links of websites below:
1. `https://docs.racket-lang.org/*`
2. `file:///Applications/Racket v*/*` (<= when you view racket doc with `raco doc` cmd.)


# TODOs
* --
* --

# dev building to publish browser plugin
~~~shell
zip -r -FS ../racket-doc-enh.zip * --exclude '*.git*' '.*' '*__MACOSX/*' 'images-back*'  'LICENSE' 'screenshot/*' '*.DS_Store'
tar -czvf racket-doc-enh.tar.gz racket-doc-enh
~~~
