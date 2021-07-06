
from django.contrib import admin
from django.urls import path
from Backend.conf.urls import products, users
from rest_framework.routers import DefaultRouter
from apiproducts.views import ProductViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns_api = router.urls

urlpatterns_init = [
    path('admin/', admin.site.urls),
]

urlpatterns = urlpatterns_init + urlpatterns_api + products.urlpatterns + users.urlpatterns
