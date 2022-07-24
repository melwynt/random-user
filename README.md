# Getting Started with `random-user` repo

This project is an updated version of this tutorial:
[# Fetch Data from an API in React.js - Part 12](https://youtu.be/T3Px88x_PsA) by Ben Awad.

This tutorial shows how to use this API:

- [randomuser.me](https://randomuser.me/)

The original tutorial uses React Class Components.

This current repo is a remastered version with React Hooks (`useState` and `useEffect`).

- [Getting Started with `random-user` repo](#getting-started-with-random-user-repo)
  - [How to run it?](#how-to-run-it)
  - [Things I've added](#things-ive-added)
  - [To-do](#to-do)
  - [Author](#author)

## How to run it?

You can first fork this repo from Github.

Then in your Terminal, you can clone the forked repo.

> I'm using node version `v16.13.0`.
> You can check your node version by typing:
>
> ```
> node -v
> ```
>
> I recommend using NVM to manage your node versions.

Once the repo is cloned:

```
cd random-user
yarn install
```

`yarn install` will install all dependencies.

The repository was initialized with the create-react-app command. That's why it uses yarn.

Finally, you can run the command below to start your React app:

```
yarn start
```

## Things I've added

- Replaced Class Components with Hooks
- Added `async` function in `useEffect`
- Added `try`/`catch` statement and throws an error if `fetch` is not able to retrieve the data from the API

## To-do

- Create UI
- Deploy on Vercel
- Display list of previously fetched users

## Author

- 🐦 Twitter: [@melwyncode](https://twitter.com/melwyncode)<br>
- 🧑‍💻 LinkedIn: [melwynturbant](https://www.linkedin.com/in/melwynturbant)<br>
- 🚀 Frontend Mentor Portfolio - [@melwynt](https://www.frontendmentor.io/profile/melwynt)
