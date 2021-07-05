
from django.contrib import admin
from django.urls import path
from Backend.Backend.conf import products, users

urlpatterns = [
    path('admin/', admin.site.urls),
]
urlpatterns += users.urlpatterns + products.urlpatterns 
