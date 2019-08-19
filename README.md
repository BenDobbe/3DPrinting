![Image of 3D Banner](https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/68849784_111296716895107_206524730788806656_o.jpg?_nc_cat=100&_nc_oc=AQmnkZItdMe6la2lnVwKF9x-Pa-m6JO7sOYzsokUHQIwVOTKMYdOYLXlO6SFYYeh79g1ek0a7fuJxl90hqBuRIO-&_nc_ht=scontent-bru2-1.xx&oh=9675d85e12f94e6c4948b4cbcf56e781&oe=5DCB0862)

# 3D Modeling & Printing - Artevelde

Promotional website for the course **3D Modeling & Printing** within **Artevelde University College Ghent**

Built with:

- VueJS Framework
- Headless WordPress

The website is currently hosted at [3d.gdm.gent](https://3d.gdm.gent)
You can view the Augmented Reality model at [Augmented Reality](https://3d.gdm.gent/PromoAR.html)

## Getting Started

### Environment settings

Create a `.env`-file under the root of the project with the following contents:

```
VUE_APP_TITLE={your app title}
VUE_APP_API_URL={your URL to the hosted WordPress API (ex. https://3d.gdm.gent/wordpress/wp-json/wp/v2)}
VUE_APP_MAP_TOKEN={your MapBox map access token}
```

### Installing

Under the root execute:

```
yarn install
```

### Scripts

#### Running the Vue app

Under the root execute:

```
yarn serve
```

#### Building the Vue app

Under the root execute:

```
yarn build
```

This command creates a directory `dist` under the client folder.

## Authors

- Cedric Vanhaegenberg (Website + Headless CMS) | [cedrvanh](https://github.com/cedrvanh)
- Ben Dobbelaere (Augmented Reality) | [bendobbe](https://github.com/bendobbe)