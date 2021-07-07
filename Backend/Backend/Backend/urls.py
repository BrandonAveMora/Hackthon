
from django.contrib import admin
from django.urls import path
from Backend.conf.urls import products, users

urlpatterns_init = [
    path('admin/', admin.site.urls),
]

urlpatterns = urlpatterns_init + products.urlpatterns + users.urlpatterns
