#Apoy interface
##1、 Project installation
###1 Development environment setup
-Pay attention to the version number, other versions do not support it
```
Node - v
14.17.0
Npm v
6.14.13
```
-Python 2.7 installation required
The reason for errors during component installation is most likely due to the absence of a Python 2 environment.
-Install components
```
Yarn
```
###2 Compile, run and hot load
```
Yarn serve: dev
Yarn serve: test
Yarn serve: prod
```
###3 Compile and package as dist
```
Yarn build: test
Yarn build: prod
```
###4 Compile and upload to nginx server
```
Yarn dp: test
Yarn dp: prod
Yarn dp: prod@root
```
##2、 About environmental env
In order to avoid repeatedly modifying environmental information during the testing process
1. Create root directory files for. env. dev,. env. test, and. env. pro (development, testing, production)
2. File content and field description
-NODE_ ENV: development/product/test, can also be set to other values, such as "test", but the directory structure after packaging is different from "production", so it is still set to "production", and the environment is distinguished through the "VUE-APP-MODE" variable
-VUE_ APP_ MODE: dev/test/prod Internal judgment environment of the project
3. Package.json Packaging Script Command: vue cli service build -- mode prod
4. Other instructions
-Why use process.env.VUE_ APP_ Use MODE to determine, instead of using process.env.CODE_ ENV, if we include NODE in the. env. test file_ If ENV is set to test, the packaged directory structure is not a production package, uncompressed, and there is no code module separation.