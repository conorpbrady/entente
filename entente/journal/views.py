from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

from django.shortcuts import render

from .models import *
from .serializers import *
# Create your views here.


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class BlacklistRefreshToken(APIView):
    authentication_classes = ()
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        try:
            refresh_token = request.data['token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status = status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status = status.HTTP_400_BAD_REQUEST)


class HabitList(generics.ListCreateAPIView):
    serializer_class = HabitSerializer
    authentication_classes = [JWTAuthentication,]
    def get_queryset(self):
        start_date = self.request.query_params['start_date']
        end_date = self.request.query_params['end_date']
        return Habit.objects.filter(owner = self.request.user,
                                    date__gte = start_date,
                                    date__lte = end_date)


class PromptList(generics.ListCreateAPIView):
    serializer_class = PromptSerializer
    def get_queryset(self):
        start_date = self.request.query_params['start_date']
        end_date = self.request.query_params['end_date']
        return Prompt.objects.filter(owner = self.request.user,
                                     date__gte = start_date,
                                     date__lte = end_date)

class EventList(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    def get_queryset(self):
        start_date = self.request.query_params['start_date']
        end_date = self.request.query_params['end_date']
        return Event.objects.filter(owner = self.request.user,
                                    date__gte = start_date,
                                    date__lte = end_date)
