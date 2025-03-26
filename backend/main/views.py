from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import *
from .database import *
from .utils import *


# Create your views here.

class RegisterView(viewsets.ViewSet):
    user_details = {}
    # otp = OTP()


    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def registerpage1(self, request):
        try:
            firstname = request.data.get("firstname") 
            lastname = request.data.get("lastname")
            dob = request.data.get("dob")
            gender = request.data.get("gender")
            email = request.data.get("email")

            self.user_details['firstname'] = firstname
            self.user_details['lastname'] = lastname
            self.user_details['dob'] = dob
            self.user_details['gender'] = gender
            self.user_details['email'] = email

            return Response({'success': True})
        except Exception as e:
            return Response({'success': False, 'message': f'Unable to Register. Error: {e}'}, status=400)


    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def registerpage2(self, request):
        try:
            address1 = request.data.get("address1")
            address2 = request.data.get("address2")
            state = request.data.get("state")
            city = request.data.get("city")
            pincode = request.data.get("pincode")
            country = request.data.get("country")

            self.user_details['address1'] = address1
            self.user_details['address2'] = address2
            self.user_details['state'] = state
            self.user_details['city'] = city
            self.user_details['pincode'] = pincode
            self.user_details['country'] = country

            return Response({'success': True})
        except Exception as e:
            return Response({'success': False, 'message': f'Unable to Register. Error: {e}'}, status=400)


    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def registergetotp(self, request):
        try:
            mobile1 = request.data.get("mobile1")
            mobile2 = request.data.get("mobile2")
            mobile = mobile1 + mobile2

            return Response({'success': True})
        except Exception as e:
            return Response({'success': False, 'message': f'Unable to Send OTP to {mobile}. Error: {e}'}, status=400)


    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def registerpage3(self, request):
        user = True  # Placeholder for actual user registration logic

        if user:
            return Response({'success': True})
        else:
            return Response({'success': False, 'message': 'Unable to Register'}, status=400)


    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def registerpage4(self, request):
        user = True  # Placeholder for actual user registration logic

        if user:
            return Response({'success': True})
        else:
            return Response({'success': False, 'message': 'Unable to Register'}, status=400)


# Login
class LoginView(viewsets.ViewSet):
    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(username, password)
        user = True  # Simulated authentication for testing
        
        if user is not None:
            return Response({'success': True})
        else:
            return Response({'success': False, 'message': 'Invalid username or password'}, status=400)


# Profile
class ProfileView(viewsets.ViewSet):
    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def isauthorized(self, request):
        user = True  # Simulated authentication for testing
        
        if user is not None:
            return Response({'success': True})
        else:
            return Response({'success': False})
    
    
    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['get'])
    def getuserdata(self, request):
        user = True  # Simulated authentication for testing
        
        if user is not None:
            return Response({'success': True})
        else:
            return Response({'success': False})


# Dashboard
class DashboardView(viewsets.ViewSet):
    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['post'])
    def isauthorized(self, request):
        user = True  # Simulated authentication for testing
        username = "Vignesh Goswami"
        profileimage = "user_123/profile/profile_0001.jpeg"
        profileimage_url = request.build_absolute_uri(f"{settings.MEDIA_URL}{profileimage}")
        
        if user is not None:
            return Response(
                {
                    'success' : True,
                    'message' : "User is authorized.",
                    'data' : {
                        'username' : username,
                        'profileimage' : profileimage_url
                    }
                }
            )
        else:
            return Response(
                {
                    'success' : False,
                    'message' : 'Unauthorized user. Try logging in again.'
                }, 
                status = 401
            )
    
    
    @method_decorator(csrf_exempt)
    @action(detail=False, methods=['get'])
    def getuserdata(self, request):
        user = True  # Simulated authentication for testing
        
        if user is not None:
            return Response({'success': True})
        else:
            return Response({'success': False})