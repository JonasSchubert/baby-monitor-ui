<div style="text-align: center;">
<img height="128" src="./app.png">
</div>

# Baby Monitor - UI

> !!!\
> The [server](https://code.sinthu-und-jonas.de/jsa/baby-monitor/server) project is required to use this website.\
> !!!

This Angular project was created while we were pregnant. I wanted to create a server to keep track of our baby, the surrounding temperature and be able to play some lullabies to calm her down.

The UI uses the latest (`14`, as of 10/2022) Angular version and a python server to provide and control the mentioned functionalities.

![screenshot](./screenshots/screenshot.jpeg)

## For developers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

### Development server

Install all dependencies with `npm install` and then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Container

I am running this website on a different machine then the server.

The server is running direcetly on a Raspberry Pi 4 to access and utilies the hardware and to avoid to install any more tools or services limiting the resources of my Pi. I am running a minimal version of Raspbian on this machine.

The UI is containerized using Docker. This is deplyoed to an Intel NUC with Ubuntu Server and installed Docker.

You can create a Docker container while running `npm run docker:build`. You should adjust the container name. It points to my private registry.

If you also have a private registry, you can run `npm run docker:release` to build and publish the container.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

> I did not at any unit tests. ;)

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

> I did not at any end-to-end tests. ;)

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributors

| [<img alt="JonasSchubert" src="https://secure.gravatar.com/avatar/835215bfb654d58acb595c64f107d052?s=180&d=identicon" width="117"/>](https://code.sinthu-und-jonas.de/jonas-schubert) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [Jonas Schubert](https://code.sinthu-und-jonas.de/jonas-schubert) |

## License

`Baby Monitor - UI` is distributed under the MIT license. [See LICENSE](LICENSE) for details.

```
MIT License

Copyright (c) 2022 Jonas Schubert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
