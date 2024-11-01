# Primis Tracking

<div align="center">
    <img src="/public/demo.png" >
</div>

## Requirements

- Node - `v22.3.0`
- Next js - `15.0.2`

Please try to use a node version `v20.5.1` or something higher than this because in next js 15 older versions of node could give some unexpected errors.

For this you can use `nvm - node version manager`

## Getting Started

> Please make sure you are using node js `v20.5.1` or higher. I am using node js `v22.3.0` for this project

- Clone the project - `git clone https://github.com/rasif-sahl/primis-tracking.git`
- Then run - `cd primis-tracking`
- To install the dependencies run - `npm install`
- Copy the variable in the `env-example` file.
- Create `.env` file and then add the copied variable here and replace them with your own values.
- To run the project - `npm run dev`
- Then click on this link - [http://localhost:3000](http://localhost:3000) 

## Notes

- Images that was coming from this link `https://cdn11.bigcommerce.com/` was been redirected to a `not found` page.
- In the ordered product list I was getting only one products and it is `[Sample] Able Brewing System`.
- The banner image was selected according to this product.
- And in the summary the product list height is been fixed if it exceeds more than 03 products it will start scrolling.
- The currency was been returned in both `R` and `ZAR` so in the order summary I added `R` by default and in the recommended products I am displaying the value thats been returned in the payload.

## Development

- I have used `next js` with `tailwind css` to develop this project.
- I have added the brand colors in the `tailwind.config.ts` file and access it globally.
- I have defined this `https://cdn11.bigcommerce.com/` in the `next.config.ts` file to access the images.
- In this project I have worked on the `Responsive design` with specific break points.
- I have added `not-found.tsx` page as well ( This page is also `Responsive`).
- I have added a preloader and if an wrong `order id` is been passed an error message will be displayed.

## File Structure

Folder | Contents
-------|---------
`app` | All the files related to the front-end. every file or folder that has `page.tsx` defines a route.
`app/components` | All the reusable components and common components related to specific pages are here..
`app/components/orderConfirmation` | Components related to the order confirmation screen. (Helps to keep the order confirmation page clean) 
`app/components/ui` | All the reusable components are here.
`public/` | This works from the root and also it holds the static assets of this project like `images`.
`store` | This holds all the reusable functions, libraries, interfaces and requests..
`store/interface` | Because this project uses `typescript` to define the type of the object interfaces are been used.
`store/lib` | This is mostly been used to have utility functions helper functions and etc...
`store/requests` | This folder is used to manege all the API calls in a single place.
`env-example` | All the environment variable name are been added here.