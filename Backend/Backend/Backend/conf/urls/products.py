from apiproducts.views import product_api_view, product_detail_api_view
from pathlib import Path
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/products/', product_api_view, name = 'apiproducts'),
    path('api/products/<int:pk>', product_detail_api_view, name = 'apiproductsdetail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)