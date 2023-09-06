from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SpaceTechSerializer
from .models import SpaceTech

# Create your views here.

class SpaceTechView(viewsets.ModelViewSet):
    serializer_class = SpaceTechSerializer
    queryset = SpaceTech.objects.all()