from pathlib import Path
from django.urls import path
from apiusers.api.api import user_api_view, user_detail_api_view

urlpatterns = [
    path('api/users/', user_api_view, name = 'apiusers'),
    path('api/users/<int:pk>', user_detail_api_view, name = 'apiusersdetail'),
]