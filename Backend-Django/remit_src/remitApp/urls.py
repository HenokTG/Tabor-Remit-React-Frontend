from django.urls import path
from remitApp import views

urlpatterns = [
    path("", views.home, name="home"),
]
