# Doc Racket Enh
Racket Doc enhancement


* sfsdf
* sww

# Install
1. Chorme: Open `chrome://extensions/` and enable the developer mode, and then, click to load the directory of this repo.
2. Firefox: Directly click [this link](https://addons.mozilla.org/zh-CN/firefox/addon/doc-racket-enh) and install it.


# Explaination
Currently, this plugin will only be automatically enabled for links of websites below:
1. `https://docs.racket-lang.org/*`
2. `file:///Applications/Racket v*/*` (<= when you view racket doc with `raco doc` cmd.)


# TODOs


# dev build for publishing to a browser plugin
~~~shell
zip -r -FS ../doc-racket-enh.zip * --exclude '*.git*' '.*' '*__MACOSX/*' 'images-back*'  'LICENSE' 'screenshot/*' '*.DS_Store'
tar -czvf doc-racket-enh.tar.gz doc-racket-enh
~~~
