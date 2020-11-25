# melitest

A MercadoLibre style minimalistic page, which searches for products and shows them on a list.
When clicked on a product from the list, it shows a details page about the product, and a breadcrumb of categories it belongs to.

---

## Requirements

For development, you will only need Node.js and a node package manager, npm, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Linux / Mac

  You can install nodejs and npm easily with apt install, just run the following commands.

```
    $ sudo apt install nodejs
    $ sudo apt install npm
```

---

## Install

```
    $ git clone git@github.com:BrunoMorales/melitest.git
    $ cd melitest
    $ npm install
    $ npm run build
```

## Running the project

To start running server on port 4002:

```
    $ node server
```

To start the application on the port 3000 with a watcher.

```
    $ npm start
```

Then navigate to `http://localhost:3000` on the browser.

## Run tests

```
    $ npm run test
```

Thank you for your consideration.
