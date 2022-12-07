# FE architecture example

To run, follow the below commands
```shell
cd packages/shopping-ds
npm install
npm pack
mv shopping-ds-0.0.1.tgz ../shopping-app/

cd ../shopping-ds-react
npm install
npm pack
mv shopping-ds-react-1.0.0.tgz ../shopping-app/

cd ../shopping-app
npm install
npm start
```

In a separate tab, parallelly run
```shell
cd packages/shopping-services
npm install
npm start
```
