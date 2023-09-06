from rest_framework import serializers
from .models import SpaceTech

class SpaceTechSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceTech
        fields = ('id', 'title', 'des')