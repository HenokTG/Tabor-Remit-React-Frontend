from django.urls import path
from .views import *


urlpatterns = [
    path('transactions/', TransactionsLIstCreateView.as_view(),
         name='user_registery'),
]