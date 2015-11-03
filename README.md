fsdfsdffsdfsf
# node-express-deom

I am really really pleased to inform you that this is my first tutorial on combination of Node + Express.js + Mongo db and config.<br />

At the end of this tutorial you will be able to write REST web services using node.js and able to perform Crud operation.<br />

First let me explain you architecture of our applciation. <br />
1. At front we will have node server and it will listen on particular port.<br />
2. We will user monk package of npmjs to connect our app with mongodb database.<br />
3. We have user mongo lab free cloud service provider for mongo db.<br />
4. If you have node install in your pc just download this project go to root folder "Mongo app" using cmd and hit npm install command and this will download all module of node.<br />
5. After that you have to hit npm start commad and this will start node server.<br />

Now I have created one collecion named users on mongo db so we will perform CRUD operation on that.<br />

1. GET http://localhost:3000/users hit this on your REST client and this will give you all available list of users like below.<br />



    [
        {
            "_id": "55a39fa4e4b0b251e71420f6",
            "userName": "754305",
            "password": "12345658",
            "email": "abc@yahoo.com"
        },
        {
            "_id": "55a3a4cfd44fc5642226001d",
            "userName": "754306",
            "password": "12345",
            "userEmail": "abcd@gmail.com"
        },
        {
            "_id": "55a3aa2921f83b54199ad7ae",
            "userName": "754310",
            "password": "12345563",
            "userEmail": "abc@gmail.com"
        }
    ]

2. Now for adding user hit below service on REST Client.<br />

POST : http://localhost:3000/users/adduser<br />
Headers : Content-Type : application/json<br />

body : 
    {
        "userName": "754305",
        "password": "12345658",
        "email": "abc@yahoo.com"
    }
    <br />
  Sucees Response : <br />
  

    {
        "message": "user added successfully."
    }
<br />
3. Update User<br />

PUT : http://localhost:3000/users/updateuser<br />
Headers : Content-Type : application/json<br />
Body : <br />
    {
        "_id": "55a39fa4e4b0b251e71420f6",
        "userName": "754305",
        "password": "12345658",
        "email": "abc@yahoo.com"
    }
Response : 


    {
        "message": "user updated successfully."
    }

4. Delete User.
PUT : http://localhost:3000/users/deleteUser/{id}
Headers : Content-Type : application/json
Response : 


    {
        "message": "user deleted successfully."
    }


So that's all it is very easy to make restfull web services using node and express.js.

If you have any doubt please fell free to ping me. and Your valuable feedback will always welcome.

Thanks and regards,
Jignesh Saliya.
