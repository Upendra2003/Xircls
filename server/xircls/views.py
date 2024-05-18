from django.shortcuts import render
from django.http import HttpResponse
from .serializers import UserInformationSerializer
from .models import UserInformation
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def getinfo(request):

    info=UserInformation.objects.all()
    serializer=UserInformationSerializer(info,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addinfo(request):
    serializer = UserInformationSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Form data received", "data": serializer.data}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)