#jQuery appendGitHub Plugin

Append file contents from GitHub repositories to your website. Supports Markdown. 
Uses GitHub API: http://developer.github.com/v3/repos/contents/#get-contents

##Installation
1. Download latest version (minified version is recommended)
	- [jquery.appendgithub-0.1.min.js](https://s3-eu-west-1.amazonaws.com/jquery.appendgithub/jquery.appendgithub-0.1.min.js) (recommended)
	- [jquery.appendgithub-0.1.js](https://s3-eu-west-1.amazonaws.com/jquery.appendgithub/jquery.appendgithub-0.1.js)
2. Include it like any other script on your website:

	```html
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
	parseMarkdown (optional default=true): if true markdown gets parsed into html 
```
