from django.urls import path
from . import views

urlpatterns = [
    path('get-info/',views.getinfo,name='get-info'),
    path('add-info/',views.addinfo,name='add-info'),
]