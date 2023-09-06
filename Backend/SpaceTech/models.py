from django.db import models

# Create your models here.

class SpaceTech(models.Model):
    title = models.CharField(max_length=200)
    des = models.TextField(max_length=1000)
