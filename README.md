# Full Stack JavaScript Developer Nanodegree - Image Processing API Project

## Description

- This application provides an API endpoint to get properly scaled version of the requested image.
- This application serves the image directly if one exists for the given height and width.
- For any invalid params or if an image to resize does not exists error message are displayed to the User.

## Endpoint URL and required query params

The application can be accessed using the following URL

`http://localhost:8000/api/images?filename=fjord&height=300&width=450`

### Required Query string parameters

| Query string param | Description                                           |
| ------------------ | ----------------------------------------------------- |
| filename           | Any image available in the `src/assets/images` folder |
| width              | Image width                                           |
| height             | Image height                                          |

## Project Setup

To get this project up and running one will need to:

Download the project zip file, unzip it & install the dependencies using the following command

```
npm install
```

To run the application without creating a build

```
npm run dev
```

To run the application after creating a build

```
npm run start
```

### Build

To create a build

```
npm run build
```

### Linter

Run the following command to check for Lint issues

```
npm run lint
```

### Prettier

Run the following command to format the code using prettier

```
npm run prettier
```

### Test

Run the following command to execute the tests using jasmine

```
npm run test
```
