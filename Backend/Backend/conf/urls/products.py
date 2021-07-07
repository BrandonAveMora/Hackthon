from rest_framework.routers import DefaultRouter
from apiproducts.views import ProductViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('api/products', ProductViewSet)

urlpatterns = router.urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)