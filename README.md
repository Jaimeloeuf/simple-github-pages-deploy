# simple-github-pages-deploy
Simple CLI tool to deploy to github pages.

Code is directly placed in /bin to make npm CLI create the CLI commands within /node_modules when installing this without having to go through an additonal build/release step of copying the file over.

## Usage
### CLI Options
- `--dir`
    - Pass in a directory other than the default `./docs` to deploy
- `--message`
    - Pass a custom commit message instead of the default `[Github pages deployment commit]`
    - Message must be wrapped in quotes if longer than a single string

### Using from CLI
```bash
# Install as dev dependency
npm install -D simple-github-pages-deploy

# Use npx to run it
# Uses all the default options
npx simple-github-pages-deploy
```

### Add to npm scripts
```json
"scripts": {
    "deploy": "npx simple-github-pages-deploy"
},
```

### Using from CLI without default options
```bash
npx simple-github-pages-deploy --dir ./dist --message "github pages deployment"
```


## Dependencies
- `git` must be installed and available globally from the shell