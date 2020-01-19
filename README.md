# react-bank

small web-app which imitates bank application, main currency is **PLN**,

## features

-  main site with sign up section
-  balance section which shows your balance in 5 currencies
-  savings account section which imitates transfers to and from savings account
-  currencie change section, where you can change your money at the NBP rate (fetched from its [**API**](http://api.nbp.pl/)
-  settings section where you can change your password

#### Installation

1. clone this repository to your directory
2. open your terminal in main directory of the repository
3. write inside:

```sh
npm install
npm start
```

if you do not have the _Node Package Manager_ on your computer you can download it from [**here**](https://nodejs.org/en/download/)

the application will start by default on **localhost:3000/**

#### user data:

-  _LOGIN_: **bankuser**
-  _PASSWORD_: **passwd**

##### Technologies used:

-  React.js
-  Redux
-  Scss
-  HTML5

##### Example algorithm

Scheme block of the selling currency algorithm

![blockScheme](https://raw.githubusercontent.com/szymonszoldra/react-bank/master/blockScheme.png)
