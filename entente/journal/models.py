from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone
from datetime import datetime

# Create your models here.

class BaseModel(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    created = models.DateTimeField(default=timezone.now)
    modified = models.DateTimeField(default=timezone.now)

class Widget(BaseModel):
    pass

class Habit(Widget):
    title = models.CharField(max_length = 32)
    date = models.DateField()
    status = models.IntegerField(default = 0)

class Prompt(Widget):
    prompt_text = models.CharField(max_length = 255)
    date = models.DateField()
    response_text = models.TextField()

class Event(Widget):
    name = models.CharField(max_length = 64)
    datetime = models.DateTimeField()
