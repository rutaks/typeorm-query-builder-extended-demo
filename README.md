<div align="center">
    <img src="https://raw.githubusercontent.com/rutaks/typeorm-query-builder-extended/main/assets/img/logo.png" width="200" height="200">
</div>
<h1 align="center"> TypeORM Query Builder Extended Demo Project</h1>
<div align="center">
  <img src="https://img.shields.io/npm/dt/typeorm-query-builder-extended.svg">
  <img src="https://img.shields.io/npm/v/typeorm-query-builder-extended.svg">
  <a href="https://codecov.io/gh/rutaks/typeorm-query-builder-extended">
    <img src="https://codecov.io/gh/rutaks/typeorm-query-builder-extended/branch/main/graph/badge.svg?token=IFVV7MUUOT"/>
</a>
</div>

This project serves to demostrate the use of the `typeorm-query-builder-extended` package

## How to test?
- Create your env file that should have the following env. vars
```
DB_PORT=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=secret
JWT_SECRET=test
```
- Run the app

```bash
yarn
yarn dev
```
- Try out these requests on Postman, cUrl or any tool you use to test a REST API:

```
http://localhost:4000/users?user_._email__contains=@

http://localhost:4000/users?user_._dob__gt=2021-12-17T06:39:25.774Z

http://localhost:4000/users?user_._firstName=li
```


## How does it work?

Documentation of the package can be found [here](https://github.com/rutaks/typeorm-query-builder-extended)

## Contributors

- [Samuel Rutakayile](https://github.com/rutaks)