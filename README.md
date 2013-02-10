#jQuery appendGitHub Plugin

Append file contents from GitHub repositories to your website. Supports Markdown.  
Dependencies are [marked](https://github.com/chjj/marked) and [base64.js](https://github.com/dankogai/js-base64)  
Uses GitHub API: http://developer.github.com/v3/repos/contents/#get-contents

##Installation
1. Download latest version (minified version is recommended)
	- [jquery.appendgithub-0.1.min.js](https://s3-eu-west-1.amazonaws.com/jquery.appendgithub/jquery.appendgithub-0.1.min.js) (recommended)
	- [jquery.appendgithub-0.1.js](https://s3-eu-west-1.amazonaws.com/jquery.appendgithub/jquery.appendgithub-0.1.js)
2. Download depencies
	- [base64.js](https://raw.github.com/gesundkrank/jquery.appendgithub/master/lib/base64.js)
	- [marked.js](https://raw.github.com/gesundkrank/jquery.appendgithub/master/lib/marked.js)
3. Include script and dependecies like any other scripts on your website:

	```html
	<script type="text/javascript" src="/scripts/lib/base64.js"></script>
	<script type="text/javascript" src="/scripts/lib/marked.js"></script>
	<script type="text/javascript" src="/scripts/lib/jquery.appendgithub-0.1.min.js"></script>
	```

##Usage
```
$("body_or_any_other_container").appendGitHub(path, options) → jQuery;
```
**Parameters**
```
path : :owner/:repo/contents/:path
options:
	prefix (optional default="https://api.github.com/repos/") : path prefix 
	parseMarkdown (optional default=true): if true markdown is parsed to html 
```
