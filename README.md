# Angular CLI Templates

These are project templates that are used by the PX Blue CLI when starting a new PX Blue project. 

## Available Templates

### Blank
The Blank template provides a bare-bones application with PX Blue components and themes automatically configured and ready to use. This template is available [here](https://www.npmjs.com/package/@pxblue/angular-template-blank).

### Routing
The Routing template provides all of the essential PX Blue configuration as well as an `app.routing.ts` configuration and a few sample pages. It also adds a navigation Drawer to switch between several sample screens. This template is available [here](https://www.npmjs.com/package/@pxblue/angular-template-routing).

### Authentication
The Authentication template includes everything from the Routing template and also installs and configures the PX Blue [angular-auth-workflow](https://www.npmjs.com/package/@pxblue/angular-auth-workflow) package to automatically wrap the main application with functions and screens for Login, Registration, Change Password, etc. This template is available [here](https://www.npmjs.com/package/@pxblue/angular-template-authentication-typescript).

|                | placeholder landing page | navigation drawer & routing  | login & registration screens  |
| -------------- | ------------------------ | ---------------------------- | ----------------------------- |
| Blank          | ✅                       |                              |                               |                                
| Routing        | ✅                       | ✅                           |                               |
| Authentication | ✅                       | ✅                           | ✅                            |


## Screenshots
#### Blank Template
![Blank Template](./images/blank.png)

## Usage
You can use these templates with the PX Blue CLI (recommended):

```sh
npx -p @pxblue/cli pxb new angular --template=blank
npx -p @pxblue/cli pxb new angular --template=routing
npx -p @pxblue/cli pxb new angular --template=authentication
```

## Testing Locally
If you would like to test these templates locally, you may do so by running the following command:
```
yarn start:blank 
or
yarn start:routing
or
yarn start:auth-workflow
```
