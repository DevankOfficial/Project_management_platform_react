from pymongo import MongoClient
from pandas import DataFrame


class Database:
    def __init__(self):
        CONNECTION_STRING = "mongodb://ipuser:ippassword@192.168.0.150:27017"
        CLIENT = MongoClient(CONNECTION_STRING) 
        self.DB = self.ConnectToServer()
    
    
    def ConnectToServer(self):
        DB = self.CLIENT["IPwebsite"]
        
        try: 
            DB.command("serverStatus")
        except Exception as e: 
            print(e)
        else: 
            print("Databse connected!")
        
        return DB
    
    
    def CloseConnection(self):
        pass
    
    
    def RegisterUser(self, user_details):
        try:
            user = {
                "_id" : "user",
                "first_name" : user_details["firstname"],
                "lastname" : user_details["lastname"],
                "dob" : user_details["dob"],
                "gender" : user_details["gender"],
                "email" : user_details["email"],
                "address1" : user_details["address1"],
                "address2" : user_details["address2"],
                "state" : user_details["state"],
                "city" : user_details["city"],
                "pincode" : user_details["pincode"],
                "country" : user_details["country"],
                "mobile_country" : user_details["mobile1"],
                "mobile_phone" : user_details["mobile2"],
                "profile_image": user_details["profile_image"]
            }
            
            query = {
                "$or": [
                    {
                        "email" : user_details["email"]
                    }, 
                    {
                        "mobile_country" : user_details["mobile1"],
                        "mobile_phone" : user_details["mobile2"],
                    }
                ]
            }
            
            valid = self.DB.findOne( query )
            
            if valid:
                message = {
                    "status" : "FAILED",
                    "message" : "User is already registered",
                    "data" : {},
                    "error" : "No error(s) occurred during the process..."
                }
            else:
                self.DB.insert_one(user)
                
                message = {
                    "status" : "SUCCESS",
                    "message" : "User registered successfully.",
                    "data" : {},
                    "error" : "No error(s) occurred during the process..."
                }
        except Exception as e:
            message = {
                "status" : "FAILED",
                "message" : "Nothing...",
                "data" : {},
                "error" : f"Something went wrong. Error: {e}" 
            }
            
        return message
    
    
    def LoginUser(self, login_details):
        try:
            query = {
                "email" : login_details["username"], 
                "password" : login_details["password"] 
            }
            valid = self.DB.findOne( query )
            
            if user:
                message = {
                    "status" : "SUCCESS",
                    "message" : "User Loged in.",
                    "data" : {},
                    "error" : "No error(s) occurred during the process..." 
                }
            else:
                message = {
                    "status" : "FAILED",
                    "message" : "Wrong username or password.",
                    "data" : {},
                    "error" : "No error(s) occurred during the process..." 
                }
        except Exception as e:
            message = {
                "status" : "FAILED",
                "message" : "Nothing...",
                "data" : {},
                "error" : f"Something went wrong. Error: {e}" 
            }
            
        return message