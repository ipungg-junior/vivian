from django.contrib import admin
from django.urls import path
from app.views import landing

urlpatterns = [
    path('', landing)
]
