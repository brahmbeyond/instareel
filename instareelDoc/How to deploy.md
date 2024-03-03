# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


-------------------------------------------------------
Check if SSH keys are set up: You can check if you have SSH keys set up by running ls -al ~/.ssh in your terminal. Look for a file named id_rsa.pub or id_ed25519.pub. If you don't see any such file, you need to generate a new SSH key.

Generate a new SSH key: You can generate a new SSH key by running ssh-keygen -t ed25519 -C "your_email@example.com" in your terminal. Replace "your_email@example.com" with your actual email. Follow the prompts to save the key and enter a passphrase.

Add the SSH key to your GitHub account: Run cat ~/.ssh/id_ed25519.pub (or cat ~/.ssh/id_rsa.pub if you're using RSA) to print your public SSH key. Copy the output, go to your GitHub account settings, navigate to SSH and GPG keys, and click on New SSH key. Paste your key into the Key field and click Add SSH key.

Check SSH access: You can check if SSH is working by running ssh -T git@github.com in your terminal. You should see a message saying that you've successfully authenticated.


After adjusting your configuration, you can build your Docusaurus site by running npm run build in your terminal. This will create a build directory in your my-website folder.

Then, you need to deploy your site to GitHub Pages. Docusaurus has a command for this: GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy. Replace <Your GitHub username> with your actual GitHub username.

 GIT_USER=brahmbeyond USE_SSH=true npm run deploy

This will build your website and push it to the gh-pages branch of your repository. Your site should then be available at https://<Your GitHub username>.github.io/kindei/.


