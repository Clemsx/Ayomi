# Ayomi

# Start app
```sh
$ cd Ayomi
$ docker-compose up
```

Good to know:
  - One user is created in the database, you can log in with username=admin and password=admin
  - You can add more user in <SERVER_ADDRESS>:8000/admin
  - When you have changed a email of the user, you can check the modification in <SERVER_ADDRESS>:8000/admin where you have the list of all users stored in the database
 
  If you are on Linux and you are experiencing a permission problem it is probably because of SELinux (Security-Enhanced Linux), you can disable it by typing the following command:
```sh
$ sudo setenforce 0
```
