# Password Generator

A program that generates passwords randomly according to some command-line parameters

The program shall support the following command-line interface:

```
$ dotnet run TEMPLATE HOURS
```

## Template

The parameter TEMPLATE specifies which classes of charachters should be used in the
generated password. The following classes should be supported:

- lower characters
- upper characters
- digits
- punctation characters

## Length

The parameter LENGTH specifies how long the generated password should be.