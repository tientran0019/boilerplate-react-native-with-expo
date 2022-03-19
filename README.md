# React Native Boilerplate with Expo
🚀A powerful react native starter template that bootstraps development of your mobile application.

## What's inside

- Always up-to-date React Native and Expo scaffolding
- Redux for state management
- React Navigation for simple navigation
- Disk-persisted application state caching

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/tientran0019/react-native-boilerplate-with-expo.git

# Install dependencies
yarn
```

#### 2. Secrets

If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

```js
API_URL=https://api.example.com/api/v1/
WEB_URL=https://example.com
```

`process.env` now has the keys and values you defined in your `.env` file.

If you need more than one environment. Let's create a `.env.production` file for the production environment.

#### 3. Open RNS with Expo

First, you need to install Expo CLI (if you don't have it yet). You can do it by running the following command in terminal:
```
npm install expo-cli --global
```

Then you can start the project by going to the project's folder and running there:
```
expo start
```

That's it! Cool, right?

## Contributing

If you find any problems, please [open an issue](https://github.com/tientran0019/react-native-boilerplate-with-expo/issues/new) or submit a fix as a pull request.

## Author
Tien Tran <tientran0019@gmail.com>
