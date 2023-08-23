# Project Title

Plates CO

## Demo link:
github clone link: https://github.com/leenbostami/PlatesCo.git

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [License](#license)

## About The App

Plates CO is an web app for online food ordering company, that have an offering system and discounts
on the delivery cost based on the purchases amount.

The main functions that have been written in this project:

- addToCart: that will add the plate to products array using useState and take plate code as parameter.
- getSpecialOfferOnCart:it will return the total after the discount, the plate code will take as paramater
  to be more dynamic,it will divide the plates on 2 array, one is the special plate(here is the red plate) and one for the remainig plates,

  foreach inside special plates array, will use % mod, to take 2 index and calculate the discount of it,
  for example: If the array is odd of 3, it will calculate the first 2 index with the discount and sum the last index to the total.

- deletePlatebyId: It will delete the plate from the cart, will take the plate id as parameter.
- getDeliveryFees: It will return the delivery cost based on the total of the plates.
- getTotal: will call getSpecialOfferOnCart and getDeliveryFees function and return the sum of the cart.

## Technologies

I used `jsx`, `css`,`react js` ...

## Setup

- download or clone the repository
- run `npm install`
- `npm start`

## Approach

I adopted the `camelCase` naming style for my css class names, functions,varaibles and components.
I used eslint for coding format.

## License

2023 license @LeenBostami
